"use client";

import { useEffect } from "react";

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
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Portfolio", href: "#" },
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
            <a href="/" className="flex items-center gap-2 group">
              {/* <div className="w-8 h-8 bg-[#213a73] rounded-lg flex items-center justify-center transition-transform group-hover:rotate-6">
                <div className="w-4 h-4 bg-emerald-400 rounded-sm"></div>
              </div> */}
              {/* <span className="text-xl font-black text-[#0f172a] tracking-tighter">
                AhedaTech360.
              </span> */}
              <img src="/img/Ahead-Logo-right-balaning.png" alt="Logo" height="auto" width={180}/>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-[#213a73] transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-bold text-slate-600 hover:text-[#213a73] transition-colors">
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
            <button className="px-6 py-2.5 text-sm font-bold text-[#213a73] hover:text-slate-900 transition-colors cursor-pointer">
              Contact
            </button>
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
                <a key={link.name} href={link.href} className="font-bold text-[#0f172a]">
                  {link.name}
                </a>
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
                <button className="w-full bg-slate-50 text-slate-900 py-4 rounded-2xl font-bold cursor-pointer">
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>


    // <section
    //   id="relume"
    //   className="flex w-full items-center border-b border-border-primary bg-background-primary lg:min-h-18 lg:px-[5%]"
    // >
    //   <div className="size-full lg:flex lg:items-center lg:justify-between">
    //     <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
    //       <a href="#">
    //         <img
    //           src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
    //           alt="Logo image"
    //         />
    //       </a>
    //       <button
    //         className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
    //         onClick={useActive.toggleMobileMenu}
    //       >
    //         <motion.span
    //           className="my-[3px] h-0.5 w-6 bg-black"
    //           animate={useActive.animateMobileMenuButtonSpan}
    //           variants={{
    //             open: { translateY: 8, transition: { delay: 0.1 } },
    //             rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
    //             closed: {
    //               translateY: 0,
    //               rotate: 0,
    //               transition: { duration: 0.2 },
    //             },
    //           }}
    //         />
    //         <motion.span
    //           className="my-[3px] h-0.5 w-6 bg-black"
    //           animate={useActive.animateMobileMenu}
    //           variants={{
    //             open: { width: 0, transition: { duration: 0.1 } },
    //             closed: {
    //               width: "1.5rem",
    //               transition: { delay: 0.3, duration: 0.2 },
    //             },
    //           }}
    //         />
    //         <motion.span
    //           className="my-[3px] h-0.5 w-6 bg-black"
    //           animate={useActive.animateMobileMenuButtonSpan}
    //           variants={{
    //             open: { translateY: -8, transition: { delay: 0.1 } },
    //             rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
    //             closed: {
    //               translateY: 0,
    //               rotate: 0,
    //               transition: { duration: 0.2 },
    //             },
    //           }}
    //         />
    //       </button>
    //     </div>
    //     <motion.div
    //       variants={{
    //         open: { height: "var(--height-open, 100dvh)" },
    //         close: { height: "var(--height-closed, 0)" },
    //       }}
    //       initial="close"
    //       exit="close"
    //       animate={useActive.animateMobileMenu}
    //       transition={{ duration: 0.4 }}
    //       className="overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
    //     >
    //       <a
    //         href="#"
    //         className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
    //       >
    //         About
    //       </a>
    //       <a
    //         href="#"
    //         className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
    //       >
    //         Services
    //       </a>
    //       <a
    //         href="#"
    //         className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
    //       >
    //         Portfolio
    //       </a>
    //       <div
    //         onMouseEnter={useActive.openOnDesktopDropdownMenu}
    //         onMouseLeave={useActive.closeOnDesktopDropdownMenu}
    //       >
    //         <button
    //           className="flex w-full items-center justify-between gap-2 py-3 text-left text-md lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base"
    //           onClick={useActive.openOnMobileDropdownMenu}
    //         >
    //           <span>Resources</span>
    //           <motion.span
    //             variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
    //             animate={useActive.animateDropdownMenuIcon}
    //             transition={{ duration: 0.3 }}
    //           >
    //             <RxChevronDown />
    //           </motion.span>
    //         </button>
    //         <AnimatePresence>
    //           <motion.nav
    //             variants={{
    //               open: {
    //                 visibility: "visible",
    //                 opacity: "var(--opacity-open, 100%)",
    //                 display: "block",
    //                 y: 0,
    //               },
    //               close: {
    //                 visibility: "hidden",
    //                 opacity: "var(--opacity-close, 0)",
    //                 display: "none",
    //                 y: "var(--y-close, 0%)",
    //               },
    //             }}
    //             animate={useActive.animateDropdownMenu}
    //             initial="close"
    //             exit="close"
    //             transition={{ duration: 0.2 }}
    //             className="bg-background-primary lg:absolute lg:z-50 lg:border lg:border-border-primary lg:p-2 lg:[--y-close:25%]"
    //           >
    //             <a
    //               href="#"
    //               className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base"
    //             >
    //               Marketing
    //             </a>
    //             <a
    //               href="#"
    //               className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base"
    //             >
    //               Development
    //             </a>
    //             <a
    //               href="#"
    //               className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base"
    //             >
    //               Consulting
    //             </a>
    //           </motion.nav>
    //         </AnimatePresence>
    //       </div>
    //       <div className="mt-6 flex flex-col items-center gap-4 lg:ml-4 lg:mt-0 lg:flex-row">
    //         <Button
    //           title="Contact"
    //           variant="secondary"
    //           size="sm"
    //           className="w-full"
    //         >
    //           Contact
    //         </Button>
    //         <Button title="Audit" size="sm" className="w-full">
    //           Audit
    //         </Button>
    //       </div>
    //     </motion.div>
    //   </div>
    // </section>
  );
}
