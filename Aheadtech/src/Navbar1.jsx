"use client";

import { useEffect } from "react";
import { Link } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export function Navbar1() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpenSection, setMobileOpenSection] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  const servicesLinks = [
    { name: "All Services", href: "/services" },
    { name: "Marketing Services", href: "/marketing-services" },
    { name: "Development Services", href: "/development-services" },
    { name: "Consulting Services", href: "/consulting-services" },
    { name: "SEO", href: "/seo" },
    { name: "Google Ads", href: "/google-ads" },
    { name: "Meta Ads", href: "/meta-ads" },
  ];

  const resourceLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Blog Post", href: "/blog-post" },
    { name: "Case Study", href: "/case-study" },
    { name: "Resources", href: "/resources" },
    { name: "Reviews & Testimonials", href: "/reviews" },
  ];

  return (
    <nav className="relative bg-white/80 backdrop-blur-xl border-b border-slate-100 font-sans z-10">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <img src="/img/Ahead-Logo-right-balaning.png" alt="Logo" height="auto" width={180} />
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

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-[17px] font-bold text-slate-600 hover:text-[#213a73] transition-colors">
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${openDropdown === "services" ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <AnimatePresence>
                {openDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-56 bg-white shadow-2xl shadow-slate-200/50 rounded-2xl border border-slate-50 p-2 mt-1"
                  >
                    {servicesLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-[#2db074] rounded-xl transition-all"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("resources")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-[17px] font-bold text-slate-600 hover:text-[#213a73] transition-colors">
                Resources
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${openDropdown === "resources" ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <AnimatePresence>
                {openDropdown === "resources" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-56 bg-white shadow-2xl shadow-slate-200/50 rounded-2xl border border-slate-50 p-2 mt-1"
                  >
                    {resourceLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-[#2db074] rounded-xl transition-all"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-2.5 text-sm font-bold text-[#213a73] hover:text-slate-900 transition-colors cursor-pointer"
            >
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

      {/* Mobile Menu */}
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
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-bold text-[#0f172a]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Services Accordion */}
              <div>
                <button
                  className="flex items-center justify-between w-full font-bold text-[#0f172a] py-1"
                  onClick={() => setMobileOpenSection(mobileOpenSection === "services" ? null : "services")}
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${mobileOpenSection === "services" ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileOpenSection === "services" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 mt-2 flex flex-col gap-3"
                    >
                      {servicesLinks.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="text-slate-600 font-semibold"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Resources Accordion */}
              <div>
                <button
                  className="flex items-center justify-between w-full font-bold text-[#0f172a] py-1"
                  onClick={() => setMobileOpenSection(mobileOpenSection === "resources" ? null : "resources")}
                >
                  Resources
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${mobileOpenSection === "resources" ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileOpenSection === "resources" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 mt-2 flex flex-col gap-3"
                    >
                      {resourceLinks.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="text-slate-600 font-semibold"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-col gap-4 pt-6">
                <button className="w-full bg-[#213a73] text-white py-4 rounded-2xl font-bold cursor-pointer">
                  Free Audit
                </button>
                <Link
                  to="/contact"
                  className="w-full bg-slate-50 text-slate-900 py-4 rounded-2xl font-bold cursor-pointer text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
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
