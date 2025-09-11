import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, ExternalLink, Plane } from 'lucide-react';

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
    categoryColor: "bg-purple-500"
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
    categoryColor: "bg-red-500"
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
    categoryColor: "bg-blue-500"
  }
];

type evenCardData = {
  event : any
}

const EventCard : React.FC<evenCardData> = ({ event }) => {
  return (
    <Card className="overflow-hidden group p-0 hover:shadow-lg transition-all duration-300 h-full">
      <div className="relative">
        <div 
          className="h-48 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${event.image})` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <Badge 
            className={`absolute top-4 left-4 ${event.categoryColor} text-white border-0`}
          >
            {event.category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-start gap-2 mb-4">
          <Calendar className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
          <span className="text-sm font-medium text-gray-700">{event.date}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
          {event.title}
        </h3>
        
        <div className="space-y-3 mb-6 flex-grow">
          <div className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
            <span className="text-sm text-gray-600">{event.time}</span>
          </div>
          
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
            <span className="text-sm text-gray-600">{event.location}</span>
          </div>
          
          <div className="flex items-start gap-2">
            <Users className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
            <span className="text-sm text-gray-600">Expected Attendance: {event.attendance}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
          {event.description}
        </p>
        
        <Button className="w-full bg-[#2A4A73] hover:bg-[#345c91] text-white">
          Book Private Flight
        </Button>
      </CardContent>
    </Card>
  );
};

const UpcomingEvents = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-gray-600 text-lg">
              Charter a private jet to these exclusive global events
            </p>
          </div>
          
          <Button variant="outline" className="hidden md:flex items-center gap-2">
            View All Events
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden flex justify-center mb-12">
          <Button variant="outline" className="flex items-center gap-2">
            View All Events
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        {/* Custom Event CTA */}
        <Card className="bg-[#1B365D] text-white overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Need a custom event flight?
                </h3>
                <p className="text-blue-100 text-lg">
                  We can arrange private jet charters to any event worldwide. Contact our team for personalized service.
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 whitespace-nowrap flex-shrink-0"
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