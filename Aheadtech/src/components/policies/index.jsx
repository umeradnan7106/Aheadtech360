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
              We aim for complete client satisfaction and handle refunds fairly and transparently:
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

          {/* Terms of Service */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#213a73] mb-4">Terms of Service</h2>
            <p className="text-slate-600 mb-4">
              By working with AheadTech360 or using our website, you agree to the following terms:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Services are delivered based on the scope and agreement approved with the client.</li>
              <li>All work, deliverables, and strategic assets remain our property until full payment is received.</li>
              <li>Clients are responsible for providing accurate information, approvals, and timely feedback.</li>
              <li>We reserve the right to decline or discontinue service if requests fall outside ethical or professional standards.</li>
            </ul>
            <p className="text-slate-600 mb-4 mt-4">
              These terms help ensure clarity, accountability, and smooth collaboration on both sides.
            </p>
          </div>

          {/* Refund Policy */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#213a73] mb-4">Refund Policy</h2>
            <p className="text-slate-600 mb-4">
              We aim for complete client satisfaction and handle refunds fairly and transparently:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>A full refund may be available within 14 days of the initial payment if no work has started.</li>
              <li>Partial refunds may be considered depending on progress and completed deliverables.</li>
              <li>Custom development and approved builds are non-refundable once work begins.</li>
              <li>All refund requests must be submitted in writing for review.</li>
            </ul>
            <p className="text-slate-600 mb-4 mt-4">
              We believe in long-term partnerships, and we always work to resolve concerns before they become issues.
            </p>
          </div>

          {/* Cookie Policy */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#213a73] mb-4">Cookie Policy</h2>
            <p className="text-slate-600 mb-4">
              AheadTech360 uses cookies to improve your browsing experience and website performance:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Essential cookies help the site function properly.</li>
              <li>Analytics cookies allow us to understand visitor behavior and improve usability.</li>
              <li>Marketing cookies may be used for personalized content and advertising, only with consent.</li>
              <li>You can manage or disable cookies anytime through your browser settings.</li>
            </ul>
            <p className="text-slate-600 mb-4 mt-4">
              Cookies help us create a smoother, faster, and more relevant experience for every visitor.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-[#213a73] mb-4">Questions About Our Policies?</h2>
            <p className="text-slate-600 mb-6">
              If you have any questions about our policies or how your data is handled, feel free to contact us anytime. We’re always happy to clarify.
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
