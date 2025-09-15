
export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-600">Last updated: March 20, 2025</p>
      </div>

      {/* Content */}
      <div className="space-y-8">
        {/* Section 1 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>

          <h3 className="text-lg font-medium text-gray-900 mb-3">Personal Information</h3>
          <p className="text-gray-700 mb-4">We may collect the following personal information:</p>

          <ul className="space-y-2 text-gray-700 ml-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Name and contact
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Payment information
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Travel preferences and history
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Government-issued identification
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Communication preferences
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use your personal information to:</p>

          <ul className="space-y-2 text-gray-700 ml-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Process and manage your flight bookings
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Communicate about your reservations
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Send relevant marketing communications (with your consent)
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Improve our services
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Comply with legal obligations
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
          <p className="text-gray-700 mb-4">We may share your information with:</p>

          <ul className="space-y-2 text-gray-700 ml-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Flight operators and service providers
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Payment processors
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Legal authorities when required
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Your Rights</h2>
          <p className="text-gray-700 mb-4">You have the right to:</p>

          <ul className="space-y-2 text-gray-700 ml-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Access your personal information
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Correct inaccurate information
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Request deletion of your information
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Opt-out of marketing communications
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Security</h2>
          <p className="text-gray-700">
            We implement appropriate technical and organizational measures to protect your personal information. However,
            no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
          <p className="text-gray-700 mb-4">For privacy-related inquiries, contact us at:</p>

          <div className="text-gray-700 space-y-2">
            <p>Email: privacy@nextflight.com</p>
            <p>Phone: +1 (800) 555-1234</p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500">© 2025 NEXTFLIGHT. All Rights Reserved.</p>
      </div>
    </div>
  );
}