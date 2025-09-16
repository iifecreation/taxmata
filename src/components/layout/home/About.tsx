"use client";

import React from 'react';
import { ArrowRight, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const About: React.FC = () => {
  const stats = [
    { number: '1,500+', label: 'Happy Clients' },
    { number: '1,200+', label: 'Tax Returns Filed' },
    { number: '1,800+', label: 'Business Consultations' },
    { number: '1,600+', label: 'Successful Audits' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Tax professionals working"
              className="rounded-2xl shadow-xl"
              width={800}
              height={800}
            />
            <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8" />
                <div>
                  <div className="font-bold text-lg">15+ Years</div>
                  <div className="text-sm opacity-90">Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                We Handle The Most Tedious Bookkeeping Tasks of Your Business Operations
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 15 years of experience in tax preparation and business consulting, 
                our team of certified professionals is dedicated to helping you navigate 
                complex tax regulations and optimize your financial strategies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine traditional expertise with modern technology to deliver 
                personalized solutions that save you time and money while ensuring 
                full compliance with tax laws.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button size="lg">
                <ArrowRight/>
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};