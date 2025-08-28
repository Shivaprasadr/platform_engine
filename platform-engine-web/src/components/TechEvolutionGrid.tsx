
import { parseFont } from '../utils/parseFont'
import React from 'react'
import { theme } from '../theme'
import { FaLightbulb, FaCogs, FaRocket, FaSync } from 'react-icons/fa'

interface ProcessData {
  step: number
  icon: React.ReactNode
  image: string
  title: string
  description: string
  gradientFrom: string
  gradientTo: string
}

const processes: ProcessData[] = [
  {
    step: 1,
    icon: <FaLightbulb />,
    image: '/images/ideation.svg',
    title: 'Ideation & Strategy',
    description: 'Define your vision and strategy with expert guidance and industry insights.',
    gradientFrom: 'from-yellow-400',
    gradientTo: 'to-orange-500'
  },
  {
    step: 2,
    icon: <FaCogs />,
    image: '/images/smart-implementation.svg',
    title: 'Smart Implementation',
    description: 'Execute with precision using proven frameworks and cutting-edge technology solutions.',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-indigo-600'
  },
  {
    step: 3,
    icon: <FaRocket />,
    image: '/images/scale-growth.svg',
    title: 'Scale & Growth',
    description: 'Build platforms that grow with your business and adapt to changing market demands.',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-teal-600'
  },
  {
    step: 4,
    icon: <FaSync />,
    image: '/images/continuous-innovation.svg',
    title: 'Continuous Innovation',
    description: 'Stay ahead with emerging technologies and innovative solutions that create competitive advantage.',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-pink-600'
  }
]
  

const TechEvolutionGrid: React.FC = () => {
  const title = 'Infrastructure Excellence: What We Deliver'
  const subtitle = "Infrastructure agility defines leaders. Unknown delivers the speed and security to realize your digital ambitions."

  return (
    <section className="py-16" style={{ backgroundColor: theme.colors.background, position: 'relative' }}>
      <div className="container mx-auto px-6">
        <div className="mb-12" style={{ textAlign: 'left', maxWidth: '900px', marginLeft: 0 }}>
          <h2
            style={{
              color: theme.colors.textPrimary,
              ...parseFont(theme.font.headline),
              fontSize: '2.75rem',
              fontWeight: 900,
              marginBottom: '1rem',
              lineHeight: 1.08,
              maxWidth: '900px',
              whiteSpace: 'normal',
              overflowWrap: 'break-word'
            }}
          >
            {title}
          </h2>
          <p
            style={{
              color: theme.colors.textSecondary,
              ...parseFont(theme.font.subheadline),
              fontSize: '1.25rem',
              maxWidth: '700px',
              margin: '0 0 2rem 0',
              opacity: 0.85,
              lineHeight: 1.35,
              textAlign: 'left',
              whiteSpace: 'normal',
              overflowWrap: 'break-word'
            }}
          >
            {subtitle}
          </p>
        </div>

        <div className="max-w-7xl mx-auto" style={{ position: 'relative' }}>
          {/* Responsive 2x2 Grid Layout with Centered FLOW Connector */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
            gap: 0,
            position: 'relative',
            marginBottom: '3rem',
            width: '100%',
            maxWidth: '100%',
            minWidth: 0
          }}>
            {processes.map((process, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '1.5rem',
                  border: '2px solid #e5e7eb',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease-in-out',
                  position: 'relative',
                  height: '350px',
                  display: 'flex',
                  flexDirection: 'column',
                  margin: 0
                }}
              >
                {/* Step Number Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '40px',
                    height: '40px',
                    background: `linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: '700',
                    fontSize: '1.125rem',
                    zIndex: 10
                  }}
                  className={`bg-gradient-to-br ${process.gradientFrom} ${process.gradientTo}`}
                >
                  {process.step}
                </div>

                {/* Image/Icon Area */}
                <div 
                  style={{
                    height: '180px',
                    background: `linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    opacity: 0.9
                  }}
                  className={`bg-gradient-to-br ${process.gradientFrom} ${process.gradientTo}`}
                >
                  {/* Main Icon */}
                  <div
                    style={{
                      width: '70px',
                      height: '70px',
                      backgroundColor: 'rgba(255, 255, 255, 0.25)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '1.75rem',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {React.cloneElement(process.icon as React.ReactElement, { 
                      style: { fontSize: '1.75rem' } 
                    })}
                  </div>
                </div>

                {/* Content Area */}
                <div style={{ padding: theme.spacing.cardPadding }}>
                  <h3 
                    style={{ 
                      ...parseFont(theme.font.cardTitle),
                      color: theme.colors.textPrimary,
                      marginBottom: '1rem'
                    }}
                  >
                    {process.title}
                  </h3>
                  <p 
                    style={{ 
                      ...parseFont(theme.font.cardText),
                      lineHeight: '1.6'
                    }}
                  >
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
            {/* FLOW icon absolutely centered over grid */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 20,
                width: '120px',
                height: '120px',
                border: '4px dashed #d1d5db',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f9fafb',
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#6b7280',
                pointerEvents: 'none'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div>🚀</div>
                <div style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>FLOW</div>
              </div>
            </div>
          </div>

          {/* Start Your Journey Button */}
          <div className="text-center">
            <button
              style={{
                background: theme.colors.buttonPrimary,
                color: '#ffffff',
                border: 'none',
                padding: '1rem 2.5rem',
                borderRadius: '0.75rem',
                fontSize: '1.125rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                boxShadow: theme.spacing.cardShadow
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)'
                e.currentTarget.style.boxShadow = theme.spacing.cardShadow
              }}
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechEvolutionGrid
