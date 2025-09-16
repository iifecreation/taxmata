"use client";

import React from 'react';
import { Check, Star } from 'lucide-react';
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

export const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$297',
      period: '/mo',
      description: 'Perfect for small businesses just getting started',
      features: [
        'Monthly bookkeeping',
        'Basic tax preparation',
        'Financial statements',
        'Email support',
        'Up to 50 transactions'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$597',
      period: '/mo',
      description: 'Everything in Basic, plus advanced features',
      features: [
        'Everything in Basic',
        'Advanced tax planning',
        'Quarterly reviews',
        'Priority phone support',
        'Unlimited transactions',
        'Payroll processing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$997',
      period: '/mo',
      description: 'Complete solution for growing businesses',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom financial reporting',
        'Audit support',
        'Multi-entity management',
        'CFO advisory services'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            We offer best cost effective tax consultation solution.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that best fits your business needs. All plans include our core services with varying levels of support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-emerald-500 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardContent className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? 'default' : 'outline'} 
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <Button variant="ghost" size="lg">
            Contact us for enterprise pricing
          </Button>
        </div>
      </div>
    </section>
  );
};