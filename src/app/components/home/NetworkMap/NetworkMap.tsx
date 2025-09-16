"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Minus, Plane, Plus } from "lucide-react";
import { useState } from "react";

interface Airport {
  code: string;
  name: string;
  x: number;
  y: number;
}

interface FlightPath {
  from: string;
  to: string;
}

const airports: Airport[] = [
  { code: "SEA", name: "Seattle", x: 15, y: 25 },
  { code: "SFO", name: "San Francisco", x: 8, y: 45 },
  { code: "LAX", name: "Los Angeles", x: 12, y: 55 },
  { code: "LAS", name: "Las Vegas", x: 18, y: 52 },
  { code: "DEN", name: "Denver", x: 35, y: 40 },
  { code: "DFW", name: "Dallas", x: 40, y: 65 },
  { code: "IAH", name: "Houston", x: 38, y: 72 },
  { code: "ORD", name: "Chicago", x: 50, y: 32 },
  { code: "ATL", name: "Atlanta", x: 62, y: 60 },
  { code: "MIA", name: "Miami", x: 72, y: 85 },
  { code: "BOS", name: "Boston", x: 78, y: 22 },
  { code: "JFK", name: "New York", x: 75, y: 28 },
];

const flightPaths: FlightPath[] = [
  { from: "LAX", to: "JFK" },
  { from: "SFO", to: "BOS" },
  { from: "SEA", to: "MIA" },
  { from: "DEN", to: "ATL" },
  { from: "ORD", to: "LAX" },
  { from: "DFW", to: "BOS" },
  { from: "LAX", to: "MIA" },
  { from: "SFO", to: "ORD" },
];

const NetworkMap = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  // const [hoveredAirport, setHoveredAirport] = useState<Airport | null>(null);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.2, 0.6));
  };

  const getAirportPosition = (code: string): Airport | undefined => {
    return airports.find((airport) => airport.code === code);
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Flight Network
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore our extensive network of private flights connecting major
            cities across the United States and international destinations
          </p>
        </div>

        {/* Interactive Map */}
        <Card className="relative overflow-hidden bg-slate-800 border-0 mb-8">
          <div className="relative h-96 md:h-[500px]">
            {/* Map Background */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
              style={{
                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), url("data:image/svg+xml,%3Csvg width='800' height='500' viewBox='0 0 800 500' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='500' fill='%23334155'/%3E%3Cpath d='M0 250C100 200 200 300 300 250C400 200 500 300 600 250C700 200 800 300 800 250V500H0V250Z' fill='%23475569' opacity='0.3'/%3E%3Cpath d='M0 300C150 250 300 350 450 300C600 250 750 350 800 300V500H0V300Z' fill='%2364748b' opacity='0.2'/%3E%3C/svg%3E")`,
                transform: `scale(${zoomLevel})`,
              }}
            />

            {/* Flight Paths */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {flightPaths.map((path, index) => {
                const fromAirport = getAirportPosition(path.from);
                const toAirport = getAirportPosition(path.to);

                if (!fromAirport || !toAirport) return null;

                return (
                  <line
                    key={index}
                    x1={`${fromAirport.x}%`}
                    y1={`${fromAirport.y}%`}
                    x2={`${toAirport.x}%`}
                    y2={`${toAirport.y}%`}
                    stroke="rgba(59, 130, 246, 0.4)"
                    strokeWidth="1"
                    strokeDasharray="4,4"
                    className="animate-pulse"
                  />
                );
              })}
            </svg>

            {/* Airports */}
            {airports.map((airport) => (
              <div
                key={airport.code}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{
                  left: `${airport.x}%`,
                  top: `${airport.y}%`,
                  transform: `translate(-50%, -50%) scale(${zoomLevel})`,
                }}
                // onMouseEnter={() => setHoveredAirport(airport)}
                // onMouseLeave={() => setHoveredAirport(null)}
              >
                {/* Airport Dot */}
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-lg group-hover:scale-125 transition-transform duration-200">
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* Airport Code Label */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-xs font-semibold whitespace-nowrap bg-black/60 px-2 py-1 rounded backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {airport.code}
                  </div>
                </div>
              </div>
            ))}

            {/* Floating Aircraft Icons */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-white/40 animate-pulse"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + (i % 3) * 15}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: "3s",
                }}
              >
                <Plane className="w-4 h-4 transform rotate-45" />
              </div>
            ))}

            {/* Zoom Controls */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <Button
                size="sm"
                variant="secondary"
                className="w-10 h-10 p-0 bg-black/60 hover:bg-black/80 text-white border-0"
                onClick={handleZoomIn}
              >
                <Plus className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="w-10 h-10 p-0 bg-black/60 hover:bg-black/80 text-white border-0"
                onClick={handleZoomOut}
              >
                <Minus className="w-4 h-4" />
              </Button>
            </div>

            {/* Map Attribution */}
            <div className="absolute bottom-2 left-2 text-xs text-white/60">
              © 2025 NexFlight | Map data © OpenStreetMap contributors
            </div>
          </div>
        </Card>

        {/* Network Stats */}
        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg mb-6">
            Our network connects over 5,000 airports worldwide, with real-time
            tracking and availability
          </p>

          <Button
            size="lg"
            className="bg-blue-950 hover:bg-blue-900 text-white px-8 py-3"
          >
            Explore Available Routes
          </Button>
        </div>

        {/* Decorative Element */}
        <div className="flex justify-center mt-12">
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
};

export default NetworkMap;
