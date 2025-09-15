'use client';

import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';

// Shadcn Components

export default function ContactPage() {

  const [isScriptLoaded, setIsScriptLoaded] = useState(false);





  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-white z-50">
      {/* Hero Section */}


      <section
        className="relative bg-gradient-to-r z-50 from-blue-600 to-indigo-800 text-white py-20 bg-cover h-[700px] bg-center"
        style={{ backgroundImage: "url('/images/contact/image1.png')" }}
      >
        {/* <div className="absolute inset-0 bg-black/50"></div> */}
      </section>

      <div className="container mx-auto flex justify-center  ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.2318557244225!2d90.39956824489762!3d23.778885832677066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77094eace8b%3A0x1cd8c2d9239b6cb7!2sMohakhali%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1757920772811!5m2!1sen!2sbd"
          width="900"
          height="550"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Information Section */}
      <section className="py-5">
        <div className="container mx-auto w-full ">
          <div className="flex items-center gap-8 ">
            {/* Contact Form Section */}
            <div className="bg-white rounded-lg w-full shadow-md p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+1 316 322 0000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="How can we help?"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your message..."
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 px-4 rounded-md transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-md p-6 border w-full border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

              <Accordion type="single" collapsible className="w-full space-y-3">
                {[
                  {
                    value: "item-1",
                    question: "What types of aircraft are available?",
                    answer:
                      "We offer a diverse fleet ranging from light jets to ultra-long-range aircraft. Our options include popular models like the Gulfstream G650, Bombardier Global 6000, and Cessna Citation series.",
                  },
                  {
                    value: "item-2",
                    question: "How far in advance should I book?",
                    answer:
                      "While we can often accommodate last-minute requests, we recommend booking at least 2-3 days in advance for the best selection of aircraft and pricing.",
                  },
                  {
                    value: "item-3",
                    question: "What's included in the charter price?",
                    answer:
                      "Our charter prices include the aircraft, crew, fuel, standard catering, ground transportation at airports, and landing fees. Additional services may incur extra charges.",
                  },
                  {
                    value: "item-4",
                    question: "Do you offer empty leg flights?",
                    answer:
                      "Yes, we offer empty leg flights at discounted rates. These are great for cost-effective travel when routing allows.",
                  },
                  {
                    value: "item-5",
                    question: "What safety standards do you maintain?",
                    answer:
                      "We adhere to strict international aviation safety standards and work with certified operators and pilots trained in emergency procedures.",
                  },
                ].map((item) => (
                  <AccordionItem
                    key={item.value}
                    value={item.value}
                    className="border border-gray-200 rounded-md overflow-hidden"
                  >
                    <AccordionTrigger className="px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left font-medium text-gray-900 hover:no-underline transition-all flex justify-between items-center">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 bg-white border-t border-gray-200">
                      <p className="text-gray-700 text-sm">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Contact Info Cards */}

          </div>
        </div>
      </section>

      <div className="container mx-auto flex justify-between gap-5">
        <div className="bg-white flex flex-col items-start justify-center rounded-lg shadow-sm w-full p-6 border border-gray-200">
          <div className="flex items-center">
            <div className='flex flex-col gap-2 '>
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className=" text-gray-600 font-medium">Email</span>
            </div>
          </div>
          <p className="text-gray-600 font-medium">contact@NEXFLIGHT.com</p>
        </div>

        <div className="bg-white flex flex-col items-start justify-center rounded-lg shadow-sm p-6 w-full border border-gray-200">
          <div className="flex items-center  ">
            <div className='flex flex-col gap-2'>
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className=" text-gray-600 font-medium">Phone</span>
            </div>
          </div>
          <p className="text-gray-600 font-medium">+1 (555) 123-4567</p>
        </div>

        <div className="bg-white flex flex-col items-start justify-center rounded-lg shadow-sm p-6 border w-full border-gray-200">
          <div className="flex items-center ">
            <div className='flex flex-col gap-2'>
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className=" text-gray-600 font-medium">Address</span>
            </div>
          </div>
          <p className="text-gray-600 font-medium">123 Aviation Way<br />New York, NY 10001 USA</p>
        </div>
      </div>










      {/* Social Media Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Connect With Us</h2>
          <div className="flex justify-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
              <span className="sr-only">YouTube</span>
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}