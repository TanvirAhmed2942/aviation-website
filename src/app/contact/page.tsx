"use client";

// import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";

// Shadcn Components

// Data declarations
const locations = [
  {
    id: 1,
    city: "Fort Lauderdale, Florida",
    address: "1170 NW 53rd St, Fort Lauderdale, FL 33309",
  },
  {
    id: 2,
    city: "Belo Horizonte, Brazil",
    address:
      "Rua Doutor Natalino Triginelli, 257. Bairro Jardim Atlântico - Belo Horizonte, MG 31710-Brazil",
  },
  {
    id: 3,
    city: "Asunción, Paraguay",
    address: "Autop. Silvio Pettirossi, Luque 2060, Paraguay",
  },
];

const contactInfo = [
  {
    id: 1,
    type: "Email",
    value: "contact@NEXFLIGHT.com",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    id: 2,
    type: "Phone",
    value: "+1 (555) 123-4567",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
  },
  {
    id: 3,
    type: "Address",
    value: "123 Aviation Way\nNew York, NY 10001 USA",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </>
    ),
  },
];

const faqData = [
  {
    value: "item-1",
    question: "What types of aircraft are available?",
    answer:
      "We offer a diverse fleet ranging from light jets to ultra-long-range aircraft. Our options include popular models like the Gulfstream G650, Bombardier Global 8000, and Cessna Citation series.",
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
];

const socialPosts = [
  {
    id: 1,
    gradient: "from-blue-400 to-blue-600",
    content: (
      <svg
        className="w-12 h-12 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    id: 2,
    gradient: "from-gray-600 to-gray-800",
    content: (
      <div className="text-center text-white">
        <div className="text-xs font-semibold mb-1">NEW TO FLEET</div>
      </div>
    ),
  },
  {
    id: 3,
    gradient: "from-orange-400 to-red-500",
    content: (
      <div className="text-center text-white">
        <div className="text-xs font-semibold mb-1">NEW TO FLEET</div>
      </div>
    ),
  },
  {
    id: 4,
    gradient: "from-pink-400 to-red-500",
    content: (
      <div className="text-center text-white">
        <div className="text-xs">✈️</div>
      </div>
    ),
  },
  {
    id: 5,
    gradient: "from-red-500 to-red-700",
    content: (
      <div className="text-center text-white">
        <div className="text-xs">🎅</div>
      </div>
    ),
  },
];

export default function ContactPage() {
  // const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-white z-50">
      {/* Hero Section */}
      <div className="relative">
        <section
          className="relative bg-gradient-to-r z-50 from-blue-600 to-indigo-800 text-white py-20 bg-cover h-[700px] bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/images/contact/image1.png')" }}
        >
          {/* World Map Section - Absolutely positioned relative to hero */}
          <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20">
            <div className="container mx-auto px-4">
              <div className="flex justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                  width="100%"
                  height="550"
                  style={{ border: 0, maxWidth: "1200px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Location Cards Section */}
      <section className="py-16 bg-white mt-64">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {locations.map((location) => (
              <Card key={location.id} className="text-center">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-gray-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {location.city}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {location.address}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Section - Form and FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form Section */}
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      type="tel"
                      id="phone"
                      placeholder="+1 314 322 0000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      type="text"
                      id="subject"
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Your message..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-3"
                >
                  {faqData.map((item) => (
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Direct Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info) => (
              <Card key={info.id} className="text-center">
                <CardContent className="p-8 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <svg
                      className="w-8 h-8 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {info.icon}
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.type}
                      </h3>
                      <p className="text-gray-600 whitespace-pre-line">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Social Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Social</h2>

          {/* Instagram-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-8">
            {socialPosts.map((post) => (
              <div
                key={post.id}
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative"
              >
                <div
                  className={`w-full h-full bg-gradient-to-br ${post.gradient} flex items-center justify-center`}
                >
                  {post.content}
                </div>
              </div>
            ))}
          </div>

          {/* Instagram Button */}
          <div className="text-center">
            <Button
              variant="outline"
              className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @nexflight
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
