import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const premiumServices = [
  {
    id: 1,
    image: "/images/premium_services/image1.png",
    title: "Private Jet Charter",
    desc: "Enjoy on-demand, point-to-point private flights for business or leisure — on your schedule."
  },
  {
    id: 2,
    image: "/images/premium_services/image2.png",
    title: "Empty leg",
    desc: "Save with discounted one-way flights and last-minute empty leg opportunities."
  },
  {
    id: 3,
    image: "/images/premium_services/image3.png",
    title: "Helicopter Transfers",
    desc: "Efficient short-range travel and scenic flights, ideal for time-sensitive itineraries."
  },
]

const PremiumAviationServices = () => {
  return (
    <div className="bg-gray-50 py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          {/* Airplane Icon */}
          <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
            <div className="relative">
              <svg
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
              {/* Decorative lines - Hidden on mobile, shown on tablet and up */}
              <div className="hidden md:block absolute top-1/2 -left-20 lg:-left-32 w-16 lg:w-24 h-px bg-blue-300 transform -translate-y-1/2"></div>
              <div className="hidden md:block absolute top-1/2 -right-20 lg:-right-32 w-16 lg:w-24 h-px bg-blue-300 transform -translate-y-1/2"></div>
            </div>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Premium Services Tailored to You
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mx-auto leading-relaxed">
            Experience private aviation at its finest with our premium services and
            unwavering commitment to excellence.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 mb-12 sm:mb-14 md:mb-16">
          {premiumServices.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden py-0 hover:shadow-lg transition-shadow duration-300 w-full group hover:translate-y-[-5px] transition-transform"
            >
              <div className="w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={240}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumAviationServices;