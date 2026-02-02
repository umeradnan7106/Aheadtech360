
"use client";

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export function Footer3() {
  return (
    <footer className="bg-[#0000000a] pt-20 pb-10 px-6 font-sans">
      <div className="container max-w-7xl mx-auto">
        
        {/* Top CTA Banner - Matches the brand theme */}
        <div className="bg-[#213a73] rounded-[40px] p-10 md:p-16 mb-20 text-center relative overflow-hidden shadow-2xl shadow-blue-900/20">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to scale your business?
            </h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto text-lg">
              Join 50+ businesses growing faster with our proven marketing frameworks.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-emerald-900/20">
                Get a Free Audit
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all">
                Book a Call
              </button>
            </div>
          </div>
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16">
          
          {/* Brand & Contact Column */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <img src="/img/Ahead-Logo-right-balaning.png" alt="AheadTech360 Logo" height="auto" width={180}/>
            </div>
            
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              We help small and medium businesses generate more leads and sales through performance marketing and digital strategy.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <span className="text-slate-600 font-bold">+1 (212) 555-0147</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <span className="text-slate-600 font-bold">growth@agency.com</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[#0f172a] font-bold uppercase tracking-widest text-[10px] mb-6">Company</h4>
              <ul className="space-y-4 text-slate-500 font-bold text-sm">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Our Stories</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors flex items-center gap-2">Careers <span className="text-[9px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full">Hiring</span></a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#0f172a] font-bold uppercase tracking-widest text-[10px] mb-6">Services</h4>
              <ul className="space-y-4 text-slate-500 font-bold text-sm">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Paid Search</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Social Ads</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">SEO Growth</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Web Dev</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[#0f172a] font-bold uppercase tracking-widest text-[10px] mb-6">Follow Us</h4>
              <div className="flex gap-3">
                <a 
                  href="https://facebook.com/aheadtech360" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#1877f2] hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                
                <a 
                  href="https://instagram.com/aheadtech360" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                
                <a 
                  href="https://twitter.com/aheadtech360" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#1da1f2] hover:text-white transition-all"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                
                <a 
                  href="https://linkedin.com/company/aheadtech360" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-[#0a66c2] hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs font-medium">
            © 2024 AheadTech360. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold text-slate-400">
            <a href="#" className="hover:text-[#0f172a] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#0f172a] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#0f172a] transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

