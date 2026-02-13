"use client";

import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar1() {
  const useActive = useRelume();


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    // { name: "Policies", href: "/policies" },
  ];

  const resourceLinks = [
    { name: "Marketing", href: "#" },
    { name: "Development", href: "#" },
    { name: "Consulting", href: "#" },
  ];

  return (


    <nav className="relative bg-white/80 backdrop-blur-xl border-b border-slate-100 font-sans z-10">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              {/* <div className="w-8 h-8 bg-[#213a73] rounded-lg flex items-center justify-center transition-transform group-hover:rotate-6">
                <div className="w-4 h-4 bg-emerald-400 rounded-sm"></div>
              </div> */}
              {/* <span className="text-xl font-black text-[#0f172a] tracking-tighter">
                AhedaTech360.
              </span> */}
              <img src="/img/Ahead-Logo-right-balaning.png" alt="Logo" height="auto" width={180}/>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="px-4 py-2 font-bold text-slate-600 hover:text-[#213a73] transition-colors text-[17px]"
              >
                {link.name}
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-[17px] font-bold text-slate-600 hover:text-[#213a73] transition-colors">
                Resources
                <svg className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-48 bg-white shadow-2xl shadow-slate-200/50 rounded-2xl border border-slate-50 p-2 mt-1"
                  >
                    {resourceLinks.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-emerald-500 rounded-xl transition-all"
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="px-6 py-2.5 text-sm font-bold text-[#213a73] hover:text-slate-900 transition-colors cursor-pointer">
              Contact
            </Link>
            <button className="bg-[#213a73] text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-[#1a2e5c] transition-all shadow-lg shadow-blue-900/10 cursor-pointer">
              Free Audit
            </button>
          </div>

          {/* Mobile Burger Button */}
          <button 
            className="lg:hidden p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: 45, y: 8, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                className="h-0.5 bg-current rounded-full"
              />
              <motion.span 
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-0.5 w-2/3 bg-current rounded-full"
              />
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: -45, y: -8, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                className="h-0.5 bg-current rounded-full"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-slate-50 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} className="font-bold text-[#0f172a]">
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Resources Submenu */}
              <div className="py-4 border-t border-slate-50">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Resources</p>
                <div className="grid grid-cols-1 gap-4">
                  {resourceLinks.map((item) => (
                    <a key={item.name} href={item.href} className="text-lg font-bold text-slate-600">
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-6">
                <button className="w-full bg-[#213a73] text-white py-4 rounded-2xl font-bold cursor-pointer">
                  Free Audit
                </button>
                <Link to="/contact" className="w-full bg-slate-50 text-slate-900 py-4 rounded-2xl font-bold cursor-pointer text-center">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

  );
}
