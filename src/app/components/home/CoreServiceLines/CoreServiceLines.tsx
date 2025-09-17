import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const CoreServiceLines = () => {
  const services = [
    {
      id: 1,
      title: "Business Jet Charter",
      description: "Private jet charter services for business and leisure travel with a wide range of aircraft options.",
      image: "/images/Home/CoreServiceLines/image1.jpg",
      imageAlt: "Business jet on tarmac with golden sunset"
    },
    {
      id: 2,
      title: "Helicopter Flights",
      description: "Helicopter charter services for short-distance travel, sightseeing, and special events.",
      image: "/images/Home/CoreServiceLines/image2.jpg",
      imageAlt: "Modern helicopter on helipad"
    },
    {
      id: 3,
      title: "Group Charter Flights",
      description: "Customized group travel solutions for corporate events, sports teams, and special occasions.",
      image: "/images/Home/CoreServiceLines/image3.jpg",
      imageAlt: "Group of people taking selfie by private jet"
    },
    {
      id: 4,
      title: "Concierge Services",
      description: "Premium concierge services including ground transportation, accommodation, and exclusive experiences.",
      image: "/images/Home/CoreServiceLines/image4.jpg",
      imageAlt: "Professional concierge service representative"
    }
  ];

  return (
    <div className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-3 sm:mb-4">
            Choose one of our core service lines
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden p-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white group">
              {/* Service Image */}
              <div className="relative h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 flex items-center justify-center overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 475px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9jkHLqDptBKr3k6TqW/9k="
                />
              </div>

              <CardContent className="p-4 sm:p-5 text-center">
                {/* Service Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4 relative">
                  {service.title}
                  {/* Underline decoration */}
                  <div className="w-6 sm:w-8 h-0.5 bg-slate-800 mx-auto mt-2 sm:mt-3"></div>
                </h3>

                {/* Service Description */}
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <Button className="bg-slate-800 hover:bg-slate-700 text-white px-4 sm:px-6 py-2 text-sm sm:text-base w-full sm:w-auto">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Decorative Element */}
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
  );
};

export default CoreServiceLines;