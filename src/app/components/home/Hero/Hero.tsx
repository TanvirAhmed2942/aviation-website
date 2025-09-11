"use client";

import { useEffect, useState } from 'react';
import FlightSearchForm from './FlightSearchForm';
import Navbar from './Navber';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/hero.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-blue-950/50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}

        {/* Moving gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-8">
        <div className={`text-center mb-12 transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl text-white mb-6 tracking-wide">
            <span className="inline-block animate-[fadeInUp_1s_ease-out_0.7s_both] font-semibold">FLY</span>
            <span className="inline-block animate-[fadeInUp_1s_ease-out_0.9s_both] mx-4 font-semibold">SMARTER.</span>
            <span className="inline-block animate-[fadeInUp_1s_ease-out_1.1s_both] font-normal bg-clip-text text-white">
              FLY NEXFLIGHT.
            </span>
          </h1>
          <p className={`text-xl text-white/90 max-w-2xl mx-auto transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            Luxury aircraft charter at your fingertips.
          </p>
        </div>

        {/* Flight Search Form */}
        <FlightSearchForm />
      </main>

      <style jsx>{`
        @keyframes fly {
          0% { transform: translateX(100vw) translateY(0) rotate(45deg); }
          50% { transform: translateX(-50vw) translateY(-50px) rotate(45deg); }
          100% { transform: translateX(-100vw) translateY(0) rotate(45deg); }
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
          from { opacity: 0; }
          to { opacity: 1; }
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
      `}</style>
    </div>
  );
};

export default Hero;