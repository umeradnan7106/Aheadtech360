// "use client";

// import React, { useEffect } from "react";

// export function ContactForm() {
//   useEffect(() => {
//     // Script ko dynamically load karein
//     const script = document.createElement('script');
//     script.src = 'https://api.aheadtech360.com/js/form_embed.js';
//     script.async = true;
//     document.body.appendChild(script);

//     // Cleanup
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <section className="py-16 px-6 bg-slate-50">
//       <div className="container max-w-4xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
//             Get in Touch
//           </h2>
//           <p className="text-slate-600 text-lg">
//             Fill out the form below and we'll get back to you within 24 hours
//           </p>
//         </div>

//         {/* GoHighLevel Form */}
//         <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
//           <iframe
//             src="https://api.aheadtech360.com/widget/form/qNHdrZHDditymBg2VsbZ"
//             style={{
//               width: '100%',
//               height: '1643px',
//               border: 'none',
//               borderRadius: '3px'
//             }}
//             id="inline-qNHdrZHDditymBg2VsbZ"
//             data-layout="{'id':'INLINE'}"
//             data-trigger-type="alwaysShow"
//             data-trigger-value=""
//             data-activation-type="alwaysActivated"
//             data-activation-value=""
//             data-deactivation-type="neverDeactivate"
//             data-deactivation-value=""
//             data-form-name="Form 6"
//             data-height="1643"
//             data-layout-iframe-id="inline-qNHdrZHDditymBg2VsbZ"
//             data-form-id="qNHdrZHDditymBg2VsbZ"
//             title="Contact Form"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect } from "react";

export function ContactForm() {
  useEffect(() => {
    // Script ko dynamically load karein
    const script = document.createElement('script');
    script.src = 'https://api.aheadtech360.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="container max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-3">
          
          {/* Left Side - Contact Info */}
          <div className="flex flex-col justify-items-start">
            <div className="mb-8">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                Start
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-[#0f172a] my-6 tracking-tight">
                Tell us more
              </h2>
              <p className="text-slate-600 text-lg">
                Fill out the form below and we'll be in touch within hours
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#213a73] rounded-xl flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2" 
                    className="w-6 h-6"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 7l10 7 10-7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium">Email</p>
                  <a 
                    href="mailto:hello@aheadtech360.com" 
                    className="text-[#0f172a] font-bold text-lg hover:text-[#213a73] transition-colors"
                  >
                    info@aheadtech360.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#25B06F] rounded-xl flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2" 
                    className="w-6 h-6"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium">Phone</p>
                  <a 
                    href="tel:+18444774926" 
                    className="text-[#0f172a] font-bold text-lg hover:text-[#25B06F] transition-colors"
                  >
                    +1 (251) 373-2311
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2" 
                    className="w-6 h-6"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium">Location Register</p>
                  <p className="text-[#0f172a] font-bold text-lg">
                    30N South Gould Street Sheridan, WY, United States 82801
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links (Optional) */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="text-slate-500 text-sm font-medium mb-4">Follow Us</p>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/aheadtech360/" 
                  className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#213a73] hover:text-white transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/aheadtech360/" 
                  className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0a66c2] hover:text-white transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/aheadtech360" 
                  className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - GoHighLevel Form */}
          <div className="rounded-2xl ">
            <iframe
              src="https://api.aheadtech360.com/widget/form/qNHdrZHDditymBg2VsbZ"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '800px',
                border: 'none'
              }}
              id="inline-qNHdrZHDditymBg2VsbZ"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Form 6"
              data-height="1643"
              data-layout-iframe-id="inline-qNHdrZHDditymBg2VsbZ"
              data-form-id="qNHdrZHDditymBg2VsbZ"
              title="Contact Form"
            />
          </div>

        </div>
      </div>
    </section>
  );
}