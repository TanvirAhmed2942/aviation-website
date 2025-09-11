"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User } from 'lucide-react';
import { useState } from 'react';

const Settings = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'Alex',
    email: 'alex@example',
    phone: '+1 (555)'
  });

  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handlePersonalInfoChange = (field: any, value: any) => {
    setPersonalInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePasswordChange = (field: any, value: any) => {
    setPasswords(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600 border-b pb-3">Manage your account preferences</p>
      </div>

      {/* Profile Image Upload */}
     <section className='flex flex-col gap-4'>
       <div className='border p-4 rounded-lg shadow'>
        <div className="mb-5">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-gray-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-1">Upload Image</h3>
              <p className="text-sm text-gray-600 mb-3">Min 400x400px, PNG or JPEG</p>
              <Button variant="outline" className="text-sm">
                Upload
              </Button>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Personal Information</h2>

          <div className="space-y-4">
            <div>
              <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2 block">
                Full Name
              </Label>
              <Input
                id="fullName"
                value={personalInfo.fullName}
                onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={personalInfo.email}
                onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                Phone
              </Label>
              <Input
                id="phone"
                value={personalInfo.phone}
                onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                className="w-full"
              />
            </div>

            <Button className="bg-slate-800 hover:bg-slate-900 text-white">
              Save Changes
            </Button>
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className='border p-4 rounded-lg shadow'>
        <div className="">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Change Password</h2>

          <div className="space-y-4">
            <div>
              <Label htmlFor="currentPassword" className="text-sm font-medium text-gray-700 mb-2 block">
                Current Password
              </Label>
              <Input
                id="currentPassword"
                type="password"
                value={passwords.currentPassword}
                onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="newPassword" className="text-sm font-medium text-gray-700 mb-2 block">
                New Password
              </Label>
              <Input
                id="newPassword"
                type="password"
                value={passwords.newPassword}
                onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 mb-2 block">
                Confirm New Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                value={passwords.confirmPassword}
                onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                className="w-full"
              />
            </div>

            <Button className="bg-slate-800 hover:bg-slate-900 text-white">
              Update Password
            </Button>
          </div>
        </div>
      </div>

      {/* Delete Account */}
      <div className='border border-red-200 p-4 rounded-lg shadow'>
        <div className="">
          <h2 className="text-lg font-semibold text-red-600 mb-4">Delete Account</h2>

          <p className="text-gray-600 text-sm mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>

          <Button
            variant="destructive"
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Delete Account
          </Button>
        </div>
      </div>
     </section>
    </div>
  );
};

export default Settings;