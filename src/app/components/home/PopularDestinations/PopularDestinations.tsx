import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin } from 'lucide-react';
import Image from 'next/image';

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      city: "New York",
      country: "United States",
      image: "/images/PopularDestinations/newyork.jpg",
    },
    {
      id: 2,
      city: "Los Angeles",
      country: "United States",
      image: "/images/PopularDestinations/Married.jpg",
    },
    {
      id: 3,
      city: "Miami",
      country: "United States",
      image: "/images/PopularDestinations/miame.jpg",
    },
    {
      id: 4,
      city: "Las Vegas",
      country: "United States",
      image: "/images/PopularDestinations/LasVegas.jpeg",
    },
    {
      id: 5,
      city: "Chicago",
      country: "United States",
      image: "/images/PopularDestinations/Chicago.jpg",
    },
    {
      id: 6,
      city: "London",
      country: "United Kingdom",
      image: "/images/PopularDestinations/london.jpg",
    },
    {
      id: 7,
      city: "Paris",
      country: "France",
      image: "/images/PopularDestinations/paris.jpg",
    },
    {
      id: 8,
      city: "Dubai",
      country: "United Arab Emirates",
      image: "/images/PopularDestinations/dubai.jpg",
    },
    {
      id: 9,
      city: "Toronto",
      country: "Canada",
      image: "/images/PopularDestinations/Toronto.jpeg",
    },
    {
      id: 10,
      city: "Aspen",
      country: "United States",
      image: "/images/PopularDestinations/Aspen.jpg",
    }
  ];

  return (
    <div className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-0">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              Popular Destinations
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto sm:mx-0">
              Explore our most popular private jet destinations
            </p>
          </div>
          <button className="flex items-center justify-center sm:justify-start space-x-2 text-blue-900 hover:text-blue-700 transition-colors mx-auto sm:mx-0">
            <span className="text-sm font-medium hidden xs:inline">View all Popular Destinations</span>
            <span className="text-sm font-medium xs:hidden">View all</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="relative h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl group"
            >
              {/* Image with Next.js optimization */}
              <div className="absolute inset-0">
                <Image
                  src={destination.image}
                  alt={`${destination.city}, ${destination.country}`}
                  fill
                  sizes="(max-width: 475px) 100vw, (max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9jkHLqDptBKr3k6TqW/9k="
                />
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                <div className="flex items-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white/80" />
                  <span className="text-xs text-white/80 font-medium">
                    {destination.country}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold">{destination.city}</h3>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <Button className="bg-slate-800 hover:bg-slate-700 text-white px-6 sm:px-8 py-2 sm:py-3 mb-6 sm:mb-8 text-sm sm:text-base">
            Explore All Destinations
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

export default PopularDestinations;