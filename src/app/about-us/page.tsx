import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import Navber from "../components/home/Hero/Navber";

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
      <section
        className="relative bg-gradient-to-r z-50 from-blue-600 to-indigo-800 text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about/hero.jpg')" }}
      >
        <Navber />
        <div className="absolute inset-0 bg-indigo-950/20"></div>
        <div className="flex flex-col items-center justify-center pb-32 gap-6 h-[700px] ">
          <h1 className="text-5xl">About NEXFLIGHT</h1>
          <p className="text-xl">
            We&apos;re revolutionizing private aviation by making luxury air
            travel more accessible, efficient, and sustainable.
          </p>
        </div>
      </section>
      {/* Stats Section */}
      <div className="border-t border-gray-200 pt-10">
        <div className="container mx-auto py-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center border border-gray-200 py-5 shadow-lg rounded-lg"
              >
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="space-y-16">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                service.imagePosition === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="flex-1">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-cover rounded-lg shadow-sm"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 leading-tight">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

          <section className="bg-[#1B365D] text-white py-16 px-4 rounded-lg">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold mb-8">Our Mission</h1>
              <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                To transform private aviation by combining cutting-edge
                technology with exceptional service, making luxury air travel
                more accessible while maintaining the highest standards of
                safety and comfort.
              </p>
              <Button
                variant="outline"
                className="bg-transparent cursor-pointer border-white text-white hover:bg-white hover:text-slate-800"
              >
                Learn More About Our Services
              </Button>
            </div>
          </section>
        </div>

        <section className="py-10">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Safety First */}
              <div className="text-start px-6 border border-gray-200 shadow py-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">
                  Safety First
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We maintain the highest safety standards in the industry, with
                  rigorous protocols and continuous monitoring.
                </p>
              </div>

              {/* Innovation */}
              <div className="text-start px-6 border border-gray-200 shadow py-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">
                  Innovation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We leverage cutting-edge technology to enhance every aspect of
                  private air travel.
                </p>
              </div>

              {/* Sustainability */}
              <div className="text-start px-6 border border-gray-200 shadow py-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">
                  Sustainability
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We&apos;re committed to reducing our environmental impact
                  through sustainable practices and green initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-0">
          {/* Main Aircraft Image */}

          {/* Company Section */}
          <div className="bg-slate-800 text-white py-16 px-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-4xl font-bold mb-8">Our Company</h2>
              <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                NexFlight is your trusted private jet brokerage, offering
                seamless access to luxury charters worldwide. Whether for
                business or leisure, we provide personalized solutions to
                elevate your travel experience.
              </p>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-slate-800"
              >
                View our E-brochure
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800">Latest News</h2>
              <div className="flex items-center text-slate-600 hover:text-slate-800 cursor-pointer transition-colors">
                <span className="mr-2">View All Posts</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Article 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-b from-gray-200 to-gray-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      width="120"
                      height="40"
                      viewBox="0 0 120 40"
                      className="opacity-60"
                    >
                      <ellipse cx="60" cy="20" rx="50" ry="8" fill="#64748b" />
                      <ellipse cx="40" cy="20" rx="20" ry="3" fill="#64748b" />
                      <circle cx="25" cy="18" r="1" fill="#94a3b8" />
                      <circle cx="35" cy="18" r="1" fill="#94a3b8" />
                      <circle cx="45" cy="18" r="1" fill="#94a3b8" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    March 15, 2025 • Industry Trends
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    The Future of Private Aviation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Discover how technology is shaping the future of private
                    flights.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      By Alex Johnson
                    </span>
                    <span className="text-blue-600 cursor-pointer hover:text-blue-800">
                      Read More
                    </span>
                  </div>
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-200 via-teal-200 to-green-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      width="100"
                      height="30"
                      viewBox="0 0 100 30"
                      className="opacity-70"
                    >
                      <ellipse cx="50" cy="15" rx="40" ry="6" fill="#0891b2" />
                      <ellipse cx="35" cy="15" rx="15" ry="2" fill="#0891b2" />
                      <path
                        d="M 75 15 L 85 10 L 87 12 L 85 15 L 87 18 L 85 20 Z"
                        fill="#0891b2"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    March 10, 2025 • Travel
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    Top 5 Private Jet Destinations for
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Explore the most luxurious and exclusive destinations.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      By Sarah Williams
                    </span>
                    <span className="text-blue-600 cursor-pointer hover:text-blue-800">
                      Read More
                    </span>
                  </div>
                </div>
              </div>

              {/* Article 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      width="140"
                      height="50"
                      viewBox="0 0 140 50"
                      className="opacity-70"
                    >
                      <ellipse cx="70" cy="25" rx="60" ry="10" fill="#475569" />
                      <ellipse cx="50" cy="25" rx="25" ry="4" fill="#475569" />
                      <circle cx="30" cy="22" r="1.5" fill="#64748b" />
                      <circle cx="42" cy="22" r="1.5" fill="#64748b" />
                      <circle cx="54" cy="22" r="1.5" fill="#64748b" />
                      <circle cx="66" cy="22" r="1.5" fill="#64748b" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    March 5, 2025 • Sustainability
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    Sustainable Aviation: The Green
                  </h3>
                  <p className="text-gray-600 mb-4">
                    How private aviation is embracing sustainability.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      By Michael Brown
                    </span>
                    <span className="text-blue-600 cursor-pointer hover:text-blue-800">
                      Read More
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-12">
              Frequently Asked Questions
            </h2>

            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="w-full"
            >
              <AccordionItem value="item-0">
                <AccordionTrigger className="text-left font-medium text-slate-800">
                  What types of aircraft are available?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We offer a diverse fleet ranging from light jets to
                  ultra-long-range aircraft. Our options include popular models
                  like the Gulfstream G650, Bombardier Global 6000, and Cessna
                  Citation series.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-medium text-slate-800">
                  How far in advance should I book?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  While we can accommodate last-minute requests, we recommend
                  booking at least 24-48 hours in advance for the best aircraft
                  availability and pricing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium text-slate-800">
                  What&apos;s included in the charter price?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Our charter price includes the aircraft, crew, fuel,
                  insurance, and standard catering. Additional costs may apply
                  for specific requests, ground transportation, or extended
                  stays.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium text-slate-800">
                  Do you offer empty leg flights?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, we regularly offer empty leg flights at discounted rates.
                  These flights occur when an aircraft needs to reposition for
                  another charter, providing significant savings for flexible
                  travelers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-medium text-slate-800">
                  What safety standards do you maintain?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We adhere to the highest safety standards, including regular
                  aircraft inspections, certified crew training, and compliance
                  with all aviation regulations. All our partner operators are
                  vetted and certified.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-medium text-slate-800">
                  What&apos;s included in the charter price?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  The charter price includes aircraft rental, professional crew,
                  fuel costs, insurance coverage, and complimentary
                  refreshments. Additional services like ground transportation
                  or special catering may incur extra charges.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left font-medium text-slate-800">
                  Do you offer empty leg flights?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
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
