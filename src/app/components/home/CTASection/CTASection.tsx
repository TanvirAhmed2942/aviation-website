import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] xl:min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/Home/CTASection/image.jpg')" }}
      >
        {/* Fallback for smaller screens to ensure proper coverage */}
        <div className="md:hidden absolute inset-0 bg-blue-950/30"></div>
      </div>

      {/* Blue Overlay - Adjusted opacity for better text readability */}
      <div className="absolute inset-0 bg-blue-950/50 md:bg-blue-950/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 max-w-4xl mx-auto w-full py-10 sm:py-12 md:py-16">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight px-2">
          Ready to Experience NexFlight?
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-9 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4 sm:px-6">
          Whether you&apos;re planning your next journey or have questions about
          our services, our team is ready to assist you 24/7. Discover the
          NexFlight difference today.
        </p>

        <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center w-full px-4">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-2 sm:px-7 sm:py-2.5 md:px-8 md:py-3 text-sm sm:text-base min-w-[140px] xs:min-w-[160px] sm:min-w-[180px]"
          >
            Contact Us
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-6 py-2 sm:px-7 sm:py-2.5 md:px-8 md:py-3 text-sm sm:text-base min-w-[140px] xs:min-w-[160px] sm:min-w-[180px] bg-transparent"
          >
            Search Flights
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;