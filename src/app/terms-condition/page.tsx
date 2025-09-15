"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";


export default function TermsPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto border border-gray-200 shadow-sm">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-3xl font-bold text-gray-900">Terms and Conditions</CardTitle>
          <CardDescription className="text-sm text-gray-500">
            Last updated: April 5, 2025
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8 text-sm text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">Introduction</h2>
            <p>
              These Terms and Conditions govern your use of [Your Company Name]’s website and services. 
              By accessing or using our services, you agree to comply with and be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">Intellectual Property Rights</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the property 
              of [Your Company Name] and protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">User Responsibilities</h2>
            <p>
              You agree not to misuse the service by introducing viruses, malicious code, or attempting 
              unauthorized access. Violation may result in termination of your access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">Limitation of Liability</h2>
            <p>
              [Your Company Name] shall not be liable for any indirect, incidental, or consequential damages 
              arising from your use of the service, even if advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be posted here, and 
              your continued use of the service constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of [Your Jurisdiction], without regard to its 
              conflict of law principles. Any disputes shall be resolved in the courts located in [City, Country].
            </p>
          </section>

        </CardContent>
      </Card>
    </div>
  );
}