import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
    <div className="py-16 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Choose one of our core service lines
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-16">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden p-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
              {/* Service Image */}
              <div
                className="relative h-64 flex items-center justify-center"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >

              </div>

              <CardContent className="p-6 text-center">
                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-4 relative">
                  {service.title}
                  {/* Underline decoration */}
                  <div className="w-8 h-0.5 bg-slate-800 mx-auto mt-2"></div>
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-2">
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
  );
};

export default CoreServiceLines;