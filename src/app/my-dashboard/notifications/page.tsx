"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch'; // Import shadcn Switch
import { useState } from 'react';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
}

interface Preferences {
  priceAlerts: boolean;
  bookingUpdates: boolean;
  promotionalEmails: boolean;
  newsletter: boolean;
}

const Notifications = () => {
  const [preferences, setPreferences] = useState<Preferences>({
    priceAlerts: true,
    bookingUpdates: true,
    promotionalEmails: false,
    newsletter: true
  });

  const recentNotifications: Notification[] = [
    {
      id: 1,
      title: 'Price Drop Alert',
      message: 'The price for your saved flight JFK → LAX has dropped by $500',
      time: '2 hours ago'
    },
    {
      id: 2,
      title: 'Booking Confirmation',
      message: 'Your flight from MIA to LAS has been confirmed',
      time: '1 day ago'
    }
  ];

  const notificationPrefs = [
    { key: 'priceAlerts', label: 'Price Alerts' },
    { key: 'bookingUpdates', label: 'Booking Updates' },
    { key: 'promotionalEmails', label: 'Promotional Emails' },
    { key: 'newsletter', label: 'Newsletter' }
  ] as const;

  const togglePreference = (key: keyof Preferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Notifications</h1>
        <p className="text-gray-600 border-b pb-3">Stay updated with your flight alerts</p>
      </div>

      {/* Recent Notifications */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Notifications</h2>
          <Button
            variant="ghost"
            className="text-black hover:text-gray-900 border hover:bg-gray-50 text-sm font-normal"
          >
            Mark All as Read
          </Button>
        </div>

        <div className="space-y-4">
          {recentNotifications.map((notification) => (
            <Card key={notification.id} className="border-0  hover:bg-blue-50 transition-colors duration-200">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">
                      {notification.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {notification.message}
                    </p>
                  </div>
                  <span className="text-gray-500 text-sm ml-4">
                    {notification.time}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Notification Preferences */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Notification Preferences</h2>

        <div className="space-y-6">
          {notificationPrefs.map((pref) => (
            <div key={pref.key} className="flex items-center justify-between py-2">
              <span className="text-gray-900 font-medium">
                {pref.label}
              </span>
              <Switch
                checked={preferences[pref.key]}
                onCheckedChange={() => togglePreference(pref.key)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {recentNotifications.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No recent notifications.</p>
        </div>
      )}
    </div>
  );
};

export default Notifications;