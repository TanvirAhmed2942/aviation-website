"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, DollarSign, Plane } from "lucide-react";
import { useRouter } from "next/navigation";

// Data declarations
const heroFeatures = [
  {
    id: 1,
    title: "Deposit Funds",
    description: "Minimum deposit of $25,000.",
    buttonText: "Apply Now",
    buttonVariant: "default" as const,
    buttonClass: "bg-white text-slate-900 hover:bg-gray-100",
    paymentMethods: "Zelle, ACH, Wire, Check",
  },
  {
    id: 2,
    title: "Book Instantly",
    description: "Use your balance to book any flight.",
    buttonText: "Add Funds",
    buttonVariant: "outline" as const,
    buttonClass:
      "border-slate-600 text-slate-900 hover:bg-gray-100 cursor-pointer",
  },
  {
    id: 3,
    title: "Fly Anytime",
    description: "No blackout dates, no restrictions.",
    buttonText: "Check Balance",
    icon: <DollarSign className="w-4 h-4 text-slate-900" />,
    buttonVariant: "outline" as const,
    buttonClass:
      "border-slate-600 text-slate-900 hover:bg-gray-100 cursor-pointer",
    href: "/golden-jet-card/check-balance",
  },
];

const benefits = [
  {
    id: 1,
    title: "Easy Booking:",
    description: "Use your balance for any flight, any time.",
  },
  {
    id: 2,
    title: "Clear Pricing:",
    description: "Only pay for the flights you take.",
  },
  {
    id: 3,
    title: "Flexible Use:",
    description: "Your balance never expires.",
  },
  {
    id: 4,
    title: "Global Access:",
    description: "Fly to thousands of destinations.",
  },
  {
    id: 5,
    title: "Dedicated Support:",
    description: "Our team helps you with bookings and travel details.",
  },
];

const getStartedItems = [
  {
    id: 1,
    text: "Minimum Deposit: $50,000",
  },
  {
    id: 2,
    title: "Payment Options:",
    description:
      "Wire Transfer, Check, or Credit Card (Credit Card payments incur a processing fee).",
  },
  {
    id: 3,
    title: "No Hidden Fees:",
    description: "Only pay for the flights you book.",
  },
  {
    id: 4,
    title: "No Expiration:",
    description: "Use your balance at your own pace.",
  },
];

function GoldenJetCard() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Dark Blue Background */}
      <div className="primary text-white py-8 md:py-12 lg:py-16 px-4 sm:px-6 rounded-md">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl">
              <div className="mb-8 lg:mb-12 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">Golden Jet Card</h1>
                <p className="text-slate-300 text-base sm:text-lg">
                  Simple, Flexible Private Jet Travel
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8">
                {heroFeatures.map((feature) => (
                  <div key={feature.id} className="text-center md:text-left">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base">{feature.description}</p>
                    <div className="space-y-3">
                      <Button
                        variant={feature.buttonVariant}
                        className={`${feature.buttonClass} text-sm px-4 sm:px-6 py-2 sm:py-3 h-auto font-medium w-full md:w-auto`}
                        onClick={() => {
                          if (feature.href) {
                            router.push(feature.href);
                          }
                        }}
                      >
                        {feature.icon}
                        {feature.buttonText}
                      </Button>
                      {feature.paymentMethods && (
                        <p className="text-slate-400 text-xs">
                          {feature.paymentMethods}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Golden Card */}
            <div className="flex-shrink-0 mt-8 lg:mt-0">
              <Card className="w-64 sm:w-72 md:w-80 h-40 sm:h-44 md:h-48 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 border-0 shadow-2xl relative overflow-hidden transform rotate-3">
                <CardContent className="p-0 h-full relative">
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-white transform rotate-45" />
                  </div>

                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                    <div className="text-xl sm:text-2xl font-bold tracking-wide">
                      GOLDEN
                    </div>
                    <div className="text-lg sm:text-xl font-bold tracking-wide">
                      JET CARD
                    </div>
                    <div className="text-xs mt-2 sm:mt-3 opacity-90 uppercase tracking-wider">
                      Simple Flexible Private Jet Travel
                    </div>
                    <div className="text-xs mt-4 sm:mt-6 opacity-75 uppercase tracking-wider">
                      Cardholder Name
                    </div>
                  </div>
                  {/* Card design elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-white opacity-20 rounded-full -mr-10 sm:-mr-12 -mt-10 sm:-mt-12"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-white opacity-10 rounded-full -ml-6 sm:-ml-8 -mb-6 sm:-mb-8"></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center lg:text-left">
            Benefits of the Golden Jet Card
          </h2>

          <div className="space-y-0">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className={`flex items-center gap-4 py-4 ${index < benefits.length - 1 ? "border-b border-gray-200" : ""
                  }`}
              >
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900 text-base sm:text-lg">
                    {benefit.title}{" "}
                  </span>
                  <span className="text-gray-700 text-base sm:text-lg">
                    {benefit.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get Started Section */}
      <div className="py-12 md:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center lg:text-left">
            Get Started
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {getStartedItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                <div>
                  {item.text ? (
                    <span className="font-semibold text-gray-900 text-base sm:text-lg">
                      {item.text}
                    </span>
                  ) : (
                    <>
                      <span className="font-semibold text-gray-900 text-base sm:text-lg">
                        {item.title}{" "}
                      </span>
                      <span className="text-gray-700 text-base sm:text-lg">
                        {item.description}
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ready to Fly CTA Section */}
      <div className="primary text-white py-12 md:py-16 px-4 sm:px-6 rounded-md">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Fly?</h2>
          <p className="text-slate-300 mb-2 text-base sm:text-lg">
            Apply Today: Contact Us to speak with a representative and learn
            more. Fund Your Account Now.
          </p>
          <p className="text-slate-300 mb-6 sm:mb-8 text-base sm:text-lg">
            Choose your payment method and start with $25,000 or more.
          </p>
          <Button className="bg-white text-slate-900 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium">
            Apply Now
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 text-gray-500 py-4 sm:py-6 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2 sm:gap-0">
          <div>© 2025 NEXFLIGHT. All rights reserved.</div>
          <div>Version 1.0.0</div>
        </div>
      </div>
    </div>
  );
}

export default GoldenJetCard;