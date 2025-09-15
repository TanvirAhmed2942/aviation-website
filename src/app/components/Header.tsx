import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Bell,
  CreditCard,
  DollarSign,
  Heart,
  Plane,
  User
} from 'lucide-react';

export default function Header() {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className='flex items-center gap-5'>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Plane className="w-5 h-5 text-white transform rotate-45" />
              </div>
              <span className="text-xl font-bold text-gray-900">NEXFLIGHT</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900 font-medium">
                Home
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900 font-medium">
                Charter
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900 font-medium">
                Empty Legs
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900 font-medium">
                Helicopter
              </Button>
              <Button variant="ghost" className="text-gray-700 hover:text-gray-900 font-medium">
                Contact
              </Button>
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Golden Jet Card */}
            <Card className="px-3 py-2 bg-yellow-50 shadow-0 border border-yellow-500 cursor-pointer rounded-sm select-none">
              <div className="flex items-center space-x-2 text-white">
                <CreditCard className="w-4 h-4 text-yellow-500" />
                <span className="font-medium text-sm text-yellow-500">Golden Jet Card</span>
                <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Card>

            {/* Earn $400 */}
            <Card className="px-3 py-2 bg-white shadow-0 border border-gray-300 cursor-pointer rounded-sm select-none">
              <div className="flex items-center space-x-2 text-white">
                <DollarSign className="w-4 h-4 text-[#1B365D]" />
                <span className="font-medium text-sm text-[#1B365D]">Earn $400</span>
              </div>
            </Card>

            {/* Action Icons */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
                <Heart className="w-5 h-5" />
              </Button>

              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 relative">
                <Bell className="w-7 h-7" />
                <Badge className="absolute top-1 right-2 w-2 h-2 p-0 bg-red-500 rounded-full"></Badge>
              </Button>

              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (hidden by default) */}
      <div className="md:hidden border-t border-gray-200">
        <div className="px-4 py-3 space-y-2">
          <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-gray-900">
            Home
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-gray-900">
            Charter
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-gray-900">
            Empty Legs
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-gray-900">
            Helicopter
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-gray-900">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
}