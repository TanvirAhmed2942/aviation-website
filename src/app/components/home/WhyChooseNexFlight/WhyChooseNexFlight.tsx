import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shield, Globe } from 'lucide-react';

const WhyChooseNexFlight = () => {
  const features = [
    {
      id: 1,
      icon: <Clock className="w-12 h-12 text-slate-700" />,
      title: "24/7 SUPPORT",
      description: "Round-the-clock dedicated service for all your travel needs, anytime, anywhere."
    },
    {
      id: 2,
      icon: <Shield className="w-12 h-12 text-slate-700" />,
      title: "TRUSTED SINCE 1998",
      description: "Over two decades of experience providing reliable and exceptional private aviation services."
    },
    {
      id: 3,
      icon: <Globe className="w-12 h-12 text-slate-700" />,
      title: "GLOBAL NETWORK",
      description: "Access to thousands of aircraft worldwide, ensuring the perfect jet for every journey."
    }
  ];

  return (
    <div className="py-10 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Why Choose NexFlight
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience private aviation at its finest with our premium services and 
            unwavering commitment to excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-8 mb-16">
          {features.map((feature) => (
            <Card 
              key={feature.id} 
              className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-slate-800 mb-4 tracking-wide">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center">
          <div className="relative">
            <svg 
              className="w-8 h-8 text-blue-400" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
            {/* Decorative lines */}
            <div className="absolute top-1/2 -left-32 w-24 h-px bg-blue-300 transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 -right-32 w-24 h-px bg-blue-300 transform -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseNexFlight;