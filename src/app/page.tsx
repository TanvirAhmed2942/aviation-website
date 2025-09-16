import { NextPage } from "next";
import AircraftComparison from "./components/home/AircraftComparison/AircraftComparison";
import CoreServiceLines from "./components/home/CoreServiceLines/CoreServiceLines";
import CTASection from "./components/home/CTASection/CTASection";
import ExclusiveEmptyLegDeals from "./components/home/ExclusiveEmptyLegDeals/ExclusiveEmptyLegDeals";
import Hero from "./components/home/Hero/Hero";
import OurAircraft from "./components/home/OurAircraft/OurAircraft";
import PopularDestinations from "./components/home/PopularDestinations/PopularDestinations";
import PopularRoutes from "./components/home/PopularRoutes/PopularRoutes";
import PremiumAviationServices from "./components/home/PremiumAviation/PremiumAviationServices";
import Services from "./components/home/Services/Services";
import TestimonialsSection from "./components/home/TestimonialsSection/TestimonialsSection";
import UpcomingEvents from "./components/home/UpcomingEvents/UpcomingEvents";
import WhyChooseNexFlight from "./components/home/WhyChooseNexFlight/WhyChooseNexFlight";
import Footer from "./components/Reusable/Footer";
import BlogSection from "./components/home/BlogSection/BlogSection";
import NetworkMap from "./components/home/NetworkMap/NetworkMap";

const page: NextPage = () => {
  return (
    <div>
      <Hero />
      <PremiumAviationServices />
      <Services />
      <AircraftComparison />
      <PopularDestinations />
      <PopularRoutes />
      <ExclusiveEmptyLegDeals />
      <CoreServiceLines />
      <NetworkMap />
      <WhyChooseNexFlight />
      <OurAircraft />
      <UpcomingEvents />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </div>
  );
};

export default page;
