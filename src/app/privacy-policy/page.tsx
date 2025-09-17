export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto p-4 sm:p-6 bg-white">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-xs sm:text-sm text-gray-600">Last updated: March 20, 2025</p>
      </div>

      {/* Content */}
      <div className="space-y-6 sm:space-y-8">
        {/* Section 1 */}
        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">1. Information We Collect</h2>

          <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-3">Personal Information</h3>
          <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">We may collect the following personal information:</p>

          <ul className="space-y-2 text-gray-700 ml-2 sm:ml-4">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">Name and contact</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">Payment information</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">Travel preferences and history</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">Government-issued identification</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">Communication preferences</span>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">We use your personal information to:</p>

          <ul className="space-y-2 text-gray-700 ml-2 sm:ml-4">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">Process and manage your flight bookings</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">Communicate about your reservations</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">Send relevant marketing communications (with your consent)</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">Improve our services</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">Comply with legal obligations</span>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">3. Information Sharing</h2>
          <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">We may share your information with:</p>

          <ul className="space-y-2 text-gray-700 ml-2 sm:ml-4">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">Flight operators and service providers</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">Payment processors</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">Legal authorities when required</span>
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">4. Your Rights</h2>
          <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">You have the right to:</p>

          <ul className="space-y-2 text-gray-700 ml-2 sm:ml-4">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">Access your personal information</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">Correct inaccurate information</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">Request deletion of your information</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
              <span className="text-sm sm:text-base">Opt-out of marketing communications</span>
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">5. Security</h2>
          <p className="text-gray-700 text-sm sm:text-base">
            We implement appropriate technical and organizational measures to protect your personal information. However,
            no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">6. Contact Us</h2>
          <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">For privacy-related inquiries, contact us at:</p>

          <div className="text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
            <p>Email: privacy@nextflight.com</p>
            <p>Phone: +1 (800) 555-1234</p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-gray-200">
        <p className="text-xs sm:text-sm text-gray-500">© 2025 NEXTFLIGHT. All Rights Reserved.</p>
      </div>
    </div>
  );
}