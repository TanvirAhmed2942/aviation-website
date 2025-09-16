"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Plane, Star } from "lucide-react";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "Leslie Alexander",
    route: "LOS ANGELES TO LAS VEGAS",
    rating: 5,
    text: "From the moment I booked to touchdown, everything was flawless. NEXFLIGHT redefines private travel.",
  },
  {
    id: 2,
    name: "Jacob Jones",
    route: "NEW YORK TO MIAMI",
    rating: 5,
    text: "I've always wanted to experience private jet travel, and NEXFLIGHT made it possible without breaking the bank.",
  },
  {
    id: 3,
    name: "Jenny Wilson",
    route: "DALLAS TO ASPEN",
    rating: 5,
    text: "Luxury, comfort, and total peace of mind. NEXFLIGHT makes every journey feel like a VIP experience.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    route: "CHICAGO TO NEW YORK",
    rating: 5,
    text: "Outstanding service from start to finish. The booking process was seamless and the flight exceeded all expectations.",
  },
  {
    id: 5,
    name: "Michael Brown",
    route: "SEATTLE TO LOS ANGELES",
    rating: 5,
    text: "Professional crew, luxurious aircraft, and punctual service. NEXFLIGHT has set a new standard for private aviation.",
  },
];

type StarRatingProps = {
  rating: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

type testimonialData = {
  testimonial: {
    id: number;
    name: string;
    route: string;
    rating: number;
    text: string;
  };
};

const TestimonialCard: React.FC<testimonialData> = ({ testimonial }) => {
  return (
    <Card className="border-0 shadow-sm">
      <CardContent className="p-8 h-full flex flex-col">
        <StarRating rating={testimonial.rating} />

        <blockquote className="text-gray-800 text-lg leading-relaxed mb-8 flex-grow">
          &ldquo;{testimonial.text}&rdquo;
        </blockquote>

        <div className="mt-auto">
          <div className="font-semibold text-gray-900 text-base mb-1">
            {testimonial.name}
          </div>
          <div className="text-gray-500 text-sm font-medium tracking-wide uppercase">
            {testimonial.route}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hear What Our Travelers Love About NexFlight
          </h2>
          <p className="text-gray-600 text-lg">
            2,157 people have said how good NexFlight
          </p>
        </div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Mobile/Tablet View - Swiper Carousel */}
        <div className="lg:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={16}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Decorative Element */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center">
            <div className="h-px bg-gray-300 w-24"></div>
            <div className="mx-4 p-3 bg-white rounded-full shadow-sm">
              <Plane className="w-6 h-6 text-blue-500" />
            </div>
            <div className="h-px bg-gray-300 w-24"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
