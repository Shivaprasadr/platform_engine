import React from 'react'

const ServicesPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cloud Technologies */}
          <div id="cloud-technologies" className="bg-gray-50 rounded-lg p-6 border border-gray-200 scroll-mt-24">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Technologies</h3>
            <p className="text-gray-600 mb-4">Scalable cloud solutions with AWS, Azure, and Google Cloud Platform.</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Infrastructure as Code</li>
              <li>• Container Orchestration</li>
              <li>• Serverless Architecture</li>
            </ul>
          </div>

          {/* DevOps Solutions */}
          <div id="devops-solutions" className="bg-gray-50 rounded-lg p-6 border border-gray-200 scroll-mt-24">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">DevOps Solutions</h3>
            <p className="text-gray-600 mb-4">Complete CI/CD pipelines and automation solutions.</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• GitHub Actions</li>
              <li>• Azure DevOps</li>
              <li>• Kubernetes Deployment</li>
            </ul>
          </div>

          {/* Tech Solutions Discovery */}
          <div id="tech-solutions-discovery" className="bg-gray-50 rounded-lg p-6 border border-gray-200 scroll-mt-24">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Tech Solutions Discovery</h3>
            <p className="text-gray-600 mb-4">Strategic technology consulting and solution architecture.</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Architecture Design</li>
              <li>• Technology Assessment</li>
              <li>• Solution Strategy</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">Contact us to discuss your project requirements and how we can help.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
