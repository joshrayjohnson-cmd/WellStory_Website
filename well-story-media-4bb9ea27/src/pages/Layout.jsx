
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navigationItems = [
    { title: "Home", url: createPageUrl("Home") },
    { title: "About", url: createPageUrl("About") },
    { title: "Insights", url: createPageUrl("Insights") },
    { title: "Contact", url: createPageUrl("Contact") },
  ];

  return (
    <div className="min-h-screen bg-[#FEFCF9] font-['Source_Sans_3']">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Source+Sans+3:wght@400;600;700&display=swap');
        
        :root {
          --navy: #154771;
          --sky-blue: #75C9E3;
          --aqua: #89C7CA;
          --amber: #FFB629;
          --cool-gray: #AEABAC;
          --soft-white: #FEFCF9;
          --dark-text: #333333;
        }

        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .font-lato {
          font-family: 'Lato', sans-serif;
        }
      `}</style>

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_689cdd99dca9ca6bab2a8457/4a1d1a6b8_wellstory-logo.png" 
                alt="WellStory Media" 
                className="h-[60px] md:h-[85px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`font-['Lato'] font-normal text-[22px] transition-all duration-300 relative group ${
                    location.pathname === item.url
                      ? 'text-[#154771] font-semibold'
                      : 'text-[#333333] hover:text-[#75C9E3]'
                  }`}
                >
                  {item.title}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#FFB629] transition-all duration-300 ${
                      location.pathname === item.url ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <Link
              to={createPageUrl("Contact")}
              className="hidden md:block px-6 py-2.5 bg-[#FFB629] text-white font-['Lato'] font-semibold rounded-full hover:bg-[#75C9E3] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Start Your Journey
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#154771] hover:text-[#75C9E3] transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-6 py-4 space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 font-['Lato'] text-lg transition-colors ${
                    location.pathname === item.url
                      ? 'text-[#154771] font-semibold'
                      : 'text-[#333333]'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
              <Link
                to={createPageUrl("Contact")}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-3 px-6 bg-[#FFB629] text-white font-['Lato'] font-semibold rounded-full"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#154771] text-white mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_689cdd99dca9ca6bab2a8457/4a1d1a6b8_wellstory-logo.png" 
                alt="WellStory Media" 
                className="h-10 mb-4 brightness-0 invert"
              />
              <p className="text-[#89C7CA] leading-relaxed">
                Story-driven video production that connects and inspires.
              </p>
            </div>
            
            <div>
              <h3 className="font-['Lato'] font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.url}
                      className="text-[#89C7CA] hover:text-[#FFB629] transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-['Lato'] font-semibold text-lg mb-4">Get in Touch</h3>
              <p className="text-[#89C7CA] mb-4">
                Ready to tell your story? Let's start a conversation.
              </p>
              <Link
                to={createPageUrl("Contact")}
                className="inline-block px-6 py-2.5 bg-[#FFB629] text-white font-['Lato'] font-semibold rounded-full hover:bg-[#75C9E3] transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="border-t border-[#75C9E3]/30 mt-12 pt-8 text-center text-[#89C7CA] text-sm">
            <p>© 2025 WellStory Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
