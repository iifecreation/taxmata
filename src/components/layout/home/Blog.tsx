"use client";

import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
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

export const Blog: React.FC = () => {
  const articles = [
    {
      title: 'How To Make Your Consulting Business More Successful',
      excerpt: 'Learn the key strategies that successful consulting businesses use to grow and retain clients.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'March 15, 2024',
      readTime: '5 min read'
    },
    {
      title: 'What Is Tax Management? Everything You Need to Know',
      excerpt: 'A comprehensive guide to tax management strategies for businesses of all sizes.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'March 12, 2024',
      readTime: '7 min read'
    },
    {
      title: 'Personal Budgeting Tips: How to Manage Your Money Better',
      excerpt: 'Practical tips and strategies for better personal financial management and budgeting.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'March 10, 2024',
      readTime: '4 min read'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Take a look at the latest articles from Consultio Tax.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest insights on tax planning, business consulting, and financial management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card key={index}>
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
              </div>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <Button variant="ghost">
                    <ArrowRight />
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};