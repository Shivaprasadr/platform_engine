import React, { ReactNode } from 'react'
import NavBar from './NavBar'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <NavBar />
    <main className="flex-1 pt-16">
      {children}
    </main>
    <footer className="py-8 text-center" style={{ backgroundColor: '#F3F3F3', color: '#1A1A1A', borderTop: '1px solid #D1D1D1' }}>
      <div className="container mx-auto px-4">
                <p className="text-center text-gray-600" style={{ color: '#4A4A4A' }}>
          © 2024 Unknown. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
)

export default Layout
