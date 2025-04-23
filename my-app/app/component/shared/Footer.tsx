import React from 'react'
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react'
import Logo from '../logo/logoImg'
import { sectionPadding } from '../styles/styles'

const Footer = () => {
  return (
    <footer className={`${sectionPadding} bg-black border-t border-gray-800 py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/ewuji-john-40bb1413b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com/yourhandle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://www.instagram.com/yourhandle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.facebook.com/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Ewuji Oluwaseyi John. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer