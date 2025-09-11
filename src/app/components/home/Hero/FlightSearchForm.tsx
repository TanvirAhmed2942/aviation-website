"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FiMinus, FiPlus } from "react-icons/fi";
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
import { ArrowRightLeft, Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";

const FlightSearchForm = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [passengers, setPassengers] = useState(1);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

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
    // Close calendar when swapping
    setIsCalendarOpen(false);
  };

  const handleSearch = () => {
    if (!from || !to || !date) {
      alert("Please fill in all required fields");
      return;
    }

    console.log("Searching flights:", {
      from,
      to,
      date: date ? formatDate(date) : null,
      passengers,
    });
  };

  // Define a consistent height for all form elements
  const inputHeightClass = "h-[42px]";

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-white p-6 rounded-lg max-w-6xl mx-auto">
      {/* Flying From and To with Swap Button */}
      <div className='flex flex-col md:flex-row items-center gap-1 w-full md:w-auto'>
        <div className="flex-1 min-w-[180px] w-full md:w-auto">
          <Select value={from} onValueChange={setFrom}>
            <SelectTrigger className={`w-full border border-gray-300 py-5 bg-white text-gray-900 focus:ring-0 focus:ring-offset-0 ${inputHeightClass} flex items-center`}>
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
        </div>

        {/* Swap Button */}
        <div className="flex items-center my-2 md:my-0">
          <Button
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
          <Select value={to} onValueChange={setTo}>
            <SelectTrigger className={`w-full border py-5 border-gray-300 bg-white text-gray-900 focus:ring-0 focus:ring-offset-0 ${inputHeightClass} flex items-center`}>
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
        </div>
      </div>

      {/* Departure Date */}
      <div className="flex-1 min-w-[180px] w-full md:w-auto">
        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={`w-full justify-start text-left font-normal bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 ${inputHeightClass} px-3`}
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
                setIsCalendarOpen(false); // Close calendar when date is selected
              }}
              disabled={(date) => date < new Date()}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Passengers */}
      <div className="flex min-w-[180px] w-full md:w-auto">
        <div className={`flex items-center border w-full justify-center border-gray-300 rounded-md bg-white ${inputHeightClass} px-3`}>
          <Button
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
          onClick={handleSearch}
          className={`w-full bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-md ${inputHeightClass}`}
        >
          Search Flights
        </Button>
      </div>
    </div>
  );
};

export default FlightSearchForm;