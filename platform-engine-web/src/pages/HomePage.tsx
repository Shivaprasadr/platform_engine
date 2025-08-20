import React from 'react'
import { Link } from 'react-router-dom'
import useKeycloak from '../hooks/useKeycloak'
import { Button, Loading } from '../components/ui'
// Import icons
import { SiKubernetes, SiHelm, SiDocker } from 'react-icons/si'
import { VscGithub, VscAzureDevops, VscAzure } from 'react-icons/vsc'
import { FaAws, FaCode, FaRocket, FaShieldAlt, FaCogs } from 'react-icons/fa'
import { BiLogoGoogleCloud } from 'react-icons/bi'
import { MdCloud, MdSecurity, MdSpeed } from 'react-icons/md'

const HomePage: React.FC = () => {
  const { authenticated, loading, user, login, register } = useKeycloak()

  if (loading) {
    return <Loading message="Initializing Platform Engine..." />
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Quick Technology Solutions 
            <span className="block text-blue-300">For Your Business</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform Your Business with Secure, Compliant, and Industry-Leading Technology Solutions. 
            Our expertise in Infrastructure as Code and automation accelerates your business development.
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
              <>
                <Button 
                  onClick={register}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
                >
                  Get Started Free
                </Button>
                <Button 
                  onClick={login}
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Sign In
                </Button>
              </>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Platform Engine?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide enterprise-grade solutions that scale with your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FaRocket className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Deployment</h3>
              <p className="text-gray-600 leading-relaxed">
                Get your infrastructure up and running in minutes, not hours. Our automated deployment 
                pipelines ensure rapid time-to-market for your applications.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <FaShieldAlt className="text-3xl text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Built-in security best practices with compliance standards. Your data and applications 
                are protected with industry-leading security measures.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <FaCogs className="text-3xl text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Automation</h3>
              <p className="text-gray-600 leading-relaxed">
                Infrastructure as Code with complete automation. Reduce manual errors and 
                increase efficiency with our automated workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all">
              <MdCloud className="text-5xl text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Migration</h3>
              <p className="text-gray-600 mb-4">Seamless migration to cloud platforms with minimal downtime</p>
              <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all">
              <MdSecurity className="text-5xl text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security Compliance</h3>
              <p className="text-gray-600 mb-4">Ensure your infrastructure meets industry security standards</p>
              <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all">
              <MdSpeed className="text-5xl text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Optimization</h3>
              <p className="text-gray-600 mb-4">Optimize your applications for maximum performance and efficiency</p>
              <Link to="/services" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using Platform Engine to accelerate their digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {authenticated ? (
              <Link to="/my-items">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
                  Go to My Items
                </Button>
              </Link>
            ) : (
              <>
                <Button 
                  onClick={register}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
                >
                  Start Free Trial
                </Button>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
