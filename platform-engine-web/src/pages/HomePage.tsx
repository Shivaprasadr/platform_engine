import React from 'react'
import { Link } from 'react-router-dom'
import useKeycloak from '../hooks/useKeycloak'
import { Loading } from '../components/ui'
import CapabilityGrid from '../components/CapabilityGrid'
import SolutionsGrid from '../components/SolutionsGrid'
import TechEvolutionGrid from '../components/TechEvolutionGrid'
import IndustryTrustGrid from '../components/IndustryTrustGrid'
// Import icons
import { SiKubernetes, SiHelm, SiDocker } from 'react-icons/si'
import { VscGithub, VscAzureDevops, VscAzure } from 'react-icons/vsc'
import { FaAws, FaShieldAlt, FaRocket, FaCogs } from 'react-icons/fa'
import { BiLogoGoogleCloud } from 'react-icons/bi'

const HomePage: React.FC = () => {
  const { authenticated, loading } = useKeycloak()

  if (loading) {
    return <Loading message="Initializing Unknown..." />
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F3F3F3' }}>
      {/* Ultra-Modern Hero Section - Edge Light Theme */}
      <section 
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F3F3F3 25%, #F8F8F8 50%, #F0F0F0 75%, #E8E8E8 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          paddingTop: '80px' // Account for fixed navbar
        }}
      >
        {/* Enhanced Background Effects - Edge Theme */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'radial-gradient(circle at 20% 30%, rgba(0, 0, 0, 0.08) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(209, 209, 209, 0.06) 0%, transparent 60%)',
            animation: 'pulse 8s ease-in-out infinite alternate'
          }}
        />
        
        {/* Geometric Patterns - Edge Theme */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            right: '10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, rgba(243, 243, 243, 0.05) 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            animation: 'float 12s ease-in-out infinite'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '10%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(209, 209, 209, 0.1) 0%, rgba(240, 240, 240, 0.05) 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            animation: 'float 15s ease-in-out infinite reverse'
          }}
        />

        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Enhanced Modern Headline - Edge Theme */}
          <div className="mb-8">
            <h1
              style={{
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                fontWeight: '900',
                lineHeight: '1.1',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #1A1A1A 0%, #4A4A4A 25%, #6B6B6B 50%, #2C2C2C 75%, #1A1A1A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.03em',
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                backgroundSize: '200% 200%',
                animation: 'gradientShift 8s ease-in-out infinite'
              }}
            >
              Powering Business Evolution
            </h1>
            
            <div
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #2C2C2C 0%, #4A4A4A 30%, #5A5A5A 60%, #1A1A1A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
                marginBottom: '2rem',
                animation: 'gradientShift 6s ease-in-out infinite reverse',
                backgroundSize: '200% 200%',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.25)'
              }}
            >
              Next-Generation Infrastructure
            </div>
          </div>

          {/* Enhanced Subtitle - Edge Theme */}
          <div style={{ marginBottom: '3rem' }}>
            <p
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: '400',
                color: '#1A1A1A',
                maxWidth: '900px',
                margin: '0 auto 2rem auto',
                lineHeight: '1.7',
                opacity: '0.9',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              Infrastructure agility defines market leaders. Unknown delivers the technology 
              foundation to <strong style={{ 
                color: '#000000', 
                background: 'linear-gradient(135deg, rgba(240, 240, 240, 0.6), rgba(243, 243, 243, 0.4))',
                padding: '0.125rem 0.375rem',
                borderRadius: '0.25rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}>innovate faster</strong>, <strong style={{ 
                color: '#1A1A1A', 
                background: 'linear-gradient(135deg, rgba(240, 240, 240, 0.6), rgba(243, 243, 243, 0.4))',
                padding: '0.125rem 0.375rem',
                borderRadius: '0.25rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}>scale smarter</strong>, 
              and <strong style={{ 
                color: '#000000', 
                background: 'linear-gradient(135deg, rgba(240, 240, 240, 0.6), rgba(243, 243, 243, 0.4))',
                padding: '0.125rem 0.375rem',
                borderRadius: '0.25rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}>stay ahead</strong>.
            </p>
            
            {/* Enhanced Key Features Row */}
            <div 
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              {[
                { icon: '🚀', text: 'AI-Powered DevOps', desc: 'Intelligent automation' },
                { icon: '⚡', text: 'Edge Computing', desc: 'Ultra-low latency' },
                { icon: '🔒', text: 'Zero-Trust Security', desc: 'Enterprise-grade protection' },
                { icon: '🌐', text: 'Multi-Cloud Native', desc: 'Vendor-agnostic flexibility' }
              ].map((feature, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '1rem',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(248, 248, 248, 0.6))',
                    borderRadius: '1rem',
                    border: '1px solid rgba(209, 209, 209, 0.3)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    minWidth: '140px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{feature.icon}</div>
                  <div style={{ 
                    fontSize: '0.875rem', 
                    fontWeight: '600', 
                    color: '#1A1A1A',
                    textAlign: 'center',
                    marginBottom: '0.25rem'
                  }}>
                    {feature.text}
                  </div>
                  <div style={{ 
                    fontSize: '0.75rem', 
                    color: '#4A4A4A',
                    textAlign: 'center'
                  }}>
                    {feature.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Button - Only Dashboard for authenticated users */}
          {authenticated && (
            <div className="flex justify-center mb-12">
              <Link to="/my-account">
                <button 
                  className="px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, #1A1A1A, #4A4A4A)',
                    color: '#FFFFFF',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #4A4A4A, #1A1A1A)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #1A1A1A, #4A4A4A)'
                  }}
                >
                  Access Your Dashboard
                </button>
              </Link>
            </div>
          )}

          {/* Technology Icons - Grayscale Theme */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 max-w-4xl mx-auto items-center">
            <SiKubernetes className="text-4xl md:text-5xl mx-auto hover:scale-110 transition-transform" style={{ color: '#1A1A1A' }} />
            <VscGithub className="text-4xl md:text-5xl mx-auto hover:scale-110 transition-transform" style={{ color: '#1A1A1A' }} />
            <SiHelm className="text-4xl md:text-5xl mx-auto hover:scale-110 transition-transform" style={{ color: '#4A4A4A' }} />
            <FaAws className="text-4xl md:text-5xl mx-auto hover:scale-110 transition-transform" style={{ color: '#1A1A1A' }} />
            <VscAzureDevops className="text-4xl md:text-5xl mx-auto hover:scale-110 transition-transform" style={{ color: '#4A4A4A' }} />
            <VscAzure className="text-4xl md:text-5xl mx-auto hover:scale-110 transition-transform" style={{ color: '#1A1A1A' }} />
            <BiLogoGoogleCloud className="text-4xl md:text-5xl mx-auto hover:scale-110 transition-transform" style={{ color: '#4A4A4A' }} />
            <SiDocker className="text-4xl md:text-5xl mx-auto hover:scale-110 transition-transform" style={{ color: '#1A1A1A' }} />
          </div>
        </div>
      </section>

      {/* Ultra-Modern Features Section - Edge Light Theme */}
      <section 
        style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F8F8 25%, #F3F3F3 50%, #F0F0F0 75%, #E8E8E8 100%)',
          overflow: 'hidden',
          padding: '5rem 0',
          borderTop: '1px solid #D1D1D1'
        }}
      >
        {/* Advanced Background Effects - Edge Theme */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'radial-gradient(circle at 20% 80%, rgba(0, 0, 0, 0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(209, 209, 209, 0.04) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(243, 243, 243, 0.08) 0%, transparent 50%)',
            animation: 'pulse 6s ease-in-out infinite alternate'
          }}
        />
        
        {/* Floating Particles - Edge Theme */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundImage: 'radial-gradient(2px 2px at 20px 30px, rgba(0, 0, 0, 0.12), transparent), radial-gradient(2px 2px at 40px 70px, rgba(209, 209, 209, 0.08), transparent), radial-gradient(1px 1px at 90px 40px, rgba(240, 240, 240, 0.1), transparent)',
            backgroundSize: '100px 100px, 150px 150px, 120px 120px',
            animation: 'float 25s ease-in-out infinite'
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Enhanced Header - Edge Theme */}
          <div className="text-center mb-20">
            <div
              style={{
                background: 'linear-gradient(135deg, #1A1A1A, #000000, #4A4A4A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '900',
                marginBottom: '2rem',
                letterSpacing: '-0.02em',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
              }}
            >
              Why Unknown?
            </div>
            <div
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                fontWeight: '600',
                color: '#1A1A1A',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.6',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}
            >
              Built for Scale. Designed for Security. Powered by Automation.
            </div>
          </div>
          
          {/* Ultra-Modern Feature Cards - Edge Light Theme */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2.5rem',
              maxWidth: '1400px',
              margin: '0 auto'
            }}
          >
            {/* Feature 1 - Rapid Deployment - Unified Grayscale Theme */}
            <div
              style={{
                background: 'linear-gradient(145deg, #F3F3F3, #E8E8E8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid #D1D1D1',
                borderRadius: '2rem',
                padding: '3rem 2rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(209, 213, 219, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.4)'
                e.currentTarget.style.background = 'linear-gradient(145deg, #E8E8E8, #F3F3F3)'
                e.currentTarget.style.borderColor = '#D1D1D1'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px) scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)'
                e.currentTarget.style.background = 'linear-gradient(145deg, #F3F3F3, #E8E8E8)'
                e.currentTarget.style.borderColor = '#D1D1D1'
              }}
            >
              {/* Top Accent - Grayscale */}
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  height: '3px',
                  background: 'linear-gradient(90deg, #d1d5db, #e5e7eb, #f3f4f6)',
                  borderRadius: '2rem 2rem 0 0'
                }}
              />
              {/* Enhanced Icon - Grayscale Theme */}
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, #d1d5db, #374151)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem auto',
                  boxShadow: '0 20px 40px -12px rgba(209, 213, 219, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
                  position: 'relative'
                }}
              >
                <FaRocket style={{ fontSize: '2.5rem', color: '#ffffff' }} />
                <div
                  style={{
                    position: 'absolute',
                    top: '-2px',
                    left: '-2px',
                    right: '-2px',
                    bottom: '-2px',
                    background: 'linear-gradient(135deg, rgba(209, 213, 219, 0.6), rgba(55, 65, 81, 0.6))',
                    borderRadius: '50%',
                    zIndex: -1,
                    filter: 'blur(4px)'
                  }}
                />
              </div>
              <h3
                style={{
                  fontSize: '1.75rem',
                  fontWeight: '800',
                  color: '#1A1A1A',
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                  letterSpacing: '-0.01em'
                }}
              >
                ⚡ Rapid Deployment
              </h3>
              <p
                style={{
                  color: '#4A4A4A',
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  textAlign: 'center',
                  fontWeight: '400'
                }}
              >
                Launch infrastructure in minutes, not hours. Experience the speed of modern cloud-native solutions.
              </p>
            </div>

            {/* Feature 2 - Enterprise Security - NavBar Gray */}
            {/* Feature 2 - Enterprise Security - Unified Grayscale Theme */}
            <div
              style={{
                background: 'linear-gradient(145deg, #F3F3F3, #E8E8E8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid #D1D1D1',
                borderRadius: '2rem',
                padding: '3rem 2rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(209, 213, 219, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.4)'
                e.currentTarget.style.background = 'linear-gradient(145deg, #E8E8E8, #F3F3F3)'
                e.currentTarget.style.borderColor = '#D1D1D1'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px) scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)'
                e.currentTarget.style.background = 'linear-gradient(145deg, #F3F3F3, #E8E8E8)'
                e.currentTarget.style.borderColor = '#D1D1D1'
              }}
            >
              {/* Top Accent - Grayscale */}
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  height: '3px',
                  background: 'linear-gradient(90deg, #d1d5db, #e5e7eb, #f3f4f6)',
                  borderRadius: '2rem 2rem 0 0'
                }}
              />
              {/* Enhanced Icon - Grayscale Theme */}
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, #d1d5db, #374151)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem auto',
                  boxShadow: '0 20px 40px -12px rgba(209, 213, 219, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
                  position: 'relative'
                }}
              >
                <FaShieldAlt style={{ fontSize: '2.5rem', color: '#ffffff' }} />
                <div
                  style={{
                    position: 'absolute',
                    top: '-2px',
                    left: '-2px',
                    right: '-2px',
                    bottom: '-2px',
                    background: 'linear-gradient(135deg, rgba(209, 213, 219, 0.6), rgba(55, 65, 81, 0.6))',
                    borderRadius: '50%',
                    zIndex: -1,
                    filter: 'blur(4px)'
                  }}
                />
              </div>
              <h3
                style={{
                  fontSize: '1.75rem',
                  fontWeight: '800',
                  color: '#1A1A1A',
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                  letterSpacing: '-0.01em'
                }}
              >
                🔒 Enterprise Security
              </h3>
              <p
                style={{
                  color: '#4A4A4A',
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  textAlign: 'center',
                  fontWeight: '400'
                }}
              >
                Compliance-first architecture with built-in data protection and industry-leading security standards.
              </p>
            </div>

            {/* Feature 3 - Intelligent Automation - NavBar Dark Gray */}
            {/* Feature 3 - Intelligent Automation - Unified Grayscale Theme */}
            <div
              style={{
                background: 'linear-gradient(145deg, #F3F3F3, #E8E8E8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid #D1D1D1',
                borderRadius: '2rem',
                padding: '3rem 2rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(209, 213, 219, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.4)'
                e.currentTarget.style.background = 'linear-gradient(145deg, #E8E8E8, #F3F3F3)'
                e.currentTarget.style.borderColor = '#D1D1D1'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px) scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)'
                e.currentTarget.style.background = 'linear-gradient(145deg, #F3F3F3, #E8E8E8)'
                e.currentTarget.style.borderColor = '#D1D1D1'
              }}
            >
              {/* Top Accent - Grayscale */}
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  height: '3px',
                  background: 'linear-gradient(90deg, #d1d5db, #e5e7eb, #f3f4f6)',
                  borderRadius: '2rem 2rem 0 0'
                }}
              />
              {/* Enhanced Icon - Grayscale Theme */}
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, #d1d5db, #374151)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem auto',
                  boxShadow: '0 20px 40px -12px rgba(209, 213, 219, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
                  position: 'relative'
                }}
              >
                <FaCogs style={{ fontSize: '2.5rem', color: '#ffffff' }} />
                <div
                  style={{
                    position: 'absolute',
                    top: '-2px',
                    left: '-2px',
                    right: '-2px',
                    bottom: '-2px',
                    background: 'linear-gradient(135deg, rgba(209, 213, 219, 0.6), rgba(55, 65, 81, 0.6))',
                    borderRadius: '50%',
                    zIndex: -1,
                    filter: 'blur(4px)'
                  }}
                />
              </div>
              <h3
                style={{
                  fontSize: '1.75rem',
                  fontWeight: '800',
                  color: '#1A1A1A',
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                  letterSpacing: '-0.01em'
                }}
              >
                🤖 Intelligent Automation
              </h3>
              <p
                style={{
                  color: '#4A4A4A',
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  textAlign: 'center',
                  fontWeight: '400'
                }}
              >
                Reduce manual errors and streamline workflows with AI-powered automation and smart orchestration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Capabilities Section - Using Reusable Component */}
      <CapabilityGrid 
        title="Infrastructure Excellence: What We Deliver"
        subtitle="In today's competitive landscape, infrastructure agility defines market leaders. Unknown provides the technology foundation and strategic depth to bring your digital ambitions to life with unmatched speed and security."
        columns={4}
      />

      {/* Our Solutions Section */}
      <SolutionsGrid />

      {/* Technology Evolution Section */}
      <TechEvolutionGrid />

      {/* Industry Trust Section */}
      <IndustryTrustGrid />

      {/* CTA Section - Edge Light Theme */}
      <section 
        style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F3F3F3 50%, #E8E8E8 100%)',
          borderTop: '1px solid #D1D1D1',
          padding: '4rem 0'
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#1A1A1A',
              marginBottom: '1rem'
            }}
          >
            Ready to Scale Your Business?
          </h2>
          <p 
            style={{
              fontSize: '1.25rem',
              color: '#1A1A1A',
              marginBottom: '2rem',
              maxWidth: '42rem',
              margin: '0 auto 2rem auto',
              opacity: '0.8'
            }}
          >
            Join leading companies using Unknown for secure, scalable infrastructure solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {authenticated ? (
              <Link to="/my-items">
                <button 
                  className="text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 px-8 py-4"
                  style={{
                    background: 'linear-gradient(135deg, #1A1A1A, #4A4A4A)',
                    color: '#FFFFFF',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #4A4A4A, #1A1A1A)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #1A1A1A, #4A4A4A)'
                  }}
                >
                  Go to My Items
                </button>
              </Link>
            ) : (
              <Link to="/contact">
                <button 
                  className="text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 px-8 py-4"
                  style={{
                    background: 'transparent',
                    color: '#1A1A1A',
                    border: '2px solid #1A1A1A'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#1A1A1A'
                    e.currentTarget.style.color = '#FFFFFF'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = '#1A1A1A'
                  }}
                >
                  Contact Sales
                </button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Enhanced CSS Animations */}
      <style>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes pulse {
          0% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.02);
          }
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(2deg);
          }
          66% {
            transform: translateY(10px) rotate(-1deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

export default HomePage
