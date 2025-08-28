import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ServicesPage: React.FC = () => {
  const location = useLocation()

  useEffect(() => {
    // Handle hash navigation from external sources
    if (location.hash) {
      const elementId = location.hash.replace('#', '')
      setTimeout(() => {
        const element = document.getElementById(elementId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [location.hash])

  return (
    <div style={{ paddingTop: '80px', background: '#F3F3F3' }}> {/* Account for fixed navbar */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1
            style={{
              color: '#222',
              fontSize: '2.75rem',
              fontWeight: 900,
              marginBottom: '1rem',
              lineHeight: 1.08,
              textAlign: 'left',
              fontFamily: 'inherit'
            }}
          >Our Services</h1>
          <p
            style={{
              color: '#555',
              fontSize: '1.25rem',
              maxWidth: '700px',
              margin: '0 0 2rem 0',
              opacity: 0.85,
              lineHeight: 1.35,
              textAlign: 'left',
              fontFamily: 'inherit'
            }}
          >
            We provide comprehensive technology solutions to help your business scale and innovate. Explore our specialized services below.
          </p>
          <div className="space-y-16">
            {/* Cloud Technologies Section */}
            <div id="cloud-technologies" className="scroll-mt-24">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
                <div className="flex items-start gap-6">
                  <div style={{ width: '72px', height: '72px', background: '#2563eb', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg style={{ width: '44px', height: '44px', color: '#fff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 style={{ color: '#222', fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'left', fontFamily: 'inherit' }}>Cloud Technologies</h2>
                    <p style={{ color: '#444', fontSize: '1.1rem', marginBottom: '1.5rem', textAlign: 'left', fontFamily: 'inherit' }}>
                      Transform your infrastructure with scalable cloud solutions. We specialize in AWS, Azure, and Google Cloud Platform to deliver reliable, cost-effective, and secure cloud environments.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Infrastructure Services</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>Infrastructure as Code (Terraform, CloudFormation)</li>
                          <li>Auto-scaling and Load Balancing</li>
                          <li>Multi-region Deployments</li>
                          <li>Disaster Recovery Solutions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Modern Architecture</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>Container Orchestration (Kubernetes, Docker)</li>
                          <li>Serverless Architecture (Lambda, Functions)</li>
                          <li>Microservices Design</li>
                          <li>API Gateway Management</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DevOps Solutions Section */}
            <div id="devops-solutions" className="scroll-mt-24">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
                <div className="flex items-start gap-6">
                  <div style={{ width: '72px', height: '72px', background: '#22c55e', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg style={{ width: '44px', height: '44px', color: '#fff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 style={{ color: '#222', fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'left', fontFamily: 'inherit' }}>DevOps Solutions</h2>
                    <p style={{ color: '#444', fontSize: '1.1rem', marginBottom: '1.5rem', textAlign: 'left', fontFamily: 'inherit' }}>
                      Streamline your development lifecycle with comprehensive CI/CD pipelines and automation solutions. We accelerate delivery while maintaining quality and security standards.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">CI/CD Pipeline</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>GitHub Actions Workflows</li>
                          <li>Azure DevOps Pipelines</li>
                          <li>Jenkins Automation</li>
                          <li>Automated Testing Integration</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Deployment & Monitoring</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>Kubernetes Deployment Strategies</li>
                          <li>Blue-Green Deployments</li>
                          <li>Application Monitoring</li>
                          <li>Log Aggregation & Analysis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Solutions Discovery Section */}
            <div id="tech-solutions-discovery" className="scroll-mt-24">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
                <div className="flex items-start gap-6">
                  <div style={{ width: '72px', height: '72px', background: '#a855f7', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg style={{ width: '44px', height: '44px', color: '#fff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 style={{ color: '#222', fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'left', fontFamily: 'inherit' }}>Tech Solutions Discovery</h2>
                    <p style={{ color: '#444', fontSize: '1.1rem', marginBottom: '1.5rem', textAlign: 'left', fontFamily: 'inherit' }}>
                      Strategic technology consulting and solution architecture to guide your digital transformation. We help identify opportunities and create roadmaps for sustainable growth.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Strategic Planning</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>Technology Architecture Design</li>
                          <li>Digital Transformation Strategy</li>
                          <li>Legacy System Modernization</li>
                          <li>Scalability Assessment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Implementation Support</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li>Technology Stack Evaluation</li>
                          <li>Proof of Concept Development</li>
                          <li>Team Training & Knowledge Transfer</li>
                          <li>Best Practices Implementation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center bg-gray-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your project requirements and discover how our expertise can accelerate your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg">
                Schedule Consultation
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-medium transition-colors text-lg">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
