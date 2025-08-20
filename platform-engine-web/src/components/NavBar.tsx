import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useKeycloak from '../hooks/useKeycloak'

const NavBar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const { authenticated, login, logout, register } = useKeycloak()
  const location = useLocation()
  const navigate = useNavigate()

  const isActiveLink = (path: string) => location.pathname === path

  const handleServiceClick = (sectionId: string) => {
    setIsServicesOpen(false)
    navigate('/services')
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 300)
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#1f2937',
      padding: '1rem 0',
      zIndex: 1000,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1.5rem'
      }}>
        {/* Logo */}
        <Link to="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#ffffff',
          textDecoration: 'none',
          letterSpacing: '-0.025em'
        }}>
          Platform Engine ⚡
        </Link>

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <Link to="/" style={{
            color: isActiveLink('/') ? '#60a5fa' : (hoveredLink === '/' ? '#ffffff' : '#d1d5db'),
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            transition: 'all 0.2s ease-in-out',
            backgroundColor: isActiveLink('/') ? 'transparent' : (hoveredLink === '/' ? '#374151' : 'transparent'),
            borderBottom: isActiveLink('/') ? '2px solid #60a5fa' : '2px solid transparent'
          }}
          onMouseEnter={() => setHoveredLink('/')}
          onMouseLeave={() => setHoveredLink(null)}>
            Home
          </Link>

          {/* Services Dropdown */}
          <div 
            style={{ 
              position: 'relative',
              paddingBottom: '0.5rem' // Extra padding to bridge the gap
            }}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div
              style={{
                color: isActiveLink('/services') ? '#60a5fa' : '#d1d5db',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                transition: 'all 0.2s ease-in-out',
                backgroundColor: isServicesOpen ? '#374151' : 'transparent',
                cursor: 'default',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                borderBottom: isActiveLink('/services') ? '2px solid #60a5fa' : '2px solid transparent'
              }}
            >
              Services
              <svg style={{
                width: '1rem',
                height: '1rem',
                transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease-in-out'
              }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Dropdown Menu */}
            {isServicesOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  marginTop: '-0.5rem', // Negative margin to overlap with padding
                  paddingTop: '0.5rem', // Padding to create invisible bridge
                  backgroundColor: 'transparent', // Transparent bridge area
                  zIndex: 50
                }}
              >
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '0.5rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    minWidth: '220px',
                    overflow: 'hidden'
                  }}
                >
                  <button
                  onClick={() => handleServiceClick('cloud-technologies')}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.75rem 1rem',
                    color: '#374151',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease-in-out',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f3f4f6'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  <div style={{ fontWeight: '600', marginBottom: '0.125rem' }}>Cloud Technologies</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Infrastructure & Serverless</div>
                </button>

                <button
                  onClick={() => handleServiceClick('devops-solutions')}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.75rem 1rem',
                    color: '#374151',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease-in-out',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f3f4f6'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  <div style={{ fontWeight: '600', marginBottom: '0.125rem' }}>DevOps Solutions</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>CI/CD & Automation</div>
                </button>

                <button
                  onClick={() => handleServiceClick('tech-solutions-discovery')}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.75rem 1rem',
                    color: '#374151',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease-in-out',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f3f4f6'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  <div style={{ fontWeight: '600', marginBottom: '0.125rem' }}>Tech Solutions Discovery</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Architecture & Strategy</div>
                </button>
                </div>
              </div>
            )}
          </div>

          <Link to="/contact" style={{
            color: isActiveLink('/contact') ? '#60a5fa' : (hoveredLink === '/contact' ? '#ffffff' : '#d1d5db'),
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            transition: 'all 0.2s ease-in-out',
            backgroundColor: isActiveLink('/contact') ? 'transparent' : (hoveredLink === '/contact' ? '#374151' : 'transparent'),
            borderBottom: isActiveLink('/contact') ? '2px solid #60a5fa' : '2px solid transparent'
          }}
          onMouseEnter={() => setHoveredLink('/contact')}
          onMouseLeave={() => setHoveredLink(null)}>
            Contact
          </Link>

          {authenticated && (
            <Link 
              to="/my-items" 
              style={{
                color: isActiveLink('/my-items') ? '#60a5fa' : (hoveredLink === '/my-items' ? '#ffffff' : '#d1d5db'),
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                transition: 'all 0.2s ease-in-out',
                backgroundColor: isActiveLink('/my-items') ? 'transparent' : (hoveredLink === '/my-items' ? '#374151' : 'transparent'),
                borderBottom: isActiveLink('/my-items') ? '2px solid #60a5fa' : '2px solid transparent'
              }}
              onMouseEnter={() => setHoveredLink('/my-items')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              My Items
            </Link>
          )}
        </div>

        {/* Authentication Section */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          {authenticated ? (
            <>
              <Link to="/my-account" style={{
                color: '#d1d5db',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                transition: 'all 0.2s ease-in-out'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#374151'
                e.currentTarget.style.color = '#ffffff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#d1d5db'
              }}>
                My Account
              </Link>
              <button
                onClick={logout}
                style={{
                  backgroundColor: '#dc2626',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.6rem 1.25rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#b91c1c'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#dc2626'
                  e.currentTarget.style.transform = 'translateY(0px)'
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={login}
                style={{
                  backgroundColor: 'transparent',
                  color: '#d1d5db',
                  border: '1px solid #4b5563',
                  padding: '0.6rem 1.25rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#4b5563'
                  e.currentTarget.style.color = '#ffffff'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#d1d5db'
                  e.currentTarget.style.transform = 'translateY(0px)'
                }}
              >
                Sign In
              </button>
              <button
                onClick={register}
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.6rem 1.25rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
                  e.currentTarget.style.transform = 'translateY(0px)'
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
              >
                Get Started
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar