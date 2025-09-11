import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, Triangle, Users } from 'lucide-react';
import Image from 'next/image';

const AircraftComparison = () => {
  const aircraftData = [
    {
      id: 1,
      name: "Citation Mustang",
      image: "/images/Aircraft_Comparison/image1.png",
      pax: 4,
      range: 1150,
      speed: 340,
      cabinHeight: 4.48
    },
    {
      id: 2,
      name: "Eclipse 500",
      image: "/images/Aircraft_Comparison/image2.png",
      pax: 5,
      range: 1125,
      speed: 370,
      cabinHeight: 4.18
    },
    {
      id: 3,
      name: "Eclipse 550",
      image: "/images/Aircraft_Comparison/image3.png",
      pax: 5,
      range: 1125,
      speed: 375,
      cabinHeight: 4.18
    },
    {
      id: 4,
      name: "HondaJet",
      image: "/images/Aircraft_Comparison/image4.png",
      pax: 6,
      range: 1180,
      speed: 420,
      cabinHeight: 4.78
    },
    {
      id: 5,
      name: "HondaJet Elite",
      image: "/images/Aircraft_Comparison/image5.png",
      pax: 6,
      range: 1223,
      speed: 422,
      cabinHeight: 4.82
    },
    {
      id: 6,
      name: "Phenom 100",
      image: "/images/Aircraft_Comparison/image6.png",
      pax: 5,
      range: 1320,
      speed: 390,
      cabinHeight: 4.92
    },
    {
      id: 7,
      name: "Phenom 100E",
      image: "/images/Aircraft_Comparison/image4.png",
      pax: 5,
      range: 1265,
      speed: 359,
      cabinHeight: 4.92
    },
    {
      id: 8,
      name: "Vision Jet",
      image: "/images/Aircraft_Comparison/image8.png",
      pax: 5,
      range: 1200,
      speed: 311,
      cabinHeight: 4.08
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          {/* Airplane Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <svg
                className="w-12 h-12 text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
              {/* Decorative lines */}
              <div className="absolute top-1/2 -left-24 w-16 h-px bg-blue-300 transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 -right-24 w-16 h-px bg-blue-300 transform -translate-y-1/2"></div>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">Aircraft Comparison</h1>
          <p className="text-lg text-gray-600 mb-8">
            Compare specifications across our fleet to find the perfect aircraft for your journey
          </p>

          {/* Category Header */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-900">Very Light Jets</h2>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>2 - 4 passengers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Triangle className="w-4 h-4" />
                  <span>700 - 1400 nautical miles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4" />
                  <span>$2,750 - $3,500 per hour</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aircraft Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-12">
          {aircraftData.map((aircraft) => (
            <Card key={aircraft.id} className="overflow-hidden py-0 hover:shadow-lg transition-shadow duration-300 bg-white">
              {/* Aircraft Image */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
               <Image src={aircraft.image} width={0} height={0} alt='aircraft image' sizes="100vw"
                  className="w-full h-60 object-cover"/>
              </div>

              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{aircraft.name}</h3>

                {/* Specifications */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Pax</span>
                    <span className="font-semibold text-gray-900">{aircraft.pax}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Range (nm)</span>
                    <span className="font-semibold text-gray-900">{aircraft.range}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Speed (KTAS)</span>
                    <span className="font-semibold text-gray-900">{aircraft.speed}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Cabin height (ft)</span>
                    <span className="font-semibold text-gray-900">{aircraft.cabinHeight}</span>
                  </div>
                </div>

                {/* See Details Button */}
                <Button
                  variant="outline"
                  className="w-full border-gray-300 cursor-pointer text-gray-700 hover:bg-gray-50"
                >
                  SEE DETAILS
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          {/* Airplane Icon */}
          <div className="flex justify-center mb-6">
            <svg
              className="w-8 h-8 text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
          </div>

          <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3">
            View All Aircraft Categories
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AircraftComparison;