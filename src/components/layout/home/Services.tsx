"use client";

import React from 'react';
import { Calculator, FileText, TrendingUp, Shield } from 'lucide-react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Tax Preparation',
      description: 'Comprehensive tax preparation services for individuals and businesses with maximum deduction optimization.'
    },
    {
      icon: FileText,
      title: 'Tax Planning and Strategy',
      description: 'Strategic tax planning to minimize your tax liability and maximize your savings year-round.'
    },
    {
      icon: TrendingUp,
      title: 'Business Consulting',
      description: 'Expert business consulting services to help you make informed financial decisions and grow your business.'
    },
    {
      icon: Shield,
      title: 'Bookkeeping and Payroll',
      description: 'Professional bookkeeping and payroll services to keep your finances organized and compliant.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Complete tax is built for small business.
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            We provide comprehensive tax and business services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-emerald-700">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-emerald-100 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" size="lg">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};