"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Bed, Briefcase, Car, ChefHat, Clock, Music, Plane, Smartphone, Star, Users, Wifi, Wind } from 'lucide-react';
import Image from 'next/image';
import { ReactNode, useState } from 'react';

const ExclusiveEmptyLegDeals = () => {
  const [activeTab, setActiveTab] = useState('charter');

  const jets = [
    {
      id: 1,
      name: "GULFSTREAM G650",
      manufacturer: "GULFSTREAM",
      year: "2022",
      badge: "2022 Model",
      range: "7,000 nm",
      passengers: "14",
      speed: "Mach 0.925",
      crew: "3",
      price: "$12,500",
      priceUnit: "P/HOUR",
      features: ["Wi-Fi", "Bedroom Suite", "Full Galley", "Entertainment System", "Satellite Phone"],
      image: "/images/Exclusive/image1.png"
    },
    {
      id: 2,
      name: "BOMBARDIER GLOBAL 7500",
      manufacturer: "BOMBARDIER",
      year: "2023",
      badge: "2023 Model",
      range: "7,700 nm",
      passengers: "16",
      speed: "Mach 0.90",
      crew: "4",
      price: "$15,000",
      priceUnit: "P/HOUR",
      features: ["4-Zone Cabin", "Master Suite", "Full Kitchen", "Conference Area", "Advanced Air Purification"],
      image: "/images/Exclusive/image2.png"
    }
  ];

  const getFeatureIcon = (feature: string): ReactNode => {
    const iconMap: Record<string, ReactNode> = {
      "Wi-Fi": <Wifi className="w-3 h-3 sm:w-4 sm:h-4" />,
      "Bedroom Suite": <Bed className="w-3 h-3 sm:w-4 sm:h-4" />,
      "Full Galley": <ChefHat className="w-3 h-3 sm:w-4 sm:h-4" />,
      "Entertainment System": <Music className="w-3 h-3 sm:w-4 sm:h-4" />,
      "Satellite Phone": <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />,
      "4-Zone Cabin": <Car className="w-3 h-3 sm:w-4 sm:h-4" />,
      "Master Suite": <Bed className="w-3 h-3 sm:w-4 sm:h-4" />,
      "Full Kitchen": <ChefHat className="w-3 h-3 sm:w-4 sm:h-4" />,
      "Conference Area": <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />,
      "Advanced Air Purification": <Wind className="w-3 h-3 sm:w-4 sm:h-4" />,
    };

    return iconMap[feature] || <Star className="w-3 h-3 sm:w-4 sm:h-4" />;
  };

  return (
    <>
      <div  className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Exclusive Empty Leg Deals
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Save up to 75% on premium flights with our exclusive one-way deals.
            </p>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('charter')}
                  className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors ${activeTab === 'charter'
                    ? 'text-slate-800 border-b-2 border-slate-800'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  JETS FOR CHARTER
                </button>
                <button
                  onClick={() => setActiveTab('sale')}
                  className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors ${activeTab === 'sale'
                    ? 'text-slate-800 border-b-2 border-slate-800'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  JETS FOR SALE
                </button>
              </div>
            </div>
          </div>

          {/* Jets Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-7 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
            {jets.map((jet) => (
              <Card key={jet.id} className="overflow-hidden hover:shadow-xl p-0 transition-shadow duration-300 bg-white group hover:-translate-y-1 transition-transform">
                {/* Jet Image */}
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 flex items-center justify-center">
                  <Image
                    src={jet.image}
                    alt={`${jet.name} aircraft`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9jkHLqDptBKr3k6TqW/9k="
                  />

                  {/* Model Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="bg-slate-800 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                      {jet.badge}
                    </span>
                  </div>
                </div>

                <CardContent className="p-4 sm:p-5 md:p-6">
                  {/* Jet Name and Details */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {jet.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                    {jet.manufacturer} - {jet.year}
                  </p>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="text-center">
                      <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mx-auto mb-1 sm:mb-2" />
                      <p className="text-xs text-gray-500 mb-1">RANGE</p>
                      <p className="text-sm font-semibold text-gray-900">{jet.range}</p>
                    </div>
                    <div className="text-center">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mx-auto mb-1 sm:mb-2" />
                      <p className="text-xs text-gray-500 mb-1">PASSENGERS</p>
                      <p className="text-sm font-semibold text-gray-900">{jet.passengers}</p>
                    </div>
                    <div className="text-center">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mx-auto mb-1 sm:mb-2" />
                      <p className="text-xs text-gray-500 mb-1">SPEED</p>
                      <p className="text-sm font-semibold text-gray-900">{jet.speed}</p>
                    </div>
                    <div className="text-center">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mx-auto mb-1 sm:mb-2" />
                      <p className="text-xs text-gray-500 mb-1">CREW</p>
                      <p className="text-sm font-semibold text-gray-900">{jet.crew}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4 sm:mb-6">
                    <p className="text-sm font-medium text-gray-900 mb-2 sm:mb-3">FEATURES</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {jet.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded text-xs">
                          {getFeatureIcon(feature)}
                          <span className="hidden xs:inline">{feature}</span>
                          <span className="xs:hidden" title={feature}>
                            {feature.split(' ')[0]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 sm:gap-0">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">FROM</p>
                      <div className="flex items-baseline space-x-1">
                        <span className="text-xl sm:text-2xl font-bold text-gray-900">{jet.price}</span>
                        <span className="text-xs sm:text-sm text-gray-500">{jet.priceUnit}</span>
                      </div>
                    </div>
                    <Button className="bg-slate-800 hover:bg-slate-700 text-white px-4 sm:px-6 py-2 text-sm">
                      Charter Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-2 text-sm sm:text-base"
            >
              VIEW MORE PRIVATE JETS →
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Card */}
      <Card className="bg-[#1B365D] container mx-auto text-white overflow-hidden my-8 sm:my-10 md:my-12">
        <CardContent className="p-5 sm:p-6 md:p-8 lg:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Looking for a specific aircraft?
              </h3>
              <p className="text-blue-100 text-base sm:text-lg">
                Our fleet includes over 4,000 aircraft worldwide. Contact us to find the perfect jet for your needs.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-2 sm:py-3 whitespace-nowrap flex-shrink-0 text-sm sm:text-base"
            >
              Request Custom Quote
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ExclusiveEmptyLegDeals;