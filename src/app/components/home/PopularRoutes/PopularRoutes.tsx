import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Plane } from 'lucide-react';
import Image from 'next/image';

const PopularRoutes = () => {
  const routes = [
    {
      id: 1,
      from: "New York",
      to: "Miami",
      fromCode: "KTEB",
      toCode: "KOPF",
      duration: "2h 45m",
      distance: "1,089 nm",
      price: "$12,500",
      aircraft: "Citation XLS+",
      image: "/images/PopularDestinations/newyork.jpg"
    },
    {
      id: 2,
      from: "Los Angeles",
      to: "Las Vegas",
      fromCode: "KVNY",
      toCode: "KLAS",
      duration: "1h 15m",
      distance: "236 nm",
      price: "$8,900",
      aircraft: "Phenom 300",
      image: "/images/PopularDestinations/london.jpg"
    },
    {
      id: 3,
      from: "London",
      to: "Paris",
      fromCode: "EGLF",
      toCode: "LFPB",
      duration: "1h 10m",
      distance: "198 nm",
      price: "€11,200",
      aircraft: "Citation CJ4",
      image: "/images/PopularDestinations/paris.jpg"
    }
  ];

  return (
    <div className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-0">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              Popular Routes
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Discover our most frequently chartered routes
            </p>
          </div>
          <div className="flex justify-center sm:justify-end">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 text-sm sm:text-base"
            >
              View All Routes
            </Button>
          </div>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          {routes.map((route) => (
            <Card key={route.id} className="overflow-hidden p-0 hover:shadow-xl transition-shadow duration-300 group hover:-translate-y-1 transition-transform">
              {/* Route Header Image */}
              <div className="relative h-40 sm:h-44 md:h-48 lg:h-56 text-white">
                <Image
                  src={route.image}
                  alt={`${route.from} to ${route.to} route`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9jkHLqDptBKr3k6TqW/9k="
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>

                {/* Text at Bottom Left */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
                    {route.from} → {route.to}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-90">
                    {route.fromCode} → {route.toCode}
                  </p>
                </div>
              </div>

              <CardContent className="p-0">
                {/* Route Details */}
                <div className="grid grid-cols-3 border-b border-gray-100">
                  <div className="p-3 sm:p-4 text-center border-r border-gray-100">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mx-auto mb-1 sm:mb-2" />
                    <p className="text-xs text-gray-500 mb-1">Duration</p>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{route.duration}</p>
                  </div>
                  <div className="p-3 sm:p-4 text-center border-r border-gray-100">
                    <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mx-auto mb-1 sm:mb-2" />
                    <p className="text-xs text-gray-500 mb-1">Distance</p>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{route.distance}</p>
                  </div>
                  <div className="p-3 sm:p-4 text-center">
                    <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mx-auto mb-1 sm:mb-2" />
                    <p className="text-xs text-gray-500 mb-1">From</p>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{route.price}</p>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="p-3 sm:p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Popular aircraft:</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">{route.aircraft}</p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-slate-800 hover:bg-slate-700 text-white px-4 sm:px-6 text-xs sm:text-sm"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <Button className="bg-slate-800 hover:bg-slate-700 text-white px-6 sm:px-8 py-2 sm:py-3 mb-6 sm:mb-8 text-sm sm:text-base">
            Explore All Routes
          </Button>

          {/* Airplane Icon with decorative lines */}
          <div className="flex justify-center">
            <div className="relative">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
              {/* Decorative lines - Hidden on mobile */}
              <div className="hidden md:block absolute top-1/2 -left-20 lg:-left-24 xl:-left-32 w-16 lg:w-20 xl:w-24 h-px bg-blue-300 transform -translate-y-1/2"></div>
              <div className="hidden md:block absolute top-1/2 -right-20 lg:-right-24 xl:-right-32 w-16 lg:w-20 xl:w-24 h-px bg-blue-300 transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularRoutes;