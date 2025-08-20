import React from 'react'
import { Button } from './ui'
import useKeycloak from '../hooks/useKeycloak'

interface AuthenticationMessageProps {
  message?: string
  showActions?: boolean
}

export function AuthenticationMessage({ 
  message = "Please login to access this feature", 
  showActions = true 
}: AuthenticationMessageProps) {
  const { login, register } = useKeycloak()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Authentication Required</h2>
          <p className="text-gray-600">{message}</p>
        </div>
        
        {showActions && (
          <div className="space-y-3">
            <Button 
              onClick={login}
              className="w-full"
              variant="primary"
            >
              Sign In
            </Button>
            <Button 
              onClick={register}
              className="w-full"
              variant="outline"
            >
              Create Account
            </Button>
          </div>
        )}
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Secure authentication powered by Keycloak
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthenticationMessage
