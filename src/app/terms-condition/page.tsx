"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="container mx-auto py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <Card className="container mx-auto shadow-none border-0">
        <CardHeader className="text-start pb-4 sm:pb-6">
          <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900">Terms and Conditions</CardTitle>
          <CardDescription className="text-xs sm:text-sm text-gray-500 mt-2">
            Last updated: April 5, 2025
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 sm:space-y-8 text-sm text-gray-700 leading-relaxed px-4 sm:px-6 pb-6 sm:pb-8">

          <section>
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">Introduction</h2>
            <p className="text-xs sm:text-sm">
              These Terms and Conditions govern your use of [Your Company Name]&apos;s website and services.
              By accessing or using our services, you agree to comply with and be bound by these terms.
            </p>

          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">Intellectual Property Rights</h2>
            <p className="text-xs sm:text-sm">
              All content on this website, including text, graphics, logos, and software, is the property
              of [Your Company Name] and protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">User Responsibilities</h2>
            <p className="text-xs sm:text-sm">
              You agree not to misuse the service by introducing viruses, malicious code, or attempting
              unauthorized access. Violation may result in termination of your access.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">Limitation of Liability</h2>
            <p className="text-xs sm:text-sm">
              [Your Company Name] shall not be liable for any indirect, incidental, or consequential damages
              arising from your use of the service, even if advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">Changes to Terms</h2>
            <p className="text-xs sm:text-sm">
              We reserve the right to modify these terms at any time. Changes will be posted here, and
              your continued use of the service constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">Governing Law</h2>
            <p className="text-xs sm:text-sm">
              These Terms shall be governed by the laws of [Your Jurisdiction], without regard to its
              conflict of law principles. Any disputes shall be resolved in the courts located in [City, Country].
            </p>
          </section>

        </CardContent>
      </Card>
    </div>
  );
}