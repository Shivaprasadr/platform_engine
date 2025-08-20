import React from 'react'
import AuthenticationMessage from '../components/AuthenticationMessage'
import useKeycloak from '../hooks/useKeycloak'
import { Button } from '../components/ui'

const MyAccount: React.FC = () => {
  const { keycloak, authenticated, user, logout } = useKeycloak()

  if (!authenticated || !keycloak) {
    return <AuthenticationMessage message="Please sign in to view your account information." />
  }

  return (
    <div className="max-w-4xl mx-auto pt-20 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
          <p className="text-gray-600 mt-2">Manage your account settings and view your information</p>
        </div>

        {/* User Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
            
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <div className="mt-1 p-3 bg-gray-50 rounded-md">
                  {user?.preferred_username || keycloak?.idTokenParsed?.preferred_username || 'N/A'}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1 p-3 bg-gray-50 rounded-md">
                  {user?.email || keycloak?.idTokenParsed?.email || 'N/A'}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <div className="mt-1 p-3 bg-gray-50 rounded-md">
                  {user?.given_name || keycloak?.idTokenParsed?.given_name || 'N/A'}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <div className="mt-1 p-3 bg-gray-50 rounded-md">
                  {user?.family_name || keycloak?.idTokenParsed?.family_name || 'N/A'}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Account Actions</h2>
            
            <div className="space-y-3">
              <Button 
                onClick={() => keycloak?.accountManagement()}
                variant="primary"
                className="w-full"
              >
                Manage Account in Keycloak
              </Button>
              
              <Button 
                onClick={logout}
                variant="danger"
                className="w-full"
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>

        {/* Token Information (for debugging) */}
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Token Information</h2>
          <details className="bg-gray-50 rounded-md p-4">
            <summary className="cursor-pointer font-medium text-gray-700 hover:text-gray-900">
              View ID Token (Development Only)
            </summary>
            <div className="mt-4">
              <textarea
                readOnly
                className="w-full h-64 p-3 border border-gray-300 rounded-md text-sm font-mono"
                value={keycloak?.idToken || 'No token available'}
              />
            </div>
          </details>
        </div>
      </div>
    </div>
  )
}

export default MyAccount
