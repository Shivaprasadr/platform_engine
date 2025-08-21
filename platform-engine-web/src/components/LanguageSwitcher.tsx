import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FaGlobe, FaChevronDown } from 'react-icons/fa'

const languages = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' }
]

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode)
    setIsOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 0.75rem',
          backgroundColor: 'transparent',
          border: '1px solid #374151',
          borderRadius: '0.5rem',
          color: '#d1d5db',
          fontSize: '0.875rem',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          minWidth: '120px',
          justifyContent: 'space-between'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#374151'
          e.currentTarget.style.color = '#ffffff'
          e.currentTarget.style.borderColor = '#4b5563'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent'
          e.currentTarget.style.color = '#d1d5db'
          e.currentTarget.style.borderColor = '#374151'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <FaGlobe style={{ width: '14px', height: '14px' }} />
          <span>{currentLanguage.flag}</span>
          <span>{currentLanguage.code.toUpperCase()}</span>
        </div>
        <FaChevronDown 
          style={{ 
            width: '12px', 
            height: '12px',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease-in-out'
          }} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 0.5rem)',
            right: '0',
            minWidth: '200px',
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '0.75rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            zIndex: 1000,
            overflow: 'hidden',
            animation: 'fadeIn 0.15s ease-out'
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '0.75rem 1rem',
              backgroundColor: '#f9fafb',
              borderBottom: '1px solid #e5e7eb'
            }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              color: '#374151',
              fontSize: '0.875rem',
              fontWeight: '600'
            }}>
              <FaGlobe style={{ width: '14px', height: '14px' }} />
              <span>Select Language</span>
            </div>
          </div>

          {/* Language Options */}
          <div style={{ padding: '0.5rem' }}>
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  backgroundColor: currentLanguage.code === language.code ? '#eff6ff' : 'transparent',
                  color: currentLanguage.code === language.code ? '#2563eb' : '#374151',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease-in-out',
                  fontSize: '0.875rem',
                  fontWeight: currentLanguage.code === language.code ? '600' : '500'
                }}
                onMouseEnter={(e) => {
                  if (currentLanguage.code !== language.code) {
                    e.currentTarget.style.backgroundColor = '#f3f4f6'
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentLanguage.code !== language.code) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }
                }}
              >
                <span style={{ fontSize: '1.25rem' }}>{language.flag}</span>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <span style={{ fontWeight: '500' }}>{language.name}</span>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    color: currentLanguage.code === language.code ? '#3b82f6' : '#6b7280',
                    marginTop: '0.125rem'
                  }}>
                    {language.nativeName}
                  </span>
                </div>
                {currentLanguage.code === language.code && (
                  <div style={{ 
                    marginLeft: 'auto',
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#2563eb',
                    borderRadius: '50%'
                  }} />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* CSS Animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default LanguageSwitcher
