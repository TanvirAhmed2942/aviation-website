// app/components/ModalAuth.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Checkbox } from '../../components/ui/checkbox';

type AuthStep =
  | "login"
  | "register"
  | "forgot-password"
  | "otp-verification"
  | "reset-password";

// Country codes for phone input
const countryCodes = [
  { code: '+1', country: 'US', name: 'United States' },
  { code: '+44', country: 'GB', name: 'United Kingdom' },
  { code: '+91', country: 'IN', name: 'India' },
  { code: '+86', country: 'CN', name: 'China' },
  { code: '+81', country: 'JP', name: 'Japan' },
  { code: '+49', country: 'DE', name: 'Germany' },
  { code: '+33', country: 'FR', name: 'France' },
  { code: '+39', country: 'IT', name: 'Italy' },
  { code: '+34', country: 'ES', name: 'Spain' },
  { code: '+7', country: 'RU', name: 'Russia' },
  { code: '+55', country: 'BR', name: 'Brazil' },
  { code: '+52', country: 'MX', name: 'Mexico' },
  { code: '+61', country: 'AU', name: 'Australia' },
  { code: '+82', country: 'KR', name: 'South Korea' },
  { code: '+90', country: 'TR', name: 'Turkey' },
  { code: '+971', country: 'AE', name: 'UAE' },
  { code: '+966', country: 'SA', name: 'Saudi Arabia' },
  { code: '+880', country: 'BD', name: 'Bangladesh' },
  { code: '+92', country: 'PK', name: 'Pakistan' },
  { code: '+62', country: 'ID', name: 'Indonesia' },
  { code: '+60', country: 'MY', name: 'Malaysia' },
  { code: '+65', country: 'SG', name: 'Singapore' },
  { code: '+66', country: 'TH', name: 'Thailand' },
  { code: '+84', country: 'VN', name: 'Vietnam' },
  { code: '+63', country: 'PH', name: 'Philippines' },
];

export default function ModalAuth() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<AuthStep>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validation function
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (step === "login") {
      if (!email) newErrors.email = "Email is required";
      if (!email.includes("@")) newErrors.email = "Please enter a valid email";
      if (!password) newErrors.password = "Password is required";
      if (password.length < 6) newErrors.password = "Password must be at least 6 characters";
    }

    if (step === "register") {
      if (!firstName.trim()) newErrors.firstName = "First name is required";
      if (!lastName.trim()) newErrors.lastName = "Last name is required";
      if (!email) newErrors.email = "Email is required";
      if (!email.includes("@")) newErrors.email = "Please enter a valid email";
      if (!phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
      if (phoneNumber.length < 10) newErrors.phoneNumber = "Please enter a valid phone number";
    }

    if (step === "forgot-password") {
      if (!email) newErrors.email = "Email is required";
      if (!email.includes("@")) newErrors.email = "Please enter a valid email";
    }

    if (step === "otp-verification") {
      const otpCode = otp.join("");
      if (otpCode.length !== 4) newErrors.otp = "Please enter complete verification code";
    }

    if (step === "reset-password") {
      if (!password) newErrors.password = "Password is required";
      if (password.length < 6) newErrors.password = "Password must be at least 6 characters";
      if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle OTP input change
  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digit

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next field
    if (value && index < 3) {
      const inputs = document.querySelectorAll('.otp-input');
      const nextInput = inputs[index + 1] as HTMLInputElement;
      nextInput?.focus();
    }

    // Clear errors when user types
    if (errors.otp) {
      setErrors(prev => ({ ...prev, otp: "" }));
    }
  };

  // Handle OTP backspace
  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const inputs = document.querySelectorAll('.otp-input');
      const prevInput = inputs[index - 1] as HTMLInputElement;
      prevInput?.focus();
    }
  };

  const handleLogin = () => {
    if (!validateForm()) return;

    console.log("Logging in:", { email, password });
    alert("Logged in successfully!");
    setIsOpen(false);
    handleClose();
  };

  const handleRegister = () => {
    if (!validateForm()) return;

    console.log("Registering:", {
      firstName,
      lastName,
      email,
      phoneNumber: `${countryCode}${phoneNumber}`
    });
    alert("Registration successful!");
    setStep("login");
  };

  const handleForgotPassword = () => {
    if (!validateForm()) return;

    console.log("Sending reset email to:", email);
    alert("Reset code sent to your email!");
    setStep("otp-verification");
  };

  const handleVerifyOtp = () => {
    if (!validateForm()) return;

    const code = otp.join("");
    console.log("Verifying OTP:", code);
    alert("OTP verified!");
    setStep("reset-password");
  };

  const handleResetPassword = () => {
    if (!validateForm()) return;

    console.log("Resetting password:", { email, password });
    alert("Password reset successful!");
    setStep("login");
  };

  const handleBack = () => {
    setErrors({}); // Clear errors when going back

    if (step === "register") {
      setStep("login");
    } else if (step === "forgot-password") {
      setStep("login");
    } else if (step === "otp-verification") {
      setStep("forgot-password");
    } else if (step === "reset-password") {
      setStep("otp-verification");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setStep("login");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFirstName("");
    setLastName("");
    setCountryCode("+1");
    setPhoneNumber("");
    setOtp(["", "", "", ""]);
    setErrors({});
  };

  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div>
      {/* Trigger */}
      <button onClick={() => setIsOpen(true)} className="text-sm text-blue-600 hover:underline">
        Sign In / Register
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-full max-w-md bg-white border-none shadow-lg p-0 rounded-xl overflow-hidden max-h-[90vh] overflow-y-auto">
          <Card className='border-none shadow-none p-0'>
            <CardHeader className="pt-10 text-center">
              <div className="flex items-center justify-center mb-2">
                <svg width="100" height="30" viewBox="0 0 120 24" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#003399">
                    NEXFLIGHT
                  </text>
                </svg>
              </div>
              <CardTitle className="text-xl text-center font-medium">
                {step === "login" && "Welcome back"}
                {step === "register" && "Create an account"}
                {step === "forgot-password" && "Reset Password"}
                {step === "otp-verification" && "Enter Verification Code"}
                {step === "reset-password" && "Reset Password"}
              </CardTitle>
              <CardDescription className="text-gray-600 text-sm mt-1">
                {step === "login" && "Please enter your details to log in."}
                {step === "register" && "Please enter your details to create an account."}
                {step === "forgot-password" && "Enter your email to reset your password."}
                {step === "otp-verification" && "We've sent a code to your email."}
                {step === "reset-password" && "Set a new password for your account."}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 px-6">
              {step === "login" && (
                <>
                  <Button
                    variant="outline"
                    className="w-full flex items-center h-10 cursor-pointer justify-center gap-2 border-gray-300 hover:bg-gray-50 transition"
                    onClick={() => alert("Google Login")}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F5"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.99 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.78 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Continue with Google
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full flex items-center h-10 cursor-pointer justify-center gap-2 border-gray-300 hover:bg-gray-50 transition"
                    onClick={() => alert("Apple Login")}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    Continue with Apple
                  </Button>

                  <div className="flex items-center my-4">
                    <div className="flex-1 border-t border-gray-300"></div>
                    <span className="px-4 text-xs text-gray-500">OR</span>
                    <div className="flex-1 border-t border-gray-300"></div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email-login">Email Address</Label>
                    <Input
                      id="email-login"
                      type="email"
                      className={`h-10 ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="hello@alignui.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        clearError('email');
                      }}
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password-login">Password</Label>
                    <Input
                      id="password-login"
                      type="password"
                      className={`h-10 ${errors.password ? 'border-red-500' : ''}`}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        clearError('password');
                      }}
                    />
                    {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="remember-me"
                        className="border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="text-gray-600 select-none text-sm cursor-pointer"
                      >
                        Remember me
                      </label>
                    </div>
                    <button
                      onClick={() => setStep("forgot-password")}
                      className="text-xs text-gray-600 cursor-pointer hover:underline"
                    >
                      Forgot Password?
                    </button>
                  </div>
                </>
              )}

              {step === "register" && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name *</Label>
                      <Input
                        id="first-name"
                        placeholder="John"
                        className={`h-10 ${errors.firstName ? 'border-red-500' : ''}`}
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                          clearError('firstName');
                        }}
                      />
                      {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name *</Label>
                      <Input
                        id="last-name"
                        placeholder="Doe"
                        className={`h-10 ${errors.lastName ? 'border-red-500' : ''}`}
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
                          clearError('lastName');
                        }}
                      />
                      {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email-register">Email Address *</Label>
                    <Input
                      id="email-register"
                      type="email"
                      className={`h-10 ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="hello@alignui.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        clearError('email');
                      }}
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <div className="flex gap-2">
                      <Select value={countryCode} onValueChange={setCountryCode}>
                        <SelectTrigger className="w-32 h-10">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="max-h-60">
                          {countryCodes.map((country) => (
                            <SelectItem key={country.country} value={country.code}>
                              <div className="flex items-center gap-2">
                                <span className="text-xs">{country.country}</span>
                                <span>{country.code}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="1234567890"
                        className={`flex-1 h-10 ${errors.phoneNumber ? 'border-red-500' : ''}`}
                        value={phoneNumber}
                        onChange={(e) => {
                          // Only allow numbers
                          const value = e.target.value.replace(/\D/g, '');
                          setPhoneNumber(value);
                          clearError('phoneNumber');
                        }}
                        maxLength={15}
                      />
                    </div>
                    {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}
                    <p className="text-xs text-gray-500">
                      Selected: {countryCode} {phoneNumber}
                    </p>
                  </div>
                </>
              )}

              {step === "forgot-password" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="email-forgot">Email Address *</Label>
                    <Input
                      id="email-forgot"
                      type="email"
                      className={`h-10 ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="hello@alignui.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        clearError('email');
                      }}
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                  </div>
                </>
              )}

              {step === "otp-verification" && (
                <>
                  <div className="space-y-4">
                    <div className="flex justify-center space-x-3">
                      {otp.map((digit, index) => (
                        <Input
                          key={index}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value.replace(/\D/g, ''))}
                          onKeyDown={(e) => handleOtpKeyDown(index, e)}
                          className={`w-12 h-12 text-center text-lg border-gray-300 focus:ring-blue-500 otp-input ${errors.otp ? 'border-red-500' : ''}`}
                        />
                      ))}
                    </div>
                    {errors.otp && <p className="text-red-500 text-xs text-center">{errors.otp}</p>}
                  </div>
                </>
              )}

              {step === "reset-password" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password *</Label>
                    <Input
                      id="new-password"
                      type="password"
                      className={`h-10 ${errors.password ? 'border-red-500' : ''}`}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        clearError('password');
                      }}
                    />
                    {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password *</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      className={`h-10 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        clearError('confirmPassword');
                      }}
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
                  </div>
                </>
              )}
            </CardContent>

            <CardFooter className="p-6 pt-0 flex flex-col gap-3">
              {step === "login" && (
                <>
                  <Button
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium h-10"
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                  <p className="text-xs text-center text-gray-500">
                    Don't have an account?{" "}
                    <button
                      onClick={() => {
                        setStep("register");
                        setErrors({});
                      }}
                      className="text-blue-950 font-medium hover:underline cursor-pointer"
                    >
                      Register
                    </button>
                  </p>
                </>
              )}

              {step === "register" && (
                <>
                  <Button
                    className="w-full bg-blue-900 h-10 hover:bg-blue-800 text-white font-medium"
                    onClick={handleRegister}
                  >
                    Create Account
                  </Button>
                  <p className="text-sm text-center text-gray-500">
                    Already have an account?{" "}
                    <button
                      onClick={() => {
                        setStep("login");
                        setErrors({});
                      }}
                      className="text-blue-950 font-medium hover:underline cursor-pointer"
                    >
                      Login
                    </button>
                  </p>
                </>
              )}

              {step === "forgot-password" && (
                <>
                  <Button
                    className="w-full bg-blue-900 h-10 hover:bg-blue-800 text-white font-medium"
                    onClick={handleForgotPassword}
                  >
                    Reset Password
                  </Button>
                  <p className="text-sm text-center text-gray-500">
                    Don't have access anymore?{" "}
                  </p>
                  <button
                    onClick={() => setStep("login")}
                    className="text-gray-900 text-sm hover:underline cursor-pointer"
                  >
                    Try another method
                  </button>
                </>
              )}

              {step === "otp-verification" && (
                <>
                  <Button
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium h-10"
                    onClick={handleVerifyOtp}
                  >
                    Submit Code
                  </Button>
                  <p className="text-xs text-center text-gray-500">
                    Experiencing issues receiving the code?{" "}
                    <button
                      onClick={() => alert("Resend code")}
                      className="text-blue-600 hover:underline cursor-pointer"
                    >
                      Resend code
                    </button>
                  </p>
                </>
              )}

              {step === "reset-password" && (
                <>
                  <Button
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium h-10"
                    onClick={handleResetPassword}
                  >
                    Reset Password
                  </Button>
                  <p className="text-xs text-center text-gray-500">
                    Remembered your password?{" "}
                    <button
                      onClick={() => setStep("login")}
                      className="text-blue-600 hover:underline cursor-pointer"
                    >
                      Go back to login
                    </button>
                  </p>
                </>
              )}

              {/* Back Button */}
              {step !== "login" && (
                <button
                  onClick={handleBack}
                  className="text-xs text-gray-500 hover:text-gray-700 underline"
                >
                  ← Back
                </button>
              )}
            </CardFooter>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
}