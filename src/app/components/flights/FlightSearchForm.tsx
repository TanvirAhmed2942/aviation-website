"use client";

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeftRight, Calendar as CalIcon, Filter, Minus, Plus, RotateCcw } from 'lucide-react';
import { useState } from 'react';

// Mock airport list
const airports = [
  'Anyplace',
  'St Paul, Minnesota, USA (KSTP)',
  'San Antonio, Texas, USA (KSAT)',
  'Minneapolis, MN (MSP)',
  'Austin, TX (AUS)',
  'Denver, CO (DEN)',
  'Los Angeles, CA (LAX)',
  'New York, NY (JFK)',
];

export default function FlightSearchForm() {
  const [type, setType] = useState('one-way');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [passengers, setPassengers] = useState(1);
  const [aircraftCategory, setAircraftCategory] = useState('any');

  const handleSubmit = () => {
    console.log({ type, from, to, date, passengers, aircraftCategory });
  };

  return (
    <div className="w-full container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 md:gap-10 py-4 px-4 bg-white rounded-lg shadow border">
        {/* Main form fields */}
        <div className='flex flex-col md:flex-row w-full gap-2 md:gap-4'>
          {/* Type */}
          <div className="flex flex-col gap-1 w-full md:w-1/12">
            <label className="text-sm font-medium text-gray-700">Type</label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="w-full h-11 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                <SelectValue placeholder="One Way" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="one-way">One Way</SelectItem>
                <SelectItem value="round-trip">Round Trip</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Flying From */}
          <div className="flex flex-col gap-1 w-full md:w-2/12">
            <div className='flex justify-between items-center'>
              <label className="text-sm font-medium text-gray-700">Flying From</label>
              <div className="text-xs text-blue-500 hidden md:block">Anyplace</div>
            </div>
            <div className="relative">
              <Select value={from} onValueChange={setFrom}>
                <SelectTrigger className="w-full h-11 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                  <SelectValue placeholder="Anyplace" />
                </SelectTrigger>
                <SelectContent>
                  {airports.map((airport) => (
                    <SelectItem key={airport} value={airport}>
                      {airport}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Swap Icon - hidden on mobile, visible on tablet and up */}
          <div className="flex items-center justify-center py-2 md:py-0 md:items-end md:pb-2">
            <button
              type="button"
              onClick={() => {
                if (from && to) {
                  setFrom(to);
                  setTo(from);
                }
              }}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ArrowLeftRight className="h-4 w-4" />
            </button>
          </div>

          {/* Flying To */}
          <div className="flex flex-col gap-1 w-full md:w-2/12">
            <div className='flex items-center justify-between'>
              <label className="text-sm font-medium text-gray-700">Flying To</label>
              <div className="text-xs text-blue-500 hidden md:block">Anyplace</div>
            </div>
            <div className="relative">
              <Select value={to} onValueChange={setTo}>
                <SelectTrigger className="w-full h-11 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                  <SelectValue placeholder="Anyplace" />
                </SelectTrigger>
                <SelectContent>
                  {airports.map((airport) => (
                    <SelectItem key={airport} value={airport}>
                      {airport}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* When (Date Picker) */}
          <div className="flex flex-col gap-1 w-full md:w-2/12">
            <div className='flex items-center justify-between'>
              <label className="text-sm font-medium text-gray-700">When</label>
              <div className="text-xs text-blue-500 hidden md:block">Whenever</div>
            </div>
            <div className="relative">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full h-9 justify-start text-left font-normal px-3 border-gray-300 hover:bg-gray-50"
                    aria-label="Select date"
                  >
                    {date ? date.toLocaleDateString() : <span className="text-gray-500">Select Date</span>}
                    <CalIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    fromDate={new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Passengers */}
          <div className="flex flex-col gap-1 w-full md:w-1/12">
            <label className="text-sm font-medium text-gray-700">Passengers</label>
            <div className="flex items-center h-9 border border-gray-300 rounded-md px-3 justify-between bg-white">
              <button
                type="button"
                className="h-6 w-6 flex items-center justify-center hover:bg-gray-100 rounded"
                onClick={() => setPassengers(Math.max(1, passengers - 1))}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 flex items-center justify-center text-center font-medium">
                {passengers}
              </span>
              <button
                type="button"
                className="h-6 w-6 flex items-center justify-center hover:bg-gray-100 rounded"
                onClick={() => setPassengers(passengers + 1)}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Aircraft Category */}
          <div className="flex flex-col gap-1 w-full md:w-2/12">
            <div className='flex justify-between items-center'>
              <label className="text-sm font-medium text-gray-700">Aircraft Category</label>
              <div className="text-xs text-blue-500 hidden md:block">Any</div>
            </div>
            <div className="relative">
              <Select value={aircraftCategory} onValueChange={setAircraftCategory}>
                <SelectTrigger className="w-full h-9 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="midsize">Midsize Jet</SelectItem>
                  <SelectItem value="light">Light Jet</SelectItem>
                  <SelectItem value="heavy">Heavy Jet</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <Button variant="outline" size="sm" className="h-9 sm:py-0 py-1.5 cursor-pointer px-4 border-gray-300 hover:bg-gray-50 flex-1 sm:flex-none">
              <Filter className="h-4 w-4 mr-1" />
              Filter
            </Button>

            <Button variant="outline" size="sm" className="h-9 sm:py-0 py-1.5 px-3 cursor-pointer border-gray-300 hover:bg-gray-50 flex-1 sm:flex-none">
              <RotateCcw className="h-4 w-4" />
            </Button>

            <Button onClick={handleSubmit} className="bg-[#1B365D] hover:bg-[#1B365D] cursor-pointer text-white h-9 px-6 flex-1 sm:flex-none">
              Search Flights
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}