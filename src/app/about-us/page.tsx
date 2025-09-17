import { ArrowRight } from "lucide-react";
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";

const PrivateJetServices = () => {
  const stats = [
    { number: "25+", label: "Years of Experience" },
    { number: "500+", label: "Private Aircraft" },
    { number: "50k+", label: "Flights Completed" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  const services = [
    {
      id: 1,
      title: "Private Jet Charter",
      description:
        "From the moment you step on board to our final farewell, Skye ensures an unforgettable experience, complete with the convenience of working during your flight. We are dedicated to making your journey memorable and enjoyable.",
      image: "/images/about/image1.png",
      imagePosition: "left",
    },
    {
      id: 2,
      title: "Of course, high speed wifi connectivity",
      description:
        "To guarantee uninterrupted work, videoconferences, market updates, online shopping, live TV, or streaming your favorite shows and movies, most of our aircraft are equipped with.",
      image: "/images/about/image2.png",
      imagePosition: "right",
    },
    {
      id: 3,
      title: "Fly in style with your furry friend",
      description:
        "Skye makes it easy for you to fly with your furry friend in the cabin. We handle all the details, ensuring your pet travels comfortably regardless of your destination.",
      image: "/images/about/image3.png",
      imagePosition: "left",
    },
    {
      id: 4,
      title: "Gourmet Delights to Savor",
      description:
        "Indulge in exquisite culinary treats throughout your flight, from delicate desserts to your favorite full-course meals, all prepared and served with style.",
      image: "/images/about/image4.png",
      imagePosition: "right",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="relative">
        <section
          className="relative z-50 h-[300px] sm:h-[400px] md:h-[700px] text-white flex items-end sm:pb-28 pb-10 justify-center 
             bg-gradient-to-r from-blue-600 to-indigo-800 
             bg-cover"
          style={{ backgroundImage: "url('/images/about/hero2.jpg')" }}
        >
          <div className="relative z-10 text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">About NEXFLIGHT</h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              We&apos;re revolutionizing private aviation by making luxury air travel more accessible, efficient, and sustainable.
            </p>

          </div>

          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </section>
      </div>

      {/* Stats Section */}
      <div className="pt-5 px-4 sm:px-6">
        <div className="container mx-auto py-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center border border-gray-200 py-4 sm:py-5 shadow-lg rounded-lg"
              >
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-16">
        <div className="space-y-12 md:space-y-16">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex flex-col ${service.imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-6 md:gap-8 lg:gap-12`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={100}

                    className="w-full h-auto object-cover rounded-lg shadow-sm"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3 md:space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-tight">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

          <section className="bg-[#1B365D] text-white py-12 md:py-16 px-4 sm:px-6 rounded-lg">
            <div className="container mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Our Mission</h1>
              <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-3xl mx-auto">
                To transform private aviation by combining cutting-edge
                technology with exceptional service, making luxury air travel
                more accessible while maintaining the highest standards of
                safety and comfort.
              </p>
              <Button
                variant="outline"
                className="bg-transparent cursor-pointer border-white text-white hover:bg-white hover:text-slate-800 text-sm md:text-base"
              >
                Learn More About Our Services
              </Button>
            </div>
          </section>
        </div>

        <section className="py-8 md:py-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Safety First */}
              <div className="text-start px-4 sm:px-6 border border-gray-200 shadow py-4 md:py-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-slate-800">
                  Safety First
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  We maintain the highest safety standards in the industry, with
                  rigorous protocols and continuous monitoring.
                </p>
              </div>

              {/* Innovation */}
              <div className="text-start px-4 sm:px-6 border border-gray-200 shadow py-4 md:py-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-slate-800">
                  Innovation
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  We leverage cutting-edge technology to enhance every aspect of
                  private air travel.
                </p>
              </div>

              {/* Sustainability */}
              <div className="text-start px-4 sm:px-6 border border-gray-200 shadow py-4 md:py-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-slate-800">
                  Sustainability
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  We&apos;re committed to reducing our environmental impact
                  through sustainable practices and green initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-0">
          {/* Company Section */}
          <div className="bg-slate-800 text-white py-12 md:py-16 px-4 sm:px-6 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Our Company</h2>
              <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-3xl mx-auto">
                NexFlight is your trusted private jet brokerage, offering
                seamless access to luxury charters worldwide. Whether for
                business or leisure, we provide personalized solutions to
                elevate your travel experience.
              </p>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-slate-800 text-sm md:text-base"
              >
                View our E-brochure
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 sm:px-6 bg-gray-50">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 md:mb-12 gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Latest News</h2>
              <div className="flex items-center text-slate-600 hover:text-slate-800 cursor-pointer transition-colors">
                <span className="mr-2 text-sm md:text-base">View All Posts</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Article 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-[400px] flex flex-col">
                <div className="flex-shrink-0">
                  <Image src={"/images/blog/image1.jpg"} height={200} className='w-full h-48 sm:h-52 object-cover' width={1000} alt='' />
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <div className="text-xs sm:text-sm text-gray-500 mb-2">
                    March 15, 2025 • Industry Trends
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-3 flex-grow">
                    The Future of Private Aviation
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base flex-grow">
                    Discover how technology is shaping the future of private
                    flights.
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xs sm:text-sm text-gray-500">
                      By Alex Johnson
                    </span>
                    <span className="text-blue-600 cursor-pointer hover:text-blue-800 text-sm md:text-base">
                      Read More
                    </span>
                  </div>
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-[400px] flex flex-col">
                <div className="flex-shrink-0">
                  <Image src={"/images/blog/image2.jpg"} height={200} className='w-full h-48 sm:h-52 object-cover' width={1000} alt='' />
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <div className="text-xs sm:text-sm text-gray-500 mb-2">
                    March 10, 2025 • Travel
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-3 flex-grow">
                    Top 5 Private Jet Destinations for
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base flex-grow">
                    Explore the most luxurious and exclusive destinations.
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xs sm:text-sm text-gray-500">
                      By Sarah Williams
                    </span>
                    <span className="text-blue-600 cursor-pointer hover:text-blue-800 text-sm md:text-base">
                      Read More
                    </span>
                  </div>
                </div>
              </div>

              {/* Article 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-[400px] flex flex-col">
                <div className="flex-shrink-0">
                  <Image src={"/images/blog/image3.jpg"} height={200} className='w-full h-48 sm:h-52 object-cover' width={1000} alt='' />
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <div className="text-xs sm:text-sm text-gray-500 mb-2">
                    March 5, 2025 • Sustainability
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-3 flex-grow">
                    Sustainable Aviation: The Green
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base flex-grow">
                    How private aviation is embracing sustainability.
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xs sm:text-sm text-gray-500">
                      By Michael Brown
                    </span>
                    <span className="text-blue-600 cursor-pointer hover:text-blue-800 text-sm md:text-base">
                      Read More
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 sm:px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 md:mb-12">
              Frequently Asked Questions
            </h2>

            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="w-full"
            >
              <AccordionItem value="item-0">
                <AccordionTrigger className="text-left cursor-pointer font-medium text-slate-800 text-sm md:text-base">
                  What types of aircraft are available?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm md:text-base">
                  We offer a diverse fleet ranging from light jets to
                  ultra-long-range aircraft. Our options include popular models
                  like the Gulfstream G650, Bombardier Global 6000, and Cessna
                  Citation series.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-medium text-slate-800 text-sm md:text-base">
                  How far in advance should I book?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm md:text-base">
                  While we can accommodate last-minute requests, we recommend
                  booking at least 24-48 hours in advance for the best aircraft
                  availability and pricing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium text-slate-800 text-sm md:text-base">
                  What&apos;s included in the charter price?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm md:text-base">
                  Our charter price includes the aircraft, crew, fuel,
                  insurance, and standard catering. Additional costs may apply
                  for specific requests, ground transportation, or extended
                  stays.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium text-slate-800 text-sm md:text-base">
                  Do you offer empty leg flights?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm md:text-base">
                  Yes, we regularly offer empty leg flights at discounted rates.
                  These flights occur when an aircraft needs to reposition for
                  another charter, providing significant savings for flexible
                  travelers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-medium text-slate-800 text-sm md:text-base">
                  What safety standards do you maintain?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm md:text-base">
                  We adhere to the highest safety standards, including regular
                  aircraft inspections, certified crew training, and compliance
                  with all aviation regulations. All our partner operators are
                  vetted and certified.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-medium text-slate-800 text-sm md:text-base">
                  What&apos;s included in the charter price?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm md:text-base">
                  The charter price includes aircraft rental, professional crew,
                  fuel costs, insurance coverage, and complimentary
                  refreshments. Additional services like ground transportation
                  or special catering may incur extra charges.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left font-medium text-slate-800 text-sm md:text-base">
                  Do you offer empty leg flights?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm md:text-base">
                  Absolutely! Empty leg flights offer substantial savings when
                  aircraft need to reposition. We maintain an active database of
                  available empty legs and notify registered clients of
                  opportunities that match their travel preferences.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivateJetServices;