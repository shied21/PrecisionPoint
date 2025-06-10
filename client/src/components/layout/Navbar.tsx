import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from 'lucide-react';
import { Logo as PrecisionPointLogo } from "@/assets/logo";
import qtechLogo from "../../assets/qtech-logo.png";

// Custom component to avoid nested anchors
const NavItem = ({ to, className, onClick, children }: {
  to: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`${className || ""} cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [location, setLocation] = useLocation();
  const isHomePage = location === "/";

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);

    if (sectionId === "contact") {
      const footerElement = document.querySelector("footer");
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      setLocation(`/#${sectionId}`);
    }
  };

  // Improved scroll function with better offset calculation
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 30; // header height
      //const extraOffset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleExternalNavigation = (path: string) => {
    setLocation(path);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const footer = document.querySelector('footer');
      let current = '';
      
      // Check other sections only if footer is not in view
      sections.forEach((section) => {
        const sectionRect = section.getBoundingClientRect();
        const headerHeight = 40;
        if (sectionRect.top <= headerHeight + 10) { // Adjusted threshold
          current = section.getAttribute('id') || '';
        }
      });

      // Check if footer is in view first
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const footerTop = footerRect.top;
        const windowHeight = window.innerHeight;
        
        // If footer is in view or we've scrolled past it
        if (footerTop <= windowHeight * 0.75) {
          current = 'contact';
          setActiveSection('contact');
          return; // Exit early if footer is in view
        }
      }
      
      if (current !== '') {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navLinks = [
    { id: 'home', text: 'HOME', isSection: true },
    { id: 'services', text: 'SERVICES', isSection: true },
    { id: 'about', text: 'ABOUT US', isSection: true },
    { id: 'projects', text: 'PROJECTS', isSection: true },
    { id: 'partners', text: 'ASSOCIATES', isSection: false, path: '/partners' },
    { id: 'contact', text: 'CONTACT US', isSection: true }
  ];

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center mr-2">
                <Link href="/">
                  <div className="flex items-center cursor-pointer mt-2">
                    <PrecisionPointLogo className="h-10 w-auto" />
                  </div>
                </Link>
              </div>
              
              {/* Desktop menu - Show at 968px and up */}
              <div className="hidden lg:flex lg:items-center lg:space-x-3 ml-16">
                {navLinks.map(link => (
                  <div key={link.id}>
                    <NavItem 
                      to={link.isSection ? '/' : link.path || '/'}
                      className={`font-poppins ${
                        (isHomePage && activeSection === link.id) || (!isHomePage && location === (link.path || '/')) 
                          ? 'text-primary' 
                          : 'text-gray-700 hover:text-primary'
                      } px-3 py-2 text-sm font-medium`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (link.isSection) {
                          handleNavLinkClick(link.id);
                        } else {
                          handleExternalNavigation(link.path || '/');
                        }
                      }}
                    >
                      {link.text}
                    </NavItem>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center">
              {/* Qtech button - Desktop */}
              <button 
                className="hidden lg:flex items-center bg-[#0b4a5c] hover:bg-[#0a3e4e] text-white font-bold px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
                aria-label="Qtech Pipes and Fittings"
                onClick={() => handleExternalNavigation('/qtech-home')}
              >
                <img 
                  src={qtechLogo} 
                  alt="Qtech Pipes and Fittings" 
                  className="h-6" 
                />
              </button>
              
              {/* Mobile menu button */}
              <button 
                type="button" 
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 focus:outline-none transition-all duration-300"
                onClick={toggleMobileMenu}
              >
              {/*  <span className="sr-only">Open main menu</span>
                <i className="fas fa-bars text-xl"></i>*/}
                <span className="sr-only">Toggle menu</span>
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>

              {/* Backdrop overlay when menu is open 
              {mobileMenuOpen && (
                <div 
                  className="fixed inset-0 bg-black/50 lg:hidden z-30" 
                  onClick={toggleMobileMenu}
                />
              )}*/}
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`
        lg:hidden 
        absolute  
        top-16 
        left-0 
        right-0 
        w-full
        bg-white 
        shadow-lg
        transition-[transform,opacity]
        duration-200
        ease-in-out
        z-40
        ${mobileMenuOpen 
          ? 'translate-y-0 opacity-100 visible' 
          : 'translate-y-[-100%] opacity-0 invisible'
        }
      `}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <div key={link.id}>
                <NavItem 
                  to={link.isSection ? '/' : link.path || '/'}
                  className={`${
                    (isHomePage && activeSection === link.id) || (!isHomePage && location === (link.path || '/')) 
                      ? 'text-primary' 
                      : 'text-gray-700 hover:text-primary'
                  } block px-3 py-2 rounded-md text-base font-medium`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (link.isSection) {
                      handleNavLinkClick(link.id);
                    } else {
                      handleExternalNavigation(link.path || '/');
                    }
                  }}
                >
                  {link.text}
                </NavItem>
              </div>
            ))}
            
            {/* Qtech button - Mobile */}
            <button 
              className="w-full mt-2 flex items-center justify-center bg-[#0b4a5c] hover:bg-[#0a3e4e] text-white font-bold px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
              onClick={() => handleExternalNavigation('/qtech-home')}
            >
              <img 
                src={qtechLogo} 
                alt="Qtech Pipes and Fittings" 
                className="h-6" 
              />
            </button>
          </div>
        </div>
      </nav>
      {/* Add backdrop for content when menu is open */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 lg:hidden"
          style={{ zIndex: 40 }}
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
};

export default Navbar;