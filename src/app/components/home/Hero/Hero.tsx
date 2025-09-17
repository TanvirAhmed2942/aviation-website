"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle, ArrowRightLeft, Calendar as CalendarIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import Navbar from "./Navber";

// Seeded random number generator for consistent SSR/CSR values
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const FlightSearchForm = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [passengers, setPassengers] = useState(1);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    // Clear errors when swapping
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors.from;
      delete newErrors.to;
      return newErrors;
    });
    // Close calendar when swapping
    setIsCalendarOpen(false);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!from) newErrors.from = "Please select departure airport";
    if (!to) newErrors.to = "Please select destination airport";
    if (!date) newErrors.date = "Please select departure date";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // All fields are valid, redirect to flights page
      console.log("Searching flights:", {
        from,
        to,
        date: date ? formatDate(date) : null,
        passengers,
      });

      router.push("/flights");
    }
  };

  // Define a consistent height for all form elements
  const inputHeightClass = "h-[42px]";

  return (
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row justify-center items-center gap-4 text-white p-6 rounded-lg max-w-6xl mx-auto">
      {/* Flying From and To with Swap Button */}
      <div className='flex flex-col md:flex-row items-center gap-1 w-full md:w-auto'>
        <div className="flex-1 min-w-[180px] w-full md:w-auto">
          <div className="relative">
            <Select
              value={from}
              onValueChange={(value) => {
                setFrom(value);
                if (errors.from) {
                  setErrors(prev => {
                    const newErrors = { ...prev };
                    delete newErrors.from;
                    return newErrors;
                  });
                }
              }}
            >
              <SelectTrigger className={`w-full border ${errors.from ? "border-red-500" : "border-gray-300"} py-5 bg-white text-gray-900 focus:ring-0 focus:ring-offset-0 ${inputHeightClass} flex items-center`}>
                <SelectValue placeholder="Flying from" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-900">
                <SelectItem value="nyc">New York (JFK)</SelectItem>
                <SelectItem value="lax">Los Angeles (LAX)</SelectItem>
                <SelectItem value="chi">Chicago (ORD)</SelectItem>
                <SelectItem value="mia">Miami (MIA)</SelectItem>
                <SelectItem value="sfo">San Francisco (SFO)</SelectItem>
              </SelectContent>
            </Select>
            {errors.from && (
              <div className="absolute flex items-center mt-1 text-red-500 text-xs">
                <AlertCircle className="h-3 w-3 mr-1" />
                {errors.from}
              </div>
            )}
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex items-center my-2 md:my-0">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleSwap}
            className="text-white transition-colors h-10 w-10"
            title="Swap destinations"
          >
            <ArrowRightLeft className="h-5 w-5" />
          </Button>
        </div>

        {/* Flying To */}
        <div className="flex-1 min-w-[180px] w-full md:w-auto">
          <div className="relative">
            <Select
              value={to}
              onValueChange={(value) => {
                setTo(value);
                if (errors.to) {
                  setErrors(prev => {
                    const newErrors = { ...prev };
                    delete newErrors.to;
                    return newErrors;
                  });
                }
              }}
            >
              <SelectTrigger className={`w-full border ${errors.to ? "border-red-500" : "border-gray-300"} py-5 bg-white text-gray-900 focus:ring-0 focus:ring-offset-0 ${inputHeightClass} flex items-center`}>
                <SelectValue placeholder="Flying to" />
              </SelectTrigger>
              <SelectContent className="bg-white text-gray-900">
                <SelectItem value="nyc">New York (JFK)</SelectItem>
                <SelectItem value="lax">Los Angeles (LAX)</SelectItem>
                <SelectItem value="chi">Chicago (ORD)</SelectItem>
                <SelectItem value="mia">Miami (MIA)</SelectItem>
                <SelectItem value="sfo">San Francisco (SFO)</SelectItem>
              </SelectContent>
            </Select>
            {errors.to && (
              <div className="absolute flex items-center mt-1 text-red-500 text-xs">
                <AlertCircle className="h-3 w-3 mr-1" />
                {errors.to}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Departure Date */}
      <div className="flex-1 min-w-[180px] w-full md:w-auto">
        <div className="relative">
          <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant="outline"
                className={`w-full justify-start text-left font-normal bg-white ${errors.date ? "border-red-500" : "border-gray-300"} text-gray-900 hover:bg-gray-50 ${inputHeightClass} px-3`}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? formatDate(date) : <span className="text-gray-500">Select Date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(selectedDate) => {
                  setDate(selectedDate);
                  if (selectedDate && errors.date) {
                    setErrors(prev => {
                      const newErrors = { ...prev };
                      delete newErrors.date;
                      return newErrors;
                    });
                  }
                  setIsCalendarOpen(false); // Close calendar when date is selected
                }}
                disabled={(date) => date < new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {errors.date && (
            <div className="absolute flex items-center mt-1 text-red-500 text-xs">
              <AlertCircle className="h-3 w-3 mr-1" />
              {errors.date}
            </div>
          )}
        </div>
      </div>

      {/* Passengers */}
      <div className="flex min-w-[180px] w-full md:w-auto">
        <div className={`flex items-center border border-gray-300 w-full justify-center rounded-md bg-white ${inputHeightClass} px-3`}>
          <Button
            type="button"
            variant="ghost"
            size="lg"
            onClick={() => setPassengers(Math.max(1, passengers - 1))}
            className="text-gray-900 p-1 h-6 w-6"
            disabled={passengers <= 1}
          >
            <FiMinus />
          </Button>
          <span className="mx-3 text-sm font-medium min-w-[20px] text-gray-900 text-center">
            {passengers}
          </span>
          <Button
            type="button"
            variant="ghost"
            size="lg"
            onClick={() => setPassengers(Math.min(9, passengers + 1))}
            className="text-gray-900 p-1 h-7 w-7"
            disabled={passengers >= 9}
          >
            <FiPlus />
          </Button>
        </div>
      </div>

      {/* Search Button */}
      <div className="flex-1 min-w-[180px] w-full md:w-auto">
        <Button
          type="submit"
          className={`w-full bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-md ${inputHeightClass}`}
        >
          Search Flights
        </Button>
      </div>
    </form>
  );
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/hero.mp4"
        autoPlay
        loop
        muted
        playsInline // Added for better mobile support
      />
      <div className="absolute top-0 left-0 w-full h-full bg-blue-950/50"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles - Reduced count on mobile */}
        {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${seededRandom(i * 0.1) * 100}%`,
              top: `${seededRandom(i * 0.1 + 100) * 100}%`,
              animationDelay: `${seededRandom(i * 0.1 + 200) * 3}s`,
              animationDuration: `${3 + seededRandom(i * 0.1 + 300) * 2}s`,
            }}
          />
        ))}

        {/* Moving gradient orbs - Smaller on mobile */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-xl md:blur-2xl lg:blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-indigo-500/10 rounded-full blur-xl md:blur-2xl lg:blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4 sm:px-6 md:px-8">
        <div
          className={`text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-5 md:mb-6 tracking-wide">
            <span className="inline-block animate-[fadeInUp_1s_ease-out_0.7s_both] font-semibold">
              FLY
            </span>
            <span className="inline-block animate-[fadeInUp_1s_ease-out_0.9s_both] mx-2 sm:mx-3 md:mx-4 font-semibold">
              SMARTER.
            </span>
            <span className="inline-block animate-[fadeInUp_1s_ease-out_1.1s_both] font-normal bg-clip-text text-white">
              FLY NEXFLIGHT.
            </span>
          </h1>
          <p
            className={`text-base sm:text-lg md:text-xl text-white/90 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto transition-all duration-1000 delay-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
          >
            Luxury aircraft charter at your fingertips.
          </p>
        </div>

        {/* Flight Search Form */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl">
          <FlightSearchForm />
        </div>
      </main>

      <style jsx>{`
        @keyframes fly {
          0% {
            transform: translateX(100vw) translateY(0) rotate(45deg);
          }
          50% {
            transform: translateX(-50vw) translateY(-50px) rotate(45deg);
          }
          100% {
            transform: translateX(-100vw) translateY(0) rotate(45deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Extra small devices (phones under 375px) */
        @media (max-width: 374px) {
          .xs\\:text-4xl {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;