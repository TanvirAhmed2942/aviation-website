import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin } from 'lucide-react';

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      city: "New York",
      country: "United States",
      image: "/images/PopularDestinations/newyork.jpg",
      overlay: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)"
    },
    {
      id: 2,
      city: "Los Angeles",
      country: "United States",
      image: "/images/PopularDestinations/Married.jpg",
      overlay: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)"
    },
    {
      id: 3,
      city: "Miami",
      country: "United States",
      image: "/images/PopularDestinations/miame.jpg",
      overlay: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)"
    },
    {
      id: 4,
      city: "Las Vegas",
      country: "United States",
      image: "/images/PopularDestinations/LasVegas.jpeg",
      overlay: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)"
    },
    {
      id: 5,
      city: "Chicago",
      country: "United States",
      image: "/images/PopularDestinations/Chicago.jpg",
      overlay: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)"
    },
    {
      id: 6,
      city: "London",
      country: "United Kingdom",
      image: "/images/PopularDestinations/london.jpg",
      overlay: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)"
    },
    {
      id: 7,
      city: "Paris",
      country: "France",
      image: "/images/PopularDestinations/paris.jpg",
      overlay: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)"
    },
    {
      id: 8,
      city: "Dubai",
      country: "United Arab Emirates",
      image: "/images/PopularDestinations/dubai.jpg",
      overlay: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)"
    },
    {
      id: 9,
      city: "Toronto",
      country: "Canada",
      image: "/images/PopularDestinations/Toronto.jpeg",
      overlay: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)"
    },
    {
      id: 10,
      city: "Aspen",
      country: "United States",
      image: "/images/PopularDestinations/Aspen.jpg",
      overlay: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)"
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h1>
            <p className="text-lg text-gray-600">
              Explore our most popular private jet destinations
            </p>
          </div>
          <button className="flex items-center space-x-2 text-blue-900 hover:text-blue-700 transition-colors">
            <span className="text-sm font-medium">View all Popular Destinations</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* Destinations Grid */}
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 mb-12">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              style={{
                backgroundImage: `url(${destination.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: destination.overlay
                }}
              ></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-4 h-4 text-white/80" />
                  <span className="text-xs text-white/80 font-medium">
                    {destination.country}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{destination.city}</h3>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 mb-8">
            Explore All Destinations
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

export default PopularDestinations;