import React from "react";
import { theme } from "../theme";
import { parseFont } from "../utils/parseFont";
import { FaUniversity, FaHeartbeat, FaShoppingCart, FaIndustry, FaGraduationCap } from "react-icons/fa";
import { useTranslation } from 'react-i18next'

interface Industry {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const industries: Industry[] = [
  {
    name: 'industry.financialServices.title',
    description: 'industry.financialServices.description',
    icon: <FaUniversity />,
  },
  {
    name: 'industry.healthcare.title',
    description: 'industry.healthcare.description',
    icon: <FaHeartbeat />,
  },
  {
    name: 'industry.retail.title',
    description: 'industry.retail.description',
    icon: <FaShoppingCart />,
  },
  {
    name: 'industry.manufacturing.title',
    description: 'industry.manufacturing.description',
    icon: <FaIndustry />,
  },
  {
    name: 'industry.education.title',
    description: 'industry.education.description',
    icon: <FaGraduationCap />,
  },
];

export default function IndustryTrustGrid() {
  const { t } = useTranslation()
  return (
    <div
      style={{
        background: theme.colors.background,
        borderRadius: theme.spacing.cardRadius,
        boxShadow: theme.spacing.cardShadow,
        padding: theme.spacing.cardPadding,
        fontFamily: 'inherit',
      }}
    >
      <h2 style={{ ...parseFont(theme.font.headline), color: theme.colors.textPrimary }}>
        {t('industry.title')}
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: '2rem' }}>
  {industries.map((industry) => (
          <div
            key={industry.name}
            style={{
              background: theme.colors.surface,
              borderRadius: theme.spacing.cardRadius,
              boxShadow: theme.spacing.cardShadow,
              padding: theme.spacing.cardPadding,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "2rem", color: theme.colors.accent }}>{industry.icon}</div>
            <h3 style={{ ...parseFont(theme.font.cardTitle), color: theme.colors.textPrimary }}>{t(industry.name)}</h3>
            <p style={{ ...parseFont(theme.font.cardText), color: theme.colors.textSecondary }}>{t(industry.description)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
