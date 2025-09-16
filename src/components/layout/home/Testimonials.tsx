"use client";

import React from 'react';
import { Star, Quote } from 'lucide-react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Consultio Tax saved our business thousands in taxes. Their expertise and attention to detail is unmatched. Highly recommend their services!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Freelance Consultant',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Professional, reliable, and incredibly knowledgeable. They made tax season stress-free and helped me understand my financial position better.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Restaurant Owner',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The team at Consultio Tax is amazing. They handle all our bookkeeping and tax preparation, allowing us to focus on growing our business.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            We have achieved the property taxes on more than 10,000 properties.
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-emerald-700">
              <CardContent>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-emerald-400 mb-4" />
                
                <p className="text-white mb-6 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
                
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-emerald-200 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};