import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/Home/CTASection/image.jpg')" }}
      ></div>

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-950/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Experience NexFlight?
        </h2>

        <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
          Whether you're planning your next journey or have questions about our services, our team is ready to assist you 24/7.
          Discover the NexFlight difference today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 text-base min-w-[160px]"
          >
            Contact Us
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white cursor-pointer text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 text-base min-w-[160px] bg-transparent"
          >
            Search Flights
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
