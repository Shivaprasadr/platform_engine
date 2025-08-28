import React from "react";
import { theme } from "../theme";
import { parseFont } from "../utils/parseFont";
import { FaUniversity, FaHeartbeat, FaShoppingCart, FaIndustry, FaGraduationCap } from "react-icons/fa";

interface Industry {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const industries: Industry[] = [
  {
    name: "Financial Services",
    description: "Secure, scalable solutions for banking, insurance, and fintech.",
    icon: <FaUniversity />,
  },
  {
    name: "Healthcare",
    description: "Compliance-driven platforms for hospitals, clinics, and health tech.",
    icon: <FaHeartbeat />,
  },
  {
    name: "Retail",
    description: "Omnichannel experiences for e-commerce and brick-and-mortar.",
    icon: <FaShoppingCart />,
  },
  {
    name: "Manufacturing",
    description: "IoT and automation for smart factories and supply chains.",
    icon: <FaIndustry />,
  },
  {
    name: "Education",
    description: "Digital learning platforms for schools, universities, and edtech.",
    icon: <FaGraduationCap />,
  },
];

export default function IndustryTrustGrid() {
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
        Trusted Across Industries
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
            <h3 style={{ ...parseFont(theme.font.cardTitle), color: theme.colors.textPrimary }}>{industry.name}</h3>
            <p style={{ ...parseFont(theme.font.cardText), color: theme.colors.textSecondary }}>{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
