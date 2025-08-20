import React, { createContext, useEffect, useState, useRef } from 'react'
import Keycloak from 'keycloak-js'

interface KeycloakContextProps {
  keycloak: Keycloak | null
  authenticated: boolean
  loading: boolean
  user: any
  login: () => void
  logout: () => void
  register: () => void
}

const KeycloakContext = createContext<KeycloakContextProps | undefined>(
  undefined,
)

interface KeycloakProviderProps {
  children: React.ReactNode
}

const KeycloakProvider: React.FC<KeycloakProviderProps> = ({ children }) => {
  const isRun = useRef<boolean>(false)
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null)
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    if (isRun.current) return

    isRun.current = true

    const initKeycloak = async () => {
      try {
        const keycloakConfig = {
          url: import.meta.env.VITE_KEYCLOAK_URL as string,
          realm: import.meta.env.VITE_KEYCLOAK_REALM as string,
          clientId: import.meta.env.VITE_KEYCLOAK_CLIENT as string,
        }
        
        console.log('🔧 Keycloak Config:', keycloakConfig)
        
        const keycloakInstance: Keycloak = new Keycloak(keycloakConfig)

        const authenticated = await keycloakInstance.init({
          onLoad: 'check-sso',
          checkLoginIframe: false,
          silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        })

        console.log('🔐 Keycloak initialized. Authenticated:', authenticated)
        
        if (authenticated) {
          await keycloakInstance.loadUserProfile()
          setUser(keycloakInstance.userInfo)
          console.log('👤 User loaded:', keycloakInstance.userInfo)
        }
        
        setAuthenticated(authenticated)
        setKeycloak(keycloakInstance)
        
        // Set up token refresh
        keycloakInstance.onTokenExpired = () => {
          console.log('🔄 Token expired, refreshing...')
          keycloakInstance.updateToken(70).then((refreshed) => {
            if (refreshed) {
              console.log('✅ Token refreshed')
            } else {
              console.log('❌ Token not refreshed, valid for: ' + Math.round(keycloakInstance.tokenParsed?.exp as number + keycloakInstance.timeSkew as number - new Date().getTime() / 1000) + ' seconds')
            }
          }).catch(() => {
            console.error('❌ Failed to refresh token')
            keycloakInstance.logout()
          })
        }
        
      } catch (error) {
        console.error('❌ Keycloak initialization failed:', error)
        setAuthenticated(false)
      } finally {
        setLoading(false)
      }
    }

    initKeycloak()
  }, [])

  const login = () => {
    console.log('🔑 Initiating login...')
    if (keycloak) {
      keycloak.login({
        redirectUri: window.location.origin,
      })
    }
  }

  const logout = () => {
    console.log('🚪 Initiating logout...')
    if (keycloak) {
      setUser(null)
      keycloak.logout({
        redirectUri: window.location.origin,
      })
    }
  }

  const register = () => {
    console.log('📝 Initiating registration...')
    if (keycloak) {
      keycloak.register({
        redirectUri: window.location.origin,
      })
    }
  }

  return (
    <KeycloakContext.Provider 
      value={{ 
        keycloak, 
        authenticated, 
        loading, 
        user, 
        login, 
        logout, 
        register 
      }}
    >
      {children}
    </KeycloakContext.Provider>
  )
}

export { KeycloakProvider, KeycloakContext }
