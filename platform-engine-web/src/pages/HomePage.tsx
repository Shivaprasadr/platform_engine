import React from 'react'
import { Link } from 'react-router-dom'
import useKeycloak from '../hooks/useKeycloak'
import { Button, Loading } from '../components/ui'
import CapabilityGrid from '../components/CapabilityGrid'
// Import icons
import { SiKubernetes, SiHelm, SiDocker } from 'react-icons/si'
import { VscGithub, VscAzureDevops, VscAzure } from 'react-icons/vsc'
import { FaAws, FaCode, FaRocket, FaShieldAlt, FaCogs, FaChartLine } from 'react-icons/fa'
import { BiLogoGoogleCloud } from 'react-icons/bi'
import { MdCloud, MdSecurity, MdSpeed } from 'react-icons/md'

const HomePage: React.FC = () => {
  const { authenticated, loading } = useKeycloak()

  if (loading) {
    return <Loading message="Initializing Alpha Star..." />
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Powering Business Evolution with
            <span className="block text-blue-300">Next-Generation Infrastructure</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            In today's competitive landscape, infrastructure agility defines market leaders. 
            Alpha Star delivers the technology foundation your business needs to innovate faster, scale smarter, and stay ahead.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {authenticated ? (
              <>
                <Link to="/my-account">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
                    Go to Dashboard
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg">
                    Explore Services
                  </Button>
                </Link>
              </>
            ) : (
              <Link to="/services">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg">
                  Explore Services
                </Button>
              </Link>
            )}
          </div>

          {/* Technology Icons */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 max-w-4xl mx-auto items-center">
            <SiKubernetes className="text-4xl md:text-5xl text-blue-400 mx-auto hover:scale-110 transition-transform" />
            <VscGithub className="text-4xl md:text-5xl text-gray-300 mx-auto hover:scale-110 transition-transform" />
            <SiHelm className="text-4xl md:text-5xl text-blue-500 mx-auto hover:scale-110 transition-transform" />
            <FaAws className="text-4xl md:text-5xl text-orange-400 mx-auto hover:scale-110 transition-transform" />
            <VscAzureDevops className="text-4xl md:text-5xl text-blue-600 mx-auto hover:scale-110 transition-transform" />
            <VscAzure className="text-4xl md:text-5xl text-blue-400 mx-auto hover:scale-110 transition-transform" />
            <BiLogoGoogleCloud className="text-4xl md:text-5xl text-blue-300 mx-auto hover:scale-110 transition-transform" />
            <SiDocker className="text-4xl md:text-5xl text-blue-500 mx-auto hover:scale-110 transition-transform" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Alpha Star?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for Scale. Designed for Security. Powered by Automation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FaRocket className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">⚡ Rapid Deployment</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Launch infrastructure in minutes, not hours.
              </p>
              <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <FaShieldAlt className="text-3xl text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🔒 Enterprise Security</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Compliance-first architecture with built-in data protection.
              </p>
              <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <FaCogs className="text-3xl text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🤖 Intelligent Automation</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Reduce manual errors and streamline workflows.
              </p>
              <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Capabilities Section - Using Reusable Component */}
      <CapabilityGrid 
        title="Infrastructure Excellence: What We Deliver"
        subtitle="In today's competitive landscape, infrastructure agility defines market leaders. Alpha Star provides the technology foundation and strategic depth to bring your digital ambitions to life with unmatched speed and security."
        columns={4}
      />

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored Technology for Every Business Need
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all">
              <MdCloud className="text-5xl text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Migration</h3>
              <p className="text-gray-600 mb-4">Seamless transitions with zero downtime.</p>
              <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all">
              <MdSecurity className="text-5xl text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security & Compliance</h3>
              <p className="text-gray-600 mb-4">Stay ahead of regulations and threats.</p>
              <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all">
              <MdSpeed className="text-5xl text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Optimization</h3>
              <p className="text-gray-600 mb-4">Maximize speed and efficiency across systems.</p>
              <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
                View All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Digital Journey Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your Technology Evolution Partner</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Whether you're defining your tech strategy, choosing implementation partners, or embedding organizational change for continuous growth - 
              Alpha Star has the expertise to unlock the full value of technology transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Strategy */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Strategy & Vision</h3>
              <p className="text-blue-100 text-sm">
                Define winning digital strategies that align with business objectives and market opportunities.
              </p>
            </div>

            {/* Implementation */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCogs className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Implementation</h3>
              <p className="text-blue-100 text-sm">
                Execute with precision using proven frameworks and cutting-edge technology solutions.
              </p>
            </div>

            {/* Scaling */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Scale & Growth</h3>
              <p className="text-blue-100 text-sm">
                Build platforms that grow with your business and adapt to changing market demands.
              </p>
            </div>

            {/* Innovation */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Innovation</h3>
              <p className="text-blue-100 text-sm">
                Stay ahead with emerging technologies and innovative solutions that create competitive advantage.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted Worldwide</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From Startups to Global Enterprises. Alpha Star powers mission-critical infrastructure across industries.
            </p>
          </div>
          
          {/* Industry Icons/Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
            <div className="text-center">
              <FaCode className="text-4xl text-gray-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600 font-medium">Technology</p>
            </div>
            <div className="text-center">
              <MdSecurity className="text-4xl text-gray-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600 font-medium">Finance</p>
            </div>
            <div className="text-center">
              <MdCloud className="text-4xl text-gray-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600 font-medium">Healthcare</p>
            </div>
            <div className="text-center">
              <FaCogs className="text-4xl text-gray-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600 font-medium">Retail</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Scale Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join leading companies using Alpha Star for secure, scalable infrastructure solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {authenticated ? (
              <Link to="/my-items">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
                  Go to My Items
                </Button>
              </Link>
            ) : (
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Contact Sales
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
