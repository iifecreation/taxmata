"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to take your business to the next level?
        </h2>
        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied clients who trust us with their tax and business needs. 
          Get started with a free consultation today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg">
            <ArrowRight />
            Get Free Consultation
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-emerald-600">
            Call (555) 123-4567
          </Button>
        </div>
      </div>
    </section>
  );
};