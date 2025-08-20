import React, { useEffect, useState } from 'react'
import AuthenticationMessage from '../components/AuthenticationMessage'
import ItemDTO from '../types/dtos'
import useKeycloak from '../hooks/useKeycloak'
import { Button, Loading } from '../components/ui'

const MyItems: React.FC = () => {
  const { authenticated, keycloak } = useKeycloak()
  const [items, setItems] = useState<ItemDTO[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchItems = async () => {
    try {
      if (!keycloak) {
        return
      }

      const userId = keycloak.idTokenParsed?.sub
      setLoading(true)
      setError(null)

      // Use the environment variable for API URL
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000'
      const response = await fetch(`${apiUrl}/api/users/${userId}/items`, {
        headers: {
          Authorization: `Bearer ${keycloak.token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        if (response.status === 401) {
          setError('Authentication expired. Please sign in again.')
          keycloak.login()
          return
        }
        setError(`Error fetching items: ${response.status} ${response.statusText}`)
        return
      }

      const data = await response.json()
      setItems(data.items || [])
    } catch (error) {
      console.error('Error fetching items:', error)
      setError('Unexpected error occurred while fetching items.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (authenticated && keycloak) {
      fetchItems()
    }
  }, [keycloak, authenticated])

  if (!authenticated || !keycloak) {
    return <AuthenticationMessage message="Please sign in to view your items." />
  }

  return (
    <div className="max-w-6xl mx-auto pt-20 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6 mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Items</h1>
            <p className="text-gray-600 mt-2">Manage your personal items and resources</p>
          </div>
          <Button 
            onClick={fetchItems}
            variant="primary"
            disabled={loading}
          >
            {loading ? 'Refreshing...' : 'Refresh'}
          </Button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading your items...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Error</h3>
                <p className="text-sm text-red-700 mt-1">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Items List */}
        {!loading && !error && (
          <>
            {items && items.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.description || 'No description available'}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">ID: {item.id}</span>
                      <Button variant="outline" className="text-sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2M4 13h2m13-8h.01M4 6h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
                <p className="text-gray-600 mb-4">You don't have any items yet. Start by creating your first item.</p>
                <Button variant="primary">
                  Create Item
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default MyItems
