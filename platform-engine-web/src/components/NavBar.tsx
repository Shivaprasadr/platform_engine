import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useKeycloak from '../hooks/useKeycloak'
import LanguageSwitcher from './LanguageSwitcher'

const NavBar: React.FC = () => {
  const { t } = useTranslation()
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const { authenticated, login, logout, register } = useKeycloak()
  const location = useLocation()
  const navigate = useNavigate()

  const isActiveLink = (path: string) => location.pathname === path
  
  const isServicesActive = () => {
    return location.pathname === '/services' || 
           location.pathname.includes('/services/') ||
           location.pathname === '/devops-solutions' ||
           location.pathname === '/tech-solutions-discovery'
  }

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
      background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F8F8 50%, #F3F3F3 100%)',
      padding: '1rem 0',
      zIndex: 1000,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), 0 0 0 1px #D1D1D1',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid #D1D1D1'
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
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          textDecoration: 'none'
        }}>
          <img 
            src="/images/alphastar.png" 
            alt="Unknown" 
            style={{
              height: '40px',
              width: 'auto',
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
            }}
          />
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1A1A1A',
            letterSpacing: '-0.025em',
            textShadow: 'none'
          }}>
            Unknown
          </span>
        </Link>

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <Link to="/" style={{
            color: isActiveLink('/') ? '#000000' : (hoveredLink === '/' ? '#4A4A4A' : '#1A1A1A'),
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            transition: 'all 0.3s ease-in-out',
            backgroundColor: isActiveLink('/') ? 'rgba(240, 240, 240, 0.8)' : (hoveredLink === '/' ? 'rgba(240, 240, 240, 0.4)' : 'transparent'),
            border: isActiveLink('/') ? '1px solid rgba(209, 209, 209, 0.5)' : '1px solid transparent',
            fontWeight: isActiveLink('/') ? '600' : '500',
            textShadow: 'none'
          }}
          onMouseEnter={() => setHoveredLink('/')}
          onMouseLeave={() => setHoveredLink(null)}>
            {t('navigation.home')}
          </Link>

          {/* Services Dropdown */}
          <div 
            style={{ 
              position: 'relative'
            }}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div
              style={{
                color: isServicesActive() ? '#000000' : '#1A1A1A',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                transition: 'all 0.3s ease-in-out',
                backgroundColor: isServicesActive() ? 'rgba(240, 240, 240, 0.8)' : (isServicesOpen ? 'rgba(240, 240, 240, 0.4)' : 'transparent'),
                border: isServicesActive() ? '1px solid rgba(209, 209, 209, 0.5)' : (isServicesOpen ? '1px solid rgba(209, 209, 209, 0.5)' : '1px solid transparent'),
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontWeight: isServicesActive() ? '600' : '500',
                textShadow: 'none'
              }}
            >
              {t('navigation.services')}
              <svg style={{
                width: '1rem',
                height: '1rem',
                transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease-in-out',
                filter: 'none'
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
                    background: 'linear-gradient(135deg, #FFFFFF, #F8F8F8)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '0.5rem',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1), 0 0 0 1px #D1D1D1',
                    minWidth: '220px',
                    overflow: 'hidden',
                    border: '1px solid #D1D1D1'
                  }}
                >
                  <button
                  onClick={() => handleServiceClick('cloud-technologies')}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.75rem 1rem',
                    color: '#1A1A1A',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    borderBottom: '1px solid #D1D1D1'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.08)'
                    e.currentTarget.style.color = '#4A4A4A'
                    e.currentTarget.style.transform = 'translateX(5px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#1A1A1A'
                    e.currentTarget.style.transform = 'translateX(0px)'
                  }}
                >
                  <div style={{ fontWeight: '600', marginBottom: '0.125rem' }}>Cloud Technologies</div>
                  <div style={{ fontSize: '0.75rem', color: '#666666' }}>Infrastructure & Serverless</div>
                </button>

                <button
                  onClick={() => handleServiceClick('devops-solutions')}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.75rem 1rem',
                    color: '#1A1A1A',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    borderBottom: '1px solid #D1D1D1'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.08)'
                    e.currentTarget.style.color = '#4A4A4A'
                    e.currentTarget.style.transform = 'translateX(5px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#1A1A1A'
                    e.currentTarget.style.transform = 'translateX(0px)'
                  }}
                >
                  <div style={{ fontWeight: '600', marginBottom: '0.125rem' }}>DevOps Solutions</div>
                  <div style={{ fontSize: '0.75rem', color: '#666666' }}>CI/CD & Automation</div>
                </button>

                <button
                  onClick={() => handleServiceClick('tech-solutions-discovery')}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.75rem 1rem',
                    color: '#1A1A1A',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.08)'
                    e.currentTarget.style.color = '#4A4A4A'
                    e.currentTarget.style.transform = 'translateX(5px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#1A1A1A'
                    e.currentTarget.style.transform = 'translateX(0px)'
                  }}
                >
                  <div style={{ fontWeight: '600', marginBottom: '0.125rem' }}>Tech Solutions Discovery</div>
                  <div style={{ fontSize: '0.75rem', color: '#666666' }}>Architecture & Strategy</div>
                </button>
                </div>
              </div>
            )}
          </div>

          <Link to="/contact" style={{
            color: isActiveLink('/contact') ? '#000000' : (hoveredLink === '/contact' ? '#4A4A4A' : '#1A1A1A'),
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            transition: 'all 0.3s ease-in-out',
            backgroundColor: isActiveLink('/contact') ? 'rgba(240, 240, 240, 0.8)' : (hoveredLink === '/contact' ? 'rgba(240, 240, 240, 0.4)' : 'transparent'),
            border: isActiveLink('/contact') ? '1px solid rgba(209, 209, 209, 0.5)' : '1px solid transparent',
            fontWeight: isActiveLink('/contact') ? '600' : '500',
            textShadow: 'none'
          }}
          onMouseEnter={() => setHoveredLink('/contact')}
          onMouseLeave={() => setHoveredLink(null)}>
            {t('navigation.contact')}
          </Link>

          {authenticated && (
            <Link 
              to="/my-items" 
              style={{
                color: isActiveLink('/my-items') ? '#000000' : (hoveredLink === '/my-items' ? '#4A4A4A' : '#1A1A1A'),
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                transition: 'all 0.3s ease-in-out',
                backgroundColor: isActiveLink('/my-items') ? 'rgba(240, 240, 240, 0.8)' : (hoveredLink === '/my-items' ? 'rgba(240, 240, 240, 0.4)' : 'transparent'),
                border: isActiveLink('/my-items') ? '1px solid rgba(209, 209, 209, 0.5)' : '1px solid transparent',
                fontWeight: isActiveLink('/my-items') ? '600' : '500',
                textShadow: 'none'
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
                color: '#1A1A1A',
                textDecoration: 'none',
                padding: '0.6rem 1.25rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                border: '1px solid #D1D1D1',
                transition: 'all 0.3s ease-in-out',
                background: 'rgba(0, 0, 0, 0.04)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.08)'
                e.currentTarget.style.color = '#4A4A4A'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.04)'
                e.currentTarget.style.color = '#1A1A1A'
                e.currentTarget.style.transform = 'translateY(0px)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                My Account
              </Link>
              <button
                onClick={logout}
                style={{
                  background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.6rem 1.25rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  boxShadow: '0 4px 6px rgba(239, 68, 68, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #dc2626, #b91c1c)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 15px rgba(239, 68, 68, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)'
                  e.currentTarget.style.transform = 'translateY(0px)'
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(239, 68, 68, 0.3)'
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
                  color: '#1A1A1A',
                  border: '1px solid #D1D1D1',
                  padding: '0.6rem 1.25rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.08)'
                  e.currentTarget.style.color = '#4A4A4A'
                  e.currentTarget.style.borderColor = '#4A4A4A'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#1A1A1A'
                  e.currentTarget.style.borderColor = '#D1D1D1'
                  e.currentTarget.style.transform = 'translateY(0px)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {t('navigation.signIn')}
              </button>
              <button
                onClick={register}
                style={{
                  background: 'linear-gradient(135deg, #1A1A1A 0%, #4A4A4A 50%, #000000 100%)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.6rem 1.25rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #4A4A4A 0%, #1A1A1A 50%, #000000 100%)'
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #1A1A1A 0%, #4A4A4A 50%, #000000 100%)'
                  e.currentTarget.style.transform = 'translateY(0px) scale(1)'
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)'
                }}
              >
                {t('navigation.getStarted')}
              </button>
            </>
          )}
          
          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}

export default NavBar