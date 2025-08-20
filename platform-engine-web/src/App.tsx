import './App.css'
import HomePage from './pages/HomePage'
import { KeycloakProvider } from './context/KeycloakContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyItems from './pages/MyItems'
import Layout from './components/Layout'
import ErrorBoundary from './context/ErrorBoundary'
import MyAccount from './pages/MyAccount'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import { Loading } from './components/ui'
import useKeycloak from './hooks/useKeycloak'

// Protected Route wrapper
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { authenticated, loading } = useKeycloak()
  
  if (loading) {
    return <Loading message="Checking authentication..." />
  }
  
  return <>{children}</>
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route 
            path="/my-account" 
            element={
              <ProtectedRoute>
                <Layout>
                  <MyAccount />
                </Layout>
              </ProtectedRoute>
            } 
          />
          <Route
            path="/my-items"
            element={
              <ProtectedRoute>
                <Layout>
                  <MyItems />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/services"
            element={
              <Layout>
                <ServicesPage />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <ContactPage />
              </Layout>
            }
          />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

function App() {
  return (
    <KeycloakProvider>
      <AppRoutes />
    </KeycloakProvider>
  )
}

export default App
