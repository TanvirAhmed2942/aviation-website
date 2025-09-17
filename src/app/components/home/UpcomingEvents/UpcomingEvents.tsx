import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ExternalLink, MapPin, Users } from "lucide-react";
import Image from 'next/image';
import React from "react";

const events = [
  {
    id: 1,
    category: "Industry Conference",
    title: "NBAA Business Aviation Convention & Exhibition",
    date: "OCT 22-24, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Las Vegas Convention Center, Las Vegas, NV",
    attendance: "25,000+",
    description: "The world's largest business aviation event featuring the latest aircraft, technology, and industry insights. Connect with industry leaders and explore the future",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    categoryColor: "bg-purple-500",
    link: "https://nbaa.org/convention",
  },
  {
    id: 2,
    category: "Sporting Event",
    title: "F1 Monaco Grand Prix",
    date: "MAY 22-25, 2025",
    time: "Race Day: 3:00 PM",
    location: "Circuit de Monaco, Monte Carlo",
    attendance: "200,000+",
    description: "Experience the glamour and excitement of Formula 1's most prestigious race. Charter a private jet to arrive in style at this iconic event featuring the world's top drivers navigating Monaco's legendary street circuit.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    categoryColor: "bg-red-500",
    link: "https://f1.com/monaco",
  },
  {
    id: 3,
    category: "Art & Culture",
    title: "Art Basel Miami Beach",
    date: "DEC 4-7, 2025",
    time: "11:00 AM - 7:00 PM",
    location: "Miami Beach Convention Center, Miami, FL",
    attendance: "70,000+",
    description: "The premier art show of the Americas featuring leading galleries from North America, Latin America, Europe, Asia, and Africa. Arrive effortlessly via private jet to this exclusive showcase of modern and contemporary",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    categoryColor: "bg-blue-500",
    link: "https://artbasel.com/miami-beach",
  },
];

type EventCardData = {
  event: {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    category: string;
    attendance: string;
    description: string;
    image: string;
    link: string;
    categoryColor: string;
  };
};

const EventCard: React.FC<EventCardData> = ({ event }) => {
  return (
    <Card className="overflow-hidden group p-0 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="relative flex-shrink-0">
        <div className="h-40 sm:h-44 md:h-48 relative">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9jkHLqDptBKr3k6TqW/9k="
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <Badge
            className={`absolute top-3 left-3 ${event.categoryColor} text-white border-0 text-xs`}
          >
            {event.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
        <div className="flex items-start gap-2 mb-3 sm:mb-4">
          <Calendar className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
          <span className="text-sm font-medium text-gray-700">
            {event.date}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
          {event.title}
        </h3>

        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow">
          <div className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-gray-600">{event.time}</span>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-gray-600 line-clamp-2">{event.location}</span>
          </div>

          <div className="flex items-start gap-2">
            <Users className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-gray-600">
              Expected: {event.attendance}
            </span>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 sm:mb-6 flex-grow line-clamp-3">
          {event.description}
        </p>

        <Button className="w-full bg-[#2A4A73] hover:bg-[#345c91] text-white text-sm sm:text-base py-2">
          Book Private Flight
        </Button>
      </CardContent>
    </Card>
  );
};

const UpcomingEvents = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-0">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              Upcoming Events
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Charter a private jet to these exclusive global events
            </p>
          </div>

          <Button
            variant="outline"
            className="hidden sm:flex items-center gap-2 text-sm sm:text-base"
          >
            View All Events
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="sm:hidden flex justify-center mb-8 sm:mb-10">
          <Button variant="outline" className="flex items-center gap-2 w-full sm:w-auto">
            View All Events
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        {/* Custom Event CTA */}
        <Card className="bg-[#1B365D] text-white overflow-hidden">
          <CardContent className="p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                  Need a custom event flight?
                </h3>
                <p className="text-blue-100 text-base sm:text-lg">
                  We can arrange private jet charters to any event worldwide.
                  Contact our team for personalized service.
                </p>
              </div>

              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-2 sm:py-3 whitespace-nowrap flex-shrink-0 text-sm sm:text-base"
              >
                Request Custom Quote
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UpcomingEvents;