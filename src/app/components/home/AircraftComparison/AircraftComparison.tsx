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
    <div className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          {/* Airplane Icon */}
          <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
            <div className="relative">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
              {/* Decorative lines - Hidden on mobile */}
              <div className="hidden md:block absolute top-1/2 -left-16 lg:-left-24 w-12 lg:w-16 h-px bg-blue-300 transform -translate-y-1/2"></div>
              <div className="hidden md:block absolute top-1/2 -right-16 lg:-right-24 w-12 lg:w-16 h-px bg-blue-300 transform -translate-y-1/2"></div>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
            Aircraft Comparison
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
            Compare specifications across our fleet to find the perfect aircraft for your journey
          </p>

          {/* Category Header */}
          <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center sm:text-left">
                Very Light Jets
              </h2>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:items-center sm:space-x-4 md:space-x-6 lg:space-x-8 text-xs sm:text-sm text-gray-600 gap-2 sm:gap-0">
                <div className="flex items-center justify-center sm:justify-start space-x-1 sm:space-x-2">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>2 - 4 passengers</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-1 sm:space-x-2">
                  <Triangle className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>700 - 1400 nm</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-1 sm:space-x-2 col-span-2 xs:col-span-1">
                  <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>$2,750 - $3,500/hr</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aircraft Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          {aircraftData.map((aircraft) => (
            <Card key={aircraft.id} className="overflow-hidden py-0 hover:shadow-lg transition-shadow duration-300 bg-white group hover:-translate-y-1 transition-transform">
              {/* Aircraft Image */}
              <div className="h-40 sm:h-44 md:h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <Image
                  src={aircraft.image}
                  width={300}
                  height={200}
                  alt={`${aircraft.name} aircraft`}
                  sizes="(max-width: 475px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                  {aircraft.name}
                </h3>

                {/* Specifications */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Pax</span>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">{aircraft.pax}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Range (nm)</span>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">{aircraft.range}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Speed (KTAS)</span>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">{aircraft.speed}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Cabin height (ft)</span>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">{aircraft.cabinHeight}</span>
                  </div>
                </div>

                {/* See Details Button */}
                <Button
                  variant="outline"
                  className="w-full border-gray-300 cursor-pointer text-gray-700 hover:bg-gray-50 text-xs sm:text-sm py-2 h-auto"
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
          <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
          </div>

          <Button className="bg-slate-800 hover:bg-slate-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base">
            View All Aircraft Categories
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AircraftComparison;