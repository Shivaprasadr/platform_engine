import CapabilityCard from "./CapabilityCard";
import React from "react";
import { theme } from "../theme";
import { parseFont } from "../utils/parseFont";
import { useTranslation } from "react-i18next";
import { MdIntegrationInstructions, MdSecurity } from "react-icons/md";
import { FaCode, FaUsers, FaRocket, FaLightbulb, FaCheckCircle } from "react-icons/fa";
import { BsLightning } from "react-icons/bs";

interface CapabilityData {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  linkColor: string;
}

interface CapabilityGridProps {
  title?: string;
  subtitle?: string;
  capabilities?: CapabilityData[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

const CapabilityGrid: React.FC<CapabilityGridProps> = ({
  title,
  subtitle,
  capabilities,
  className = ""
}) => {
  const { t } = useTranslation();

  const displayTitle = title || t('home.capabilities.title');
  const displaySubtitle = subtitle || t('home.capabilities.subtitle');

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
  ];

  const displayCapabilities = capabilities || defaultCapabilities;

  return (
    <section className={`py-16 ${className}`} style={{ backgroundColor: theme.colors.background }}>
      <div className="container mx-auto px-6">
        {(displayTitle || displaySubtitle) && (
          <div className="mb-12" style={{ textAlign: 'left', maxWidth: '900px', marginLeft: 0 }}>
            {displayTitle && (
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
                className="mb-4"
              >
                {displayTitle}
              </h2>
            )}
            {displaySubtitle && (
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
                {displaySubtitle}
              </p>
            )}
          </div>
        )}
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div
            className="grid gap-6 place-items-start"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              padding: theme.spacing.cardPadding,
              backgroundColor: theme.colors.surface,
              borderRadius: theme.spacing.cardRadius,
              border: `1px solid ${theme.colors.border}`,
              boxShadow: theme.spacing.cardShadow
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
  );
};

export default CapabilityGrid;
