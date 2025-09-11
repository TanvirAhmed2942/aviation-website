"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const PrivateJetWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const values = [
    {
      title: 'Safety First',
      description: 'We maintain the highest safety standards in the industry, with rigorous protocols and continuous monitoring.'
    },
    {
      title: 'Innovation',
      description: 'We leverage cutting-edge technology to enhance every aspect of private air travel.'
    },
    {
      title: 'Sustainability',
      description: "We're committed to reducing our environmental impact through sustainable practices and green initiatives."
    }
  ];

  const heroImages = [
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1583726461242-5e35c01ec4bc?w=800&h=500&fit=crop&crop=center'
  ];

  const newsArticles = [
    {
      id: 1,
      date: 'March 15, 2025',
      category: 'Industry Trends',
      title: 'The Future of Private Aviation',
      excerpt: 'Discover how technology is shaping the future of private flights.',
      author: 'Alex Johnson',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 2,
      date: 'March 10, 2025',
      category: 'Travel',
      title: 'Top 5 Private Jet Destinations for 2025',
      excerpt: 'Explore the most luxurious and exclusive destinations.',
      author: 'Sarah Williams',
      image: 'https://images.unsplash.com/photo-1583726461242-5e35c01ec4bc?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 3,
      date: 'March 8, 2025',
      category: 'Sustainability',
      title: 'Sustainable Aviation: The Green Revolution',
      excerpt: 'How private aviation is embracing sustainability.',
      author: 'Michael Brown',
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=300&h=200&fit=crop&crop=center'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Values Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section with Image Slider */}
      <div className="relative">
        <div className="relative h-96 overflow-hidden">
          <img
            src={heroImages[currentSlide]}
            alt="Private Jet"
            className="w-full h-full object-cover"
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Company Section Overlay */}
        <div className="relative bg-slate-800 text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 opacity-95"></div>
          <div className="relative max-w-4xl mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Our Company
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              NexFlight is your trusted private jet brokerage, offering seamless access to luxury charters worldwide. Whether for business or
              leisure, we provide personalized solutions to elevate your travel experience.
            </p>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-slate-800 px-8 py-3"
            >
              View Our Brochure
            </Button>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Latest News
          </h2>
          <Button
            variant="ghost"
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 flex items-center gap-2"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <Card key={article.id} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.category}</span>
                </div>

                <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    By {article.author}
                  </span>
                  <Button
                    variant="ghost"
                    className="text-sm text-gray-600 hover:text-gray-900 p-0 h-auto"
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivateJetWebsite;