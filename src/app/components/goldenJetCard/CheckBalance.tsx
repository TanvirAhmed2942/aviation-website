import React from "react";
import { Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function CheckBalance() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-8">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Jet Card Balance
          </h1>
          <p className="text-gray-600">
            Manage your Golden Jet Card balance and view transaction history
          </p>
        </div>
      </div>

      {/* Balance Card Section */}
      <div className="px-6 pb-8">
        <div className="container mx-auto">
          <Card className="bg-slate-800 text-white border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex justify-between items-center">
                {/* Left side - Balance info */}
                <div>
                  <div className="text-sm text-slate-300 mb-2">
                    Available Balance
                  </div>
                  <div className="text-4xl font-bold mb-4">$56,023</div>
                  <div className="flex items-center gap-2 mb-6">
                    <Badge className="bg-yellow-500 text-black hover:bg-yellow-500 font-medium">
                      Gold
                    </Badge>
                    <span className="text-sm text-slate-300">
                      Member since March 2025
                    </span>
                  </div>
                  <Button className="bg-slate-700 hover:bg-slate-600 text-white border border-slate-600">
                    Add Funds
                  </Button>
                </div>

                {/* Right side - Card visual */}
                <div className="flex-shrink-0">
                  <Card className="w-72 h-44 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 border-0 shadow-xl relative overflow-hidden transform rotate-12">
                    <CardContent className="p-0 h-full relative">
                      <div className="absolute top-3 right-3">
                        <Plane className="w-5 h-5 text-white transform rotate-45" />
                      </div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <div className="text-lg font-bold tracking-wide">
                          GOLDEN
                        </div>
                        <div className="text-base font-bold tracking-wide">
                          JET CARD
                        </div>
                        <div className="text-xs mt-2 opacity-90 uppercase tracking-wider">
                          Simple Flexible Private Jet Travel
                        </div>
                        <div className="text-xs mt-4 opacity-75 uppercase tracking-wider">
                          Card...
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-20 rounded-full -mr-10 -mt-10"></div>
                      <div className="absolute bottom-0 left-0 w-12 h-12 bg-white opacity-10 rounded-full -ml-6 -mb-6"></div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 pb-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Last Transaction */}
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-1">
                  Last Transaction
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  March 15, 2025
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Flights */}
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-1">
                  Upcoming Flights
                </div>
                <div className="text-lg font-semibold text-gray-900">2</div>
              </CardContent>
            </Card>

            {/* Total Flights */}
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-1">Total Flights</div>
                <div className="text-lg font-semibold text-gray-900">8</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="px-6 pb-8">
        <div className="container mx-auto">
          <Card className="bg-white">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Recent Transactions
              </h2>

              <div className="space-y-4">
                {/* Deposit Transaction */}
                <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0">
                  <div>
                    <div className="font-medium text-gray-900">Deposit</div>
                    <div className="text-sm text-gray-500">Mar 1, 2025</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-600">+$50,000</div>
                    <div className="text-sm text-gray-500">Completed</div>
                  </div>
                </div>

                {/* Flight Payment Transaction */}
                <div className="flex items-center justify-between py-4">
                  <div>
                    <div className="font-medium text-gray-900">
                      Flight Payment
                    </div>
                    <div className="text-sm text-gray-500">JFK → LAX</div>
                    <div className="text-sm text-gray-500">Mar 15, 2025</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-red-600">-$12,977</div>
                    <div className="text-sm text-gray-500">Completed</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 pb-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4">
            <Button className="bg-slate-800 hover:bg-slate-700 text-white">
              Book a Flight
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              View Statement
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Download Receipt
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 text-gray-500 py-6 px-6 mt-12">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div>© 2025 NEXFLIGHT. All rights reserved.</div>
          <div>Version 1.0.0</div>
        </div>
      </div>
    </div>
  );
}

export default CheckBalance;
