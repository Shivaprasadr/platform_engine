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
    <footer className="bg-gray-900 text-white py-8 text-center">
      <div className="container mx-auto px-4">
        <p>&copy; 2025 Platform Engine | All Rights Reserved</p>
      </div>
    </footer>
  </div>
)

export default Layout
