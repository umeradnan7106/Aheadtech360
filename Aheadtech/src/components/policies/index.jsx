import React from "react";

export default function Policies() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#213a73] to-[#1a2e5c] text-white py-20">
        <div className="container max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Policies</h1>
          <p className="text-lg md:text-xl text-blue-100">
            Understanding our commitment to transparency and compliance
          </p>
        </div>
      </div>

      {/* Policies Content */}
      <div className=" max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-8">
          {/* Privacy Policy */}
          <div className="p-8">
            <h2 className="text-5xl font-bold text-[#213a73] mb-4">Privacy Policy</h2>
            <p className="text-slate-600 mb-4">
              At AheadTech360 LLC, we take your privacy seriously and are committed to protecting your personal data in full compliance with applicable privacy laws, including GDPR and CCPA.
            </p>

            {/* Section 1 */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#213a73] mb-4">1. INFORMATION WE COLLECT</h2>
              <p className="text-slate-600 mb-4">
                We may collect:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>A full refund may be available within 14 days of the initial payment if no work has started.</li>
                <li>Partial refunds may be considered depending on progress and completed deliverables.</li>
                <li>Custom development and approved builds are non-refundable once work begins.</li>
                <li>All refund requests must be submitted in writing for review.</li>
              </ul>
              <p className="text-slate-600 mb-4 mt-4">
                Our goal is simple: keep your information safe while helping your business grow with confidence.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#213a73] mb-4">2. HOW WE USE YOUR DATA</h2>
              <p className="text-slate-600 mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Provide and manage Services</li>
                <li>Process payments and billing</li>
                <li>Respond to requests and support needs</li>
                <li>Improve and personalize Services</li>
                <li>Send service notifications and, if consented, marketing messages</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#213a73] mb-4">3. NON‑SHARING OF MOBILE NUMBERS</h2>
              <p className="text-slate-600 mb-4">
                We do not share your mobile phone numbers or SMS/text messaging consent information with third parties or affiliates for their own marketing or promotional purposes. Your phone number and related consent are used solely for the purposes outlined in this policy.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#213a73] mb-4">4. COOKIES & TRACKING</h2>
              <p className="text-slate-600 mb-4">
                We use cookies and pixels for analytics, performance, and advertising optimization. You may disable cookies through browser settings.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#213a73] mb-4">5. DATA SHARING</h2>
              <p className="text-slate-600 mb-4">
                We do not sell personal data. We may share data with:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Service providers</li>
                <li>Payment processors</li>
                <li>Legal authorities when required</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#213a73] mb-4">6. INTERNATIONAL TRANSFERS</h2>
              <p className="text-slate-600 mb-4">
                Data may be processed or stored outside your jurisdiction, including the U.S.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#213a73] mb-4">7. USER RIGHTS (GDPR & CCPA)</h2>
              <p className="text-slate-600 mb-4">
                You may request access, correction, deletion, restriction, or opt‑out of certain processing. California residents can request rights under CCPA. GDPR rights apply to EU data subjects.
                Requests: info@aheadtech360.com.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#213a73] mb-4">8. DATA SECURITY & RETENTION</h2>
              <p className="text-slate-600 mb-4">
                We implement reasonable security measures, but no system is fully secure. Data is retained only as long as necessary for business, compliance, or legal purposes.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#213a73] mb-4">9. CHILDREN</h2>
              <p className="text-slate-600 mb-4">
                We do not knowingly collect data from individuals under 18.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#213a73] mb-4">10. POLICY CHANGES</h2>
              <p className="text-slate-600 mb-4">
                This policy may be updated from time to time. Continued use implies acceptance.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
