"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ReferralProgram = () => {
  const referralStats = [
    { label: 'Total Referrals', value: '12' },
    { label: 'Successful Referrals', value: '8' },
    { label: 'Rewards Earned', value: '$800' },
    { label: 'Pending Rewards', value: '$400' }
  ];

  const referralHistory = [
    {
      id: 1,
      name: 'John Doe',
      date: 'Mar 1, 2025',
      status: 'Completed',
      reward: '$100'
    },
    {
      id: 2,
      name: 'Jane Smith',
      date: 'Mar 5, 2025',
      status: 'Pending',
      reward: '$100'
    }
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://NEXFLIGHT.com/ref/alex123');
    // You could add a toast notification here
  };

  return (
    <div className="">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Referral Program</h1>
        <p className="text-gray-600 border-b pb-3">Share Nexflight and earn rewards</p>
      </div>

      {/* Referral Link Section */}
      <Card className="border border-gray-200 mb-8">
        <CardContent className="">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Referral Link</h2>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
              <code className="text-gray-700">https://NEXFLIGHT.com/ref/alex123</code>
            </div>
            <Button 
              onClick={handleCopyLink}
              className="bg-gray-900 hover:bg-gray-800 text-white px-6"
            >
              Copy Link
            </Button>
          </div>
          
          <p className="text-gray-600 text-sm">
            Share this link with friends and earn $100 when they complete their first flight!
          </p>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {referralStats.map((stat, index) => (
          <Card key={index} className="border border-gray-200">
            <CardContent className="">
              <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Referral History */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Referral History</h2>
        
        <div className="space-y-4">
          {referralHistory.map((referral) => (
            <Card key={referral.id} className="border border-gray-200">
              <CardContent className="">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {referral.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {referral.date}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Badge 
                      variant="secondary"
                      className={`
                        ${referral.status === 'Completed' 
                          ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                          : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                        } border-0 font-medium px-3 py-1
                      `}
                    >
                      {referral.status}
                    </Badge>
                    
                    <span className="font-semibold text-gray-900 text-lg">
                      {referral.reward}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {referralHistory.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No referrals yet. Start sharing your link!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReferralProgram;