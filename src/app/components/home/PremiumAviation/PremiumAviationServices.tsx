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
    id: 1,
    image: "/images/premium_services/image2.png",
    title: "Empty leg",
    desc: "Save with discounted one-way flights and last-minute empty leg opportunities."
  },
  {
    id: 1,
    image: "/images/premium_services/image3.png",
    title: "Helicopter Transfers",
    desc: "Efficient short-range travel and scenic flights, ideal for time-sensitive itineraries."
  },
]

const PremiumAviationServices = () => {
  return (
    <div className=" bg-gray-50 py-5 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Airplane Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <svg
                className="w-16 h-16 text-blue-600"
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

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Premium Services Tailored to You
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience private aviation at its finest with our premium services and
            unwavering commitment to excellence.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {premiumServices.map((items, index) => (
            <Card
              key={index}
              className="overflow-hidden py-0 hover:shadow-lg transition-shadow duration-300 w-full"
            >
              <div className="w-full">
                <Image
                  src={items.image}
                  alt=""
                  width={0} // remove fixed width
                  height={0} // remove fixed height
                  sizes="100vw"
                  className="w-full h-60 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {items.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{items.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </div>
  );
};

export default PremiumAviationServices;