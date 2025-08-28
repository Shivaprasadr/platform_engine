import React from 'react'
import { useTranslation } from 'react-i18next'
import CapabilityCard from './CapabilityCard'
import { MdSecurity, MdIntegrationInstructions } from 'react-icons/md'
import { FaCode, FaRocket, FaUsers, FaLightbulb, FaCheckCircle } from 'react-icons/fa'
import { BsLightning } from 'react-icons/bs'

interface CapabilityData {
  icon: React.ReactNode
  title: string
  description: string
  gradientFrom: string
  gradientTo: string
  linkColor: string
}

interface CapabilityGridProps {
  title?: string
  subtitle?: string
  capabilities?: CapabilityData[]
  columns?: 1 | 2 | 3 | 4
  className?: string
}

const CapabilityGrid: React.FC<CapabilityGridProps> = ({
  title,
  subtitle,
  capabilities,
  className = ""
}) => {
  const { t } = useTranslation()
  
  const displayTitle = title || t('home.capabilities.title')
  const displaySubtitle = subtitle || t('home.capabilities.subtitle')
  
  const defaultCapabilities: CapabilityData[] = [
    {
      icon: <MdIntegrationInstructions />,
      title: t('home.capabilities.platformEcosystems.title'),
      description: t('home.capabilities.platformEcosystems.description'),
      gradientFrom: "from-blue-500",
      gradientTo: "to-blue-600",
      linkColor: "text-blue-600"
    },
    {
      icon: <FaCode />,
      title: t('home.capabilities.advancedTechnology.title'),
      description: t('home.capabilities.advancedTechnology.description'),
      gradientFrom: "from-purple-500",
      gradientTo: "to-purple-600",
      linkColor: "text-purple-600"
    },
    {
      icon: <BsLightning />,
      title: t('home.capabilities.automatedPlatforms.title'),
      description: t('home.capabilities.automatedPlatforms.description'),
      gradientFrom: "from-green-500",
      gradientTo: "to-green-600",
      linkColor: "text-green-600"
    },
    {
      icon: <MdSecurity />,
      title: t('home.capabilities.dataIntelligence.title'),
      description: t('home.capabilities.dataIntelligence.description'),
      gradientFrom: "from-indigo-500",
      gradientTo: "to-indigo-600",
      linkColor: "text-indigo-600"
    },
    {
      icon: <FaUsers />,
      title: t('home.capabilities.technologyLeadership.title'),
      description: t('home.capabilities.technologyLeadership.description'),
      gradientFrom: "from-orange-500",
      gradientTo: "to-orange-600",
      linkColor: "text-orange-600"
    },
    {
      icon: <FaRocket />,
      title: t('home.capabilities.technologyExpertise.title'),
      description: t('home.capabilities.technologyExpertise.description'),
      gradientFrom: "from-red-500",
      gradientTo: "to-red-600",
      linkColor: "text-red-600"
    },
    {
      icon: <FaLightbulb />,
      title: t('home.capabilities.marketInnovation.title'),
      description: t('home.capabilities.marketInnovation.description'),
      gradientFrom: "from-teal-500",
      gradientTo: "to-teal-600",
      linkColor: "text-teal-600"
    },
    {
      icon: <FaCheckCircle />,
      title: t('home.capabilities.strategicImplementation.title'),
      description: t('home.capabilities.strategicImplementation.description'),
      gradientFrom: "from-pink-500",
      gradientTo: "to-pink-600",
      linkColor: "text-pink-600"
    }
  ]
  
  const displayCapabilities = capabilities || defaultCapabilities
  
  return (
    <section className={`py-16 ${className}`} style={{ backgroundColor: '#F3F3F3' }}>
      <div className="container mx-auto px-6">
        {(displayTitle || displaySubtitle) && (
          <div className="text-center mb-12">
            {displayTitle && (
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{displayTitle}</h2>
            )}
            {displaySubtitle && (
              <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">{displaySubtitle}</p>
            )}
          </div>
        )}

        <div className="max-w-7xl mx-auto">
          <div 
            className="grid gap-6 place-items-start"
            style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              padding: '2rem',
              backgroundColor: '#ffffff',
              borderRadius: '1rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }}
          >
            {displayCapabilities.map((capability, index) => (
              <CapabilityCard
                key={index}
                icon={capability.icon}
                title={capability.title}
                description={capability.description}
                gradientFrom={capability.gradientFrom}
                gradientTo={capability.gradientTo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CapabilityGrid
