"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Clock, Filter, Grid, Heart, List, MapPin, Plane, Users } from "lucide-react";
import Image from 'next/image';
import { useState } from "react";

type FlightRating = "GOOD" | "FAIR" | "RECOMMENDED";


type Flight = {
  id: number;
  aircraft: string;
  origin: string;
  destination: string;
  departure: string;
  time: string;
  duration: string;
  model: string;
  passengers: number;
  price: number;
  rating: FlightRating;
  imageUrl: string;
};

const allFlights: Flight[] = [
  {
    id: 1,
    aircraft: "KSTP",
    origin: "St Paul, Minnesota, USA",
    destination: "San Antonio, Texas, USA",
    departure: "05/06/2025",
    time: "06:30 PM",
    duration: "3h 1m",
    model: "Beechcraft Beechjet 400A",
    passengers: 7,
    price: 22000,
    rating: "GOOD",
    imageUrl:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=300&h=200&fit=crop",
  },
  {
    id: 2,
    aircraft: "KLUK",
    origin: "St Paul, Minnesota, USA",
    destination: "San Antonio, Texas, USA",
    departure: "05/06/2025",
    time: "06:30 PM",
    duration: "0h 45m",
    model: "Bombardier Challenger 601",
    passengers: 4,
    price: 29623,
    rating: "RECOMMENDED",
    imageUrl:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&h=200&fit=crop",
  },
  {
    id: 3,
    aircraft: "KFRG",
    origin: "St Paul, Minnesota, USA",
    destination: "San Antonio, Texas, USA",
    departure: "05/06/2025",
    time: "06:30 PM",
    duration: "2h 54m",
    model: "Cessna Citation V",
    passengers: 5,
    price: 29623,
    rating: "FAIR",
    imageUrl:
      "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=300&h=200&fit=crop",
  },
];

const countryCodes = [
  { code: "+1", country: "US", name: "United States" },
  { code: "+44", country: "GB", name: "United Kingdom" },
  { code: "+91", country: "IN", name: "India" },
  { code: "+86", country: "CN", name: "China" },
  { code: "+81", country: "JP", name: "Japan" },
  { code: "+49", country: "DE", name: "Germany" },
  { code: "+33", country: "FR", name: "France" },
  { code: "+39", country: "IT", name: "Italy" },
  { code: "+34", country: "ES", name: "Spain" },
  { code: "+7", country: "RU", name: "Russia" },
  { code: "+55", country: "BR", name: "Brazil" },
  { code: "+52", country: "MX", name: "Mexico" },
  { code: "+61", country: "AU", name: "Australia" },
  { code: "+82", country: "KR", name: "South Korea" },
  { code: "+90", country: "TR", name: "Turkey" },
  { code: "+971", country: "AE", name: "UAE" },
  { code: "+966", country: "SA", name: "Saudi Arabia" },
  { code: "+880", country: "BD", name: "Bangladesh" },
  { code: "+92", country: "PK", name: "Pakistan" },
  { code: "+62", country: "ID", name: "Indonesia" },
  { code: "+60", country: "MY", name: "Malaysia" },
  { code: "+65", country: "SG", name: "Singapore" },
  { code: "+66", country: "TH", name: "Thailand" },
  { code: "+84", country: "VN", name: "Vietnam" },
  { code: "+63", country: "PH", name: "Philippines" },
];

const ITEMS_PER_PAGE = 7;


type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (userData: { email: string; firstName: string; lastName: string }) => void;
};
// Authentication Modal Component
function AuthModal({ isOpen, onClose, onLoginSuccess }: AuthModalProps) {
  const [step, setStep] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (step === "login") {
      if (!email) newErrors.email = "Email is required";
      if (!email.includes("@")) newErrors.email = "Please enter a valid email";
      if (!password) newErrors.password = "Password is required";
      if (password.length < 6)
        newErrors.password = "Password must be at least 6 characters";
    }

    if (step === "register") {
      if (!firstName.trim()) newErrors.firstName = "First name is required";
      if (!lastName.trim()) newErrors.lastName = "Last name is required";
      if (!email) newErrors.email = "Email is required";
      if (!email.includes("@")) newErrors.email = "Please enter a valid email";
      if (!phoneNumber.trim())
        newErrors.phoneNumber = "Phone number is required";
      if (phoneNumber.length < 10)
        newErrors.phoneNumber = "Please enter a valid phone number";
    }

    if (step === "forgot-password") {
      if (!email) newErrors.email = "Email is required";
      if (!email.includes("@")) newErrors.email = "Please enter a valid email";
    }

    if (step === "otp-verification") {
      const otpCode = otp.join("");
      if (otpCode.length !== 4)
        newErrors.otp = "Please enter complete verification code";
    }

    if (step === "reset-password") {
      if (!password) newErrors.password = "Password is required";
      if (password.length < 6)
        newErrors.password = "Password must be at least 6 characters";
      if (password !== confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      const inputs = document.querySelectorAll(".otp-input");
      const nextInput = inputs[index + 1];
      nextInput?.focus();
    }

    if (errors.otp) {
      setErrors((prev) => ({ ...prev, otp: "" }));
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const inputs = document.querySelectorAll(".otp-input");
      const prevInput = inputs[index - 1];
      prevInput?.focus();
    }
  };

  const handleLogin = () => {
    if (!validateForm()) return;
    console.log("Logging in:", { email, password });
    onLoginSuccess({ email, firstName: "John", lastName: "Doe" });
    handleClose();
  };

  const handleRegister = () => {
    if (!validateForm()) return;
    console.log("Registering:", {
      firstName,
      lastName,
      email,
      phoneNumber: `${countryCode}${phoneNumber}`,
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
    setErrors({});

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
    onClose();
  };

  const clearError = (field) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-full max-w-md bg-white border-none shadow-lg p-0 rounded-xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <Card className="border-none shadow-none p-0">
          <CardHeader className="pt-10 text-center">
            <div className="flex items-center justify-center mb-2">
              <svg
                width="100"
                height="30"
                viewBox="0 0 120 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="0"
                  y="18"
                  fontFamily="Arial, sans-serif"
                  fontSize="18"
                  fontWeight="bold"
                  fill="#003399"
                >
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
              {step === "register" &&
                "Please enter your details to create an account."}
              {step === "forgot-password" &&
                "Enter your email to reset your password."}
              {step === "otp-verification" &&
                "We've sent a code to your email."}
              {step === "reset-password" &&
                "Set a new password for your account."}
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
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
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
                    className={`h-10 ${errors.email ? "border-red-500" : ""}`}
                    placeholder="hello@alignui.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      clearError("email");
                    }}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password-login">Password</Label>
                  <Input
                    id="password-login"
                    type="password"
                    className={`h-10 ${errors.password ? "border-red-500" : ""}`}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      clearError("password");
                    }}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs">{errors.password}</p>
                  )}
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
                      className={`h-10 ${errors.firstName ? "border-red-500" : ""}`}
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                        clearError("firstName");
                      }}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name *</Label>
                    <Input
                      id="last-name"
                      placeholder="Doe"
                      className={`h-10 ${errors.lastName ? "border-red-500" : ""}`}
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                        clearError("lastName");
                      }}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email-register">Email Address *</Label>
                  <Input
                    id="email-register"
                    type="email"
                    className={`h-10 ${errors.email ? "border-red-500" : ""}`}
                    placeholder="hello@alignui.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      clearError("email");
                    }}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
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
                      className={`flex-1 h-10 ${errors.phoneNumber ? "border-red-500" : ""}`}
                      value={phoneNumber}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        setPhoneNumber(value);
                        clearError("phoneNumber");
                      }}
                      maxLength={15}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-xs">
                      {errors.phoneNumber}
                    </p>
                  )}
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
                    className={`h-10 ${errors.email ? "border-red-500" : ""}`}
                    placeholder="hello@alignui.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      clearError("email");
                    }}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
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
                        onChange={(e) =>
                          handleOtpChange(index, e.target.value.replace(/\D/g, ""))
                        }
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className={`w-12 h-12 text-center text-lg border-gray-300 focus:ring-blue-500 otp-input ${errors.otp ? "border-red-500" : ""}`}
                      />
                    ))}
                  </div>
                  {errors.otp && (
                    <p className="text-red-500 text-xs text-center">
                      {errors.otp}
                    </p>
                  )}
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
                    className={`h-10 ${errors.password ? "border-red-500" : ""}`}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      clearError("password");
                    }}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs">{errors.password}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password *</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    className={`h-10 ${errors.confirmPassword ? "border-red-500" : ""}`}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      clearError("confirmPassword");
                    }}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs">
                      {errors.confirmPassword}
                    </p>
                  )}
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
                  Don&apos;t have an account?{" "}
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
                  Don&apos;t have access anymore?{" "}
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
  );
}

export default function FlightBookingSystem() {
  const [currentPage, setCurrentPage] = useState(1);
  const [likedFlights, setLikedFlights] = useState(new Set());
  const [viewMode, setViewMode] = useState('table');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [selectedFlightForBooking, setSelectedFlightForBooking] = useState(null);

  const totalPages = Math.ceil(allFlights.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedFlights = allFlights.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleLoginSuccess = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    setShowAuthModal(false);
    // If user was trying to book a flight, open booking sheet after login
    if (selectedFlightForBooking) {
      // The booking sheet will open automatically since user is now logged in
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const handleBookNowClick = (flight) => {
    if (!isLoggedIn) {
      setSelectedFlightForBooking(flight);
      setShowAuthModal(true);
    } else {
      setSelectedFlightForBooking(flight);
    }
  };

  const toggleLike = (flightId) => {
    const newLikedFlights = new Set(likedFlights);
    if (newLikedFlights.has(flightId)) {
      newLikedFlights.delete(flightId);
    } else {
      newLikedFlights.add(flightId);
    }
    setLikedFlights(newLikedFlights);
  };

  const FlightDetailsDrawer = ({ flight }) => (
    <SheetContent className="w-full sm:w-96 overflow-y-auto px-5">
      <SheetHeader className="border-b pb-4">
        <SheetTitle className="flex items-center gap-2 text-lg">
          <Plane className="h-5 w-5" />
          Flight Details
        </SheetTitle>
      </SheetHeader>

      <div className="space-y-6 pt-4">
        <div className="relative">
          <Image
            src={flight.imageUrl}
            alt={flight.model}
            width={1000}
            height={1000}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute top-2 right-2">
            {flight.rating === "RECOMMENDED" && (
              <Badge className="bg-blue-600">RECOMMENDED</Badge>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">{flight.model}</h3>
          <p className="text-gray-600">{flight.aircraft}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">From</Label>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
              <div className="min-w-0">
                <p className="font-medium">{flight.aircraft}</p>
                <p className="text-sm text-gray-600 truncate">{flight.origin}</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">To</Label>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
              <div className="min-w-0">
                <p className="font-medium">KSAT</p>
                <p className="text-sm text-gray-600 truncate">{flight.destination}</p>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-medium">Departure</Label>
            <div className="flex items-center gap-2 mt-1">
              <Clock className="h-4 w-4 text-gray-400 flex-shrink-0" />
              <div>
                <p className="font-medium">{flight.time}</p>
                <p className="text-sm text-gray-600">{flight.departure}</p>
              </div>
            </div>
          </div>

          <div>
            <Label className="text-sm font-medium">Duration</Label>
            <p className="font-medium mt-1">{flight.duration}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-medium">Passengers</Label>
            <div className="flex items-center gap-2 mt-1">
              <Users className="h-4 w-4 text-gray-400 flex-shrink-0" />
              <p className="font-medium">Up to {flight.passengers}</p>
            </div>
          </div>

          <div>
            <Label className="text-sm font-medium">Price</Label>
            <p className="text-2xl font-bold text-[#1B365D] mt-1">
              ${flight.price.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Aircraft Features</h4>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>• High-speed Wi-Fi available</li>
            <li>• Luxurious leather seating</li>
            <li>• Climate controlled cabin</li>
            <li>• Professional flight crew</li>
          </ul>
        </div>
      </div>
    </SheetContent>
  );

  const BookingDrawer = ({ flight, isOpen, onOpenChange }) => (
    <Sheet open={isOpen && isLoggedIn} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:w-96 overflow-y-auto ">
        <SheetHeader className="border-b pb-4">
          <SheetTitle>Book Your Flight</SheetTitle>
        </SheetHeader>

        <div className="space-y-6 pt-4 pb-5 px-5">
          <div className="bg-[#1B365D]  text-white p-4 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold truncate">{flight.aircraft} → KSAT</h3>
                <p className="text-sm opacity-90 break-words">
                  {flight.origin} to {flight.destination}
                </p>
              </div>
              <p className="text-xl font-bold whitespace-nowrap">
                ${flight.price.toLocaleString()}
              </p>
            </div>

            <div className="mt-3 space-y-1 text-sm opacity-90">
              <p>
                Departure: {flight.departure} {flight.time}
              </p>
              <p>Duration: {flight.duration}</p>
              <p>Aircraft: {flight.model}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label>Email Address</Label>
              <Input
                type="email"
                placeholder={user?.email || "your-email@email.com"}
                value={user?.email || ""}
                className="mt-1"
                readOnly
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Passengers</Label>
                <Input
                  type="number"
                  defaultValue="1"
                  min="1"
                  max={flight.passengers}
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Luggage Items</Label>
                <Input type="number" defaultValue="0" min="0" className="mt-1" />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h4 className="font-semibold">
                Would you like to include amenities?
              </h4>

              <div className="flex items-center justify-between">
                <Label>Include Amenities</Label>
                <Switch />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm">Pets</Label>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <Label className="text-sm">Catering</Label>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <Label className="text-sm">Ground Transportation</Label>
                  <Switch />
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h4 className="font-semibold">
                Dietary Preferences & Restrictions
              </h4>

              <div className="space-y-3">
                <div>
                  <Label className="text-sm">Celery</Label>
                  <p className="text-xs text-gray-500">
                    Products containing celery
                  </p>
                </div>

                <div>
                  <Label className="text-sm">Eggs</Label>
                  <p className="text-xs text-gray-500">
                    Products containing eggs
                  </p>
                </div>

                <div>
                  <Label className="text-sm">Fish</Label>
                  <p className="text-xs text-gray-500">
                    Products containing fish
                  </p>
                </div>

                <div>
                  <Label className="text-sm">Gluten (Cereals)</Label>
                  <p className="text-xs text-gray-500">
                    Cereals containing gluten such as wheat, barley
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Label>Special Requests</Label>
              <Textarea
                placeholder="E.g. preferred departure time, special dietary requirements, etc."
                className="mt-1"
                rows={3}
              />
            </div>

            <Button className="w-full bg-[#1B365D] hover:bg-[#1B365D]/90 text-white py-3">
              Submit Request
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  const FlightCard = ({ flight }) => (
    <div className="bg-white border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-24 h-32 sm:h-16">
          <Image
            src={flight.imageUrl}
            alt={flight.model}
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded"
          />
        </div>

        <div className="flex-1 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-semibold text-lg">{flight.model}</h3>
              <p className="text-sm text-gray-600">{flight.aircraft}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-[#1B365D]">
                ${flight.price.toLocaleString()}
              </p>
              {flight.rating === "RECOMMENDED" && (
                <Badge variant="secondary" className="text-xs mt-1">
                  RECOMMENDED
                </Badge>
              )}
              {flight.rating === "GOOD" && (
                <Badge className="text-xs mt-1 bg-green-100 text-green-800">
                  ↑ GOOD
                </Badge>
              )}
              {flight.rating === "FAIR" && (
                <Badge className="text-xs mt-1 bg-blue-100 text-blue-800">
                  ↑ FAIR
                </Badge>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            <div>
              <p className="text-gray-500">From</p>
              <p className="font-medium">{flight.aircraft}</p>
              <p className="text-xs text-gray-500 truncate">{flight.origin}</p>
            </div>
            <div>
              <p className="text-gray-500">To</p>
              <p className="font-medium">KSAT</p>
              <p className="text-xs text-gray-500 truncate">{flight.destination}</p>
            </div>
            <div>
              <p className="text-gray-500">Departure</p>
              <p className="font-medium">{flight.time}</p>
              <p className="text-xs text-gray-500">{flight.departure}</p>
            </div>
            <div>
              <p className="text-gray-500">Duration</p>
              <p className="font-medium">{flight.duration}</p>
              <p className="text-xs text-gray-500">{flight.passengers} passengers</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border"
              onClick={() => toggleLike(flight.id)}
            >
              <Heart
                className={`h-4 w-4 ${likedFlights.has(flight.id)
                  ? "fill-red-500 text-red-500"
                  : "text-gray-400"
                  }`}
              />
              <span className="sm:hidden">Like</span>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  View Details
                </Button>
              </SheetTrigger>
              <FlightDetailsDrawer flight={flight} />
            </Sheet>

            <Button
              size="sm"
              className="w-full sm:w-auto bg-[#1B365D] hover:bg-[#1B365D]/90 text-white"
              onClick={() => handleBookNowClick(flight)}
            >
              Book Now <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto py-5">
      {/* Header with Login Status */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#1B365D]">Flight Search Results</h1>
            <p className="text-gray-600">Find your perfect flight</p>
          </div>
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">
                  Welcome, {user?.firstName || 'User'}!
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAuthModal(true)}
              >
                Sign In / Register
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              LIVE
            </span>
            <span>{allFlights.length} flights available</span>
            <span className="hidden sm:inline">– Price range: N/A</span>
            <span className="hidden md:inline">– Results include nearby airports</span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>

            <div className="hidden sm:flex border rounded-md">
              <Button
                variant={viewMode === 'table' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('table')}
                className="rounded-r-none"
              >
                <List className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'cards' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('cards')}
                className="rounded-l-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet View - Always Cards */}
      <div className="block lg:hidden">
        <div className="space-y-4">
          {paginatedFlights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>
      </div>

      {/* Desktop View - Table or Cards */}
      <div className="hidden lg:block">
        {viewMode === 'table' ? (
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 font-medium border-b w-20">
                    Aircraft
                  </th>
                  <th className="text-left py-3 px-4 font-medium border-b">
                    Origin
                  </th>
                  <th className="text-left py-3 px-4 font-medium border-b">
                    Destination
                  </th>
                  <th className="text-left py-3 px-4 font-medium border-b">
                    Departure
                  </th>
                  <th className="text-left py-3 px-4 font-medium border-b">
                    Duration
                  </th>
                  <th className="text-left py-3 px-4 font-medium border-b">
                    Aircraft Model
                  </th>
                  <th className="text-left py-3 px-4 font-medium border-b">
                    Passengers
                  </th>
                  <th className="text-left py-3 px-4 font-medium border-b">
                    Price
                  </th>
                  <th className="text-center py-3 px-4 font-medium border-b w-48">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedFlights.map((flight) => (
                  <tr
                    key={flight.id}
                    className="hover:bg-gray-50 transition-colors border-b last:border-b-0"
                  >
                    <td className="py-3 px-4">
                      <Image
                        src={flight.imageUrl}
                        alt={flight.model}
                        width={1000}
                        height={1000}
                        className="w-16 h-10 object-cover rounded"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium">{flight.aircraft}</div>
                      <div className="text-sm text-gray-600 max-w-32 truncate">{flight.origin}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium">KSAT</div>
                      <div className="text-sm text-gray-600 max-w-32 truncate">
                        {flight.destination}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div>{flight.departure}</div>
                      <div className="text-sm text-gray-600">{flight.time}</div>
                    </td>
                    <td className="py-3 px-4">{flight.duration}</td>
                    <td className="py-3 px-4 max-w-40">
                      <div className="truncate">{flight.model}</div>
                    </td>
                    <td className="py-3 px-4">{flight.passengers}</td>
                    <td className="py-3 px-4">
                      <div className="font-semibold">
                        ${flight.price.toLocaleString()}
                      </div>
                      {flight.rating === "RECOMMENDED" && (
                        <Badge variant="secondary" className="text-xs mt-1">
                          RECOMMENDED
                        </Badge>
                      )}
                      {flight.rating === "GOOD" && (
                        <Badge className="text-xs mt-1 bg-green-100 text-green-800">
                          ↑ GOOD
                        </Badge>
                      )}
                      {flight.rating === "FAIR" && (
                        <Badge className="text-xs mt-1 bg-blue-100 text-blue-800">
                          ↑ FAIR
                        </Badge>
                      )}
                    </td>
                    <td className="px-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-5 w-11 border"
                          onClick={() => toggleLike(flight.id)}
                        >
                          <Heart
                            className={`h-4 w-4 ${likedFlights.has(flight.id)
                              ? "fill-red-500 text-red-500"
                              : "text-gray-400"
                              }`}
                          />
                        </Button>

                        <Sheet>
                          <SheetTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-xs p-5 cursor-pointer"
                            >
                              View Details
                            </Button>
                          </SheetTrigger>
                          <FlightDetailsDrawer flight={flight} />
                        </Sheet>

                        <Button
                          size="sm"
                          className="bg-[#1B365D] hover:bg-[#1B365D]/90 p-5 text-white"
                          onClick={() => handleBookNowClick(flight)}
                        >
                          Book Now <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {paginatedFlights.map((flight) => (
              <FlightCard key={flight.id} flight={flight} />
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <p className="text-sm text-gray-600 order-2 sm:order-1">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex items-center gap-2 order-1 sm:order-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm"
            >
              Previous
            </Button>

            <div className="hidden sm:flex items-center gap-1">
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(pageNum)}
                    className="w-8 h-8 p-0"
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm"
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => {
          setShowAuthModal(false);
          setSelectedFlightForBooking(null);
        }}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Booking Drawer */}
      {selectedFlightForBooking && (
        <BookingDrawer
          flight={selectedFlightForBooking}
          isOpen={!!selectedFlightForBooking && isLoggedIn}
          onOpenChange={(open: boolean) => {
            if (!open) {
              setSelectedFlightForBooking(null);
            }
          }}
        />
      )}
    </div>
  );
}