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
      <div className="container max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-8">
          {/* Privacy Policy */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#213a73] mb-4">Privacy Policy</h2>
            <p className="text-slate-600 mb-4">
              At AheadTech360, we are committed to protecting your privacy and ensuring the security of your personal information.
              This policy outlines how we collect, use, and safeguard your data.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>We collect only necessary information to provide our services</li>
              <li>Your data is stored securely and never shared without consent</li>
              <li>You have the right to access, modify, or delete your information</li>
              <li>We comply with all applicable data protection regulations</li>
            </ul>
          </div>

          {/* Terms of Service */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#213a73] mb-4">Terms of Service</h2>
            <p className="text-slate-600 mb-4">
              By using our services, you agree to the following terms and conditions:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Services are provided on an as-agreed basis</li>
              <li>All deliverables remain our intellectual property until payment is received</li>
              <li>Clients must provide accurate information and timely feedback</li>
              <li>We reserve the right to refuse service at our discretion</li>
            </ul>
          </div>

          {/* Refund Policy */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#213a73] mb-4">Refund Policy</h2>
            <p className="text-slate-600 mb-4">
              We strive for 100% client satisfaction. Our refund policy is as follows:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Full refund available within 14 days of initial payment if no work has commenced</li>
              <li>Partial refunds may be considered based on work completed</li>
              <li>Custom development work is non-refundable once approved</li>
              <li>Refund requests must be submitted in writing</li>
            </ul>
          </div>

          {/* Cookie Policy */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#213a73] mb-4">Cookie Policy</h2>
            <p className="text-slate-600 mb-4">
              We use cookies to enhance your browsing experience:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Essential cookies for site functionality</li>
              <li>Analytics cookies to understand user behavior</li>
              <li>Marketing cookies for personalized content (with consent)</li>
              <li>You can manage cookie preferences in your browser settings</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-[#213a73] mb-4">Questions About Our Policies?</h2>
            <p className="text-slate-600 mb-6">
              If you have any questions or concerns about our policies, please don't hesitate to reach out to our team.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#213a73] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#1a2e5c] transition-all shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
