import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Plane } from 'lucide-react';

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
    <div className="py-16 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Popular Routes</h1>
            <p className="text-lg text-gray-600">
              Discover our most frequently chartered routes
            </p>
          </div>
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            View All Routes
          </Button>
        </div>

        {/* Routes Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-12">
          {routes.map((route) => (
            <Card key={route.id} className="overflow-hidden p-0 hover:shadow-xl transition-shadow duration-300">
              {/* Route Header Image */}
              <div
                className="relative left-0 h-56 text-white"
                style={{
                  backgroundImage: `url(${route.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>

                {/* Text at Bottom Left */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold mb-2">
                    {route.from} → {route.to}
                  </h3>
                  <p className="text-sm opacity-90">
                    {route.fromCode} → {route.toCode}
                  </p>
                </div>
              </div>


              <CardContent className="p-0">
                {/* Route Details */}
                <div className="grid grid-cols-3 border-b border-gray-100">
                  <div className="p-4 text-center border-r border-gray-100">
                    <Clock className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-500 mb-1">Duration</p>
                    <p className="font-semibold text-gray-900">{route.duration}</p>
                  </div>
                  <div className="p-4 text-center border-r border-gray-100">
                    <Plane className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-500 mb-1">Distance</p>
                    <p className="font-semibold text-gray-900">{route.distance}</p>
                  </div>
                  <div className="p-4 text-center">
                    <DollarSign className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-500 mb-1">From</p>
                    <p className="font-semibold text-gray-900">{route.price}</p>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Popular aircraft:</p>
                    <p className="text-sm font-medium text-gray-900">{route.aircraft}</p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-slate-800 hover:bg-slate-700 text-white px-6"
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
          <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 mb-8">
            Explore All Routes
          </Button>

          {/* Airplane Icon with decorative lines */}
          <div className="flex justify-center">
            <div className="relative">
              <svg
                className="w-8 h-8 text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
              {/* Decorative lines */}
              <div className="absolute top-1/2 -left-32 w-24 h-px bg-blue-300 transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 -right-32 w-24 h-px bg-blue-300 transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularRoutes;