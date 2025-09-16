"use client";

import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';


export const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We help you avoid{' '}
                <span className="text-emerald-600">tax blunders.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Simplifying taxes with AI-powered solutions and expert guidance. 
                Get personalized tax strategies that save you money and time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" >
                <ArrowRight />
                Start Free Analysis
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                <span>Trusted by over 10,000 businesses</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                <span>Average savings of $15,000</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional tax consultants"
                className="rounded-2xl shadow-2xl"
                width={800}
                height={800}
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-emerald-100 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};