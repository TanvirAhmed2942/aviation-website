"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Clock, Heart, MapPin, Users } from "lucide-react";
import { useState } from "react";

type FlightRating = "GOOD" | "FAIR" | "RECOMMENDED";

type Flight = {
  id: number;
  aircraft: string;
  origin: string;
  destination: string;
  departure: string;
  time: string;
  duration: string;
  model: string;
  passengers: number;
  price: number;
  rating: FlightRating;
  imageUrl: string;
};

const allFlights: Flight[] = [
  {
    id: 1,
    aircraft: "KSTP",
    origin: "St Paul, Minnesota, USA",
    destination: "San Antonio, Texas, USA",
    departure: "05/06/2025",
    time: "06:30 PM",
    duration: "3h 1m",
    model: "Beechcraft Beechjet 400A",
    passengers: 7,
    price: 22000,
    rating: "GOOD",
    imageUrl:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=300&h=200&fit=crop",
  },
  {
    id: 2,
    aircraft: "KLUK",
    origin: "St Paul, Minnesota, USA",
    destination: "San Antonio, Texas, USA",
    departure: "05/06/2025",
    time: "06:30 PM",
    duration: "0h 45m",
    model: "Bombardier Challenger 601",
    passengers: 4,
    price: 29623,
    rating: "RECOMMENDED",
    imageUrl:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&h=200&fit=crop",
  },
  {
    id: 3,
    aircraft: "KFRG",
    origin: "St Paul, Minnesota, USA",
    destination: "San Antonio, Texas, USA",
    departure: "05/06/2025",
    time: "06:30 PM",
    duration: "2h 54m",
    model: "Cessna Citation V",
    passengers: 5,
    price: 29623,
    rating: "FAIR",
    imageUrl:
      "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=300&h=200&fit=crop",
  },
];

const ITEMS_PER_PAGE = 7;

export default function FlightBookingSystem() {
  const [currentPage, setCurrentPage] = useState(1);
  const [likedFlights, setLikedFlights] = useState<Set<number>>(new Set());
  // const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);

  const totalPages = Math.ceil(allFlights.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedFlights = allFlights.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const toggleLike = (flightId: number) => {
    const newLikedFlights = new Set(likedFlights);
    if (newLikedFlights.has(flightId)) {
      newLikedFlights.delete(flightId);
    } else {
      newLikedFlights.add(flightId);
    }
    setLikedFlights(newLikedFlights);
  };

  const FlightDetailsDrawer = ({ flight }: { flight: Flight }) => (
    <SheetContent className="w-full overflow-y-auto">
      <SheetHeader className="border-b">
        <SheetTitle className="flex items-center gap-2">
          Flight Details
        </SheetTitle>
      </SheetHeader>

      <div className="px-4 space-y-6">
        <div className="relative">
          <img
            src={flight.imageUrl}
            alt={flight.model}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute top-2 right-2">
            {flight.rating === "RECOMMENDED" && (
              <Badge className="bg-blue-600">RECOMMENDED</Badge>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">{flight.model}</h3>
          <p className="text-gray-600">{flight.aircraft}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">From</Label>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-400" />
              <div>
                <p className="font-medium">{flight.aircraft}</p>
                <p className="text-sm text-gray-600">{flight.origin}</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">To</Label>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-400" />
              <div>
                <p className="font-medium">KSAT</p>
                <p className="text-sm text-gray-600">{flight.destination}</p>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-medium">Departure</Label>
            <div className="flex items-center gap-2 mt-1">
              <Clock className="h-4 w-4 text-gray-400" />
              <div>
                <p className="font-medium">{flight.time}</p>
                <p className="text-sm text-gray-600">{flight.departure}</p>
              </div>
            </div>
          </div>

          <div>
            <Label className="text-sm font-medium">Duration</Label>
            <p className="font-medium mt-1">{flight.duration}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-medium">Passengers</Label>
            <div className="flex items-center gap-2 mt-1">
              <Users className="h-4 w-4 text-gray-400" />
              <p className="font-medium">Up to {flight.passengers}</p>
            </div>
          </div>

          <div>
            <Label className="text-sm font-medium">Price</Label>
            <p className="text-2xl font-bold text-[#1B365D] mt-1">
              ${flight.price.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Aircraft Features</h4>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>• High-speed Wi-Fi available</li>
            <li>• Luxurious leather seating</li>
            <li>• Climate controlled cabin</li>
            <li>• Professional flight crew</li>
          </ul>
        </div>
      </div>
    </SheetContent>
  );

  const BookingDrawer = ({ flight }: { flight: Flight }) => (
    <SheetContent className="w-96 overflow-y-auto">
      <SheetHeader className="border-b">
        <SheetTitle>Book Your Flight</SheetTitle>
      </SheetHeader>

      <div className="space-y-6 px-4 pb-5">
        <div className="bg-[#1B365D] text-white p-4 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{flight.aircraft} → KSAT</h3>
              <p className="text-sm opacity-90">
                {flight.origin} to {flight.destination}
              </p>
            </div>
            <p className="text-xl font-bold">
              ${flight.price.toLocaleString()}
            </p>
          </div>

          <div className="mt-3 space-y-1 text-sm opacity-90">
            <p>
              Departure: {flight.departure} {flight.time}
            </p>
            <p>Duration: {flight.duration}</p>
            <p>Aircraft: {flight.model}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label>Email Address</Label>
            <Input
              type="email"
              placeholder="your-email@email.com"
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Passengers</Label>
              <Input
                type="number"
                defaultValue="1"
                min="1"
                max={flight.passengers}
                className="mt-1"
              />
            </div>
            <div>
              <Label>Luggage Items</Label>
              <Input type="number" defaultValue="0" min="0" className="mt-1" />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="font-semibold">
              Would you like to include amenities?
            </h4>

            <div className="flex items-center justify-between">
              <Label>Include Amenities</Label>
              <Switch />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Pets</Label>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <Label className="text-sm">Catering</Label>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <Label className="text-sm">Ground Transportation</Label>
                <Switch />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="font-semibold">
              Dietary Preferences & Restrictions
            </h4>

            <div className="space-y-3">
              <div>
                <Label className="text-sm">Celery</Label>
                <p className="text-xs text-gray-500">
                  Products containing celery
                </p>
              </div>

              <div>
                <Label className="text-sm">Eggs</Label>
                <p className="text-xs text-gray-500">
                  Products containing eggs
                </p>
              </div>

              <div>
                <Label className="text-sm">Fish</Label>
                <p className="text-xs text-gray-500">
                  Products containing fish
                </p>
              </div>

              <div>
                <Label className="text-sm">Gluten (Cereals)</Label>
                <p className="text-xs text-gray-500">
                  Cereals containing gluten such as wheat, barley
                </p>
              </div>
            </div>
          </div>

          <div>
            <Label>Special Requests</Label>
            <Textarea
              placeholder="E.g. preferred departure time, special dietary requirements, etc."
              className="mt-1"
              rows={3}
            />
          </div>

          <Button className="w-full bg-[#1B365D] hover:bg-[#1B365D]/90 text-white py-3">
            Submit Request
          </Button>
        </div>
      </div>
    </SheetContent>
  );

  return (
    <div className="pt-10">
      <div className="mb-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            LIVE
          </span>
          <span>{allFlights.length} flights available</span>
          <span>– Price range: N/A</span>
          <span>– Results include nearby airports</span>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left py-3 px-4 font-medium border-b">
                Aircraft
              </th>
              <th className="text-left py-3 px-4 font-medium border-b">
                Origin
              </th>
              <th className="text-left py-3 px-4 font-medium border-b">
                Destination
              </th>
              <th className="text-left py-3 px-4 font-medium border-b">
                Departure
              </th>
              <th className="text-left py-3 px-4 font-medium border-b">
                Duration
              </th>
              <th className="text-left py-3 px-4 font-medium border-b">
                Aircraft Model
              </th>
              <th className="text-left py-3 px-4 font-medium border-b">
                Passengers
              </th>
              <th className="text-left py-3 px-4 font-medium border-b">
                Price
              </th>
              <th className="text-center py-3 px-4 font-medium border-b">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedFlights.map((flight) => (
              <tr
                key={flight.id}
                className="hover:bg-gray-50 transition-colors border-b last:border-b-0"
              >
                <td className="py-3 px-4">
                  <img
                    src={flight.imageUrl}
                    alt={flight.model}
                    className="w-16 h-10 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4">
                  <div className="font-medium">{flight.aircraft}</div>
                  <div className="text-sm text-gray-600">{flight.origin}</div>
                </td>
                <td className="py-3 px-4">
                  <div className="font-medium">KSAT</div>
                  <div className="text-sm text-gray-600">
                    {flight.destination}
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div>{flight.departure}</div>
                  <div className="text-sm text-gray-600">{flight.time}</div>
                </td>
                <td className="py-3 px-4">{flight.duration}</td>
                <td className="py-3 px-4">{flight.model}</td>
                <td className="py-3 px-4">{flight.passengers}</td>
                <td className="py-3 px-4">
                  <div className="font-semibold">
                    ${flight.price.toLocaleString()}
                  </div>
                  {flight.rating === "RECOMMENDED" && (
                    <Badge variant="secondary" className="text-xs mt-1">
                      RECOMMENDED
                    </Badge>
                  )}
                  {flight.rating === "GOOD" && (
                    <Badge className="text-xs mt-1 bg-green-100 text-green-800">
                      ↑ GOOD
                    </Badge>
                  )}
                  {flight.rating === "FAIR" && (
                    <Badge className="text-xs mt-1 bg-blue-100 text-blue-800">
                      ↑ FAIR
                    </Badge>
                  )}
                </td>
                <td className=" px-4">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-5 w-11 border"
                      onClick={() => toggleLike(flight.id)}
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          likedFlights.has(flight.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-400"
                        }`}
                      />
                    </Button>

                    <Sheet>
                      <SheetTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs p-5 cursor-pointer "
                        >
                          View Details
                        </Button>
                      </SheetTrigger>
                      <FlightDetailsDrawer flight={flight} />
                    </Sheet>

                    <Sheet>
                      <SheetTrigger asChild>
                        <Button
                          size="sm"
                          className="bg-[#1B365D] hover:bg-[#1B365D]/90 p-5 text-white"
                        >
                          Book Now <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </SheetTrigger>
                      <BookingDrawer flight={flight} />
                    </Sheet>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
