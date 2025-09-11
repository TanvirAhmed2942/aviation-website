"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Bed, Briefcase, Car, ChefHat, Clock, Music, Plane, Smartphone, Star, Users, Wifi, Wind } from 'lucide-react';
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
      "Wi-Fi": <Wifi className="w-4 h-4" />,
      "Bedroom Suite": <Bed className="w-4 h-4" />,
      "Full Galley": <ChefHat className="w-4 h-4" />,
      "Entertainment System": <Music className="w-4 h-4" />,
      "Satellite Phone": <Smartphone className="w-4 h-4" />,
      "4-Zone Cabin": <Car className="w-4 h-4" />,
      "Master Suite": <Bed className="w-4 h-4" />,
      "Full Kitchen": <ChefHat className="w-4 h-4" />,
      "Conference Area": <Briefcase className="w-4 h-4" />,
      "Advanced Air Purification": <Wind className="w-4 h-4" />,
    };

    return iconMap[feature] || <Star className="w-4 h-4" />;
  };

  return (
    <>
    <div className="py-16 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Exclusive Empty Leg Deals</h1>
          <p className="text-lg text-gray-600 mb-8">
            Save up to 75% on premium flights with our exclusive one-way deals.
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('charter')}
                className={`px-8 py-3 text-sm font-medium transition-colors ${activeTab === 'charter'
                  ? 'text-slate-800 border-b-2 border-slate-800'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                JETS FOR CHARTER
              </button>
              <button
                onClick={() => setActiveTab('sale')}
                className={`px-8 py-3 text-sm font-medium transition-colors ${activeTab === 'sale'
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
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {jets.map((jet) => (
            <Card key={jet.id} className="overflow-hidden hover:shadow-xl p-0 transition-shadow duration-300 bg-white">
              {/* Jet Image */}
              <div
                className="relative h-96 flex items-center justify-center"
                style={{
                  backgroundImage: `url(${jet.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Model Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-slate-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {jet.badge}
                  </span>
                </div>

                {/* Airplane Silhouette */}

              </div>

              <CardContent className="p-6">
                {/* Jet Name and Details */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{jet.name}</h3>
                <p className="text-sm text-gray-500 mb-6">
                  {jet.manufacturer} - {jet.year}
                </p>

                {/* Specifications Grid */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <Plane className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-500 mb-1">RANGE</p>
                    <p className="text-sm font-semibold text-gray-900">{jet.range}</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-500 mb-1">PASSENGERS</p>
                    <p className="text-sm font-semibold text-gray-900">{jet.passengers}</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-500 mb-1">SPEED</p>
                    <p className="text-sm font-semibold text-gray-900">{jet.speed}</p>
                  </div>
                  <div className="text-center">
                    <Star className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-500 mb-1">CREW</p>
                    <p className="text-sm font-semibold text-gray-900">{jet.crew}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-900 mb-3">FEATURES</p>
                  <div className="flex flex-wrap gap-2">
                    {jet.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded text-xs">
                        {getFeatureIcon(feature)}
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">FROM</p>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-2xl font-bold text-gray-900">{jet.price}</span>
                      <span className="text-sm text-gray-500">{jet.priceUnit}</span>
                    </div>
                  </div>
                  <Button className="bg-slate-800 hover:bg-slate-700 text-white px-6">
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
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8"
          >
            VIEW MORE PRIVATE JETS →
          </Button>
        </div>
      </div>
    </div>
     <Card className="bg-[#1B365D] container mx-auto text-white overflow-hidden">
          <CardContent className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Looking for a specific aircraft?
                </h3>
                <p className="text-blue-100 text-lg">
                 Our fleet includes over 4,000 aircraft worldwide. Contact us to find the perfect jet for your needs.
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 whitespace-nowrap flex-shrink-0"
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