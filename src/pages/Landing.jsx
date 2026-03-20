import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, TrendingUp, Award, Zap, Heart } from 'lucide-react';
import Button from '../components/Button';
import { testimonials } from '../utils/dummyData';

const Landing = () => {
  const features = [
    { icon: Target, title: 'AI Workout Suggestions', description: 'Get personalized workout plans powered by AI based on your fitness goals' },
    { icon: TrendingUp, title: 'Fitness Tracking', description: 'Track your daily activities, calories burned, and progress over time' },
    { icon: Users, title: 'Community Challenges', description: 'Join thousands of Indians in gamified fitness challenges' },
    { icon: Award, title: 'Achievements & Badges', description: 'Earn rewards and unlock achievements as you progress' },
    { icon: Zap, title: 'Sports Training', description: 'Specialized training programs for cricket, football, and more' },
    { icon: Heart, title: 'Holistic Wellness', description: 'Yoga, meditation, and nutrition guidance for complete health' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Empowering India's
                <span className="text-green-600"> Fitness Movement</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Join SwadeshiFit and be part of Atmanirbhar Bharat's journey to better health.
                Track workouts, join challenges, and achieve your fitness goals with AI-powered guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started Free <ArrowRight className="ml-2 w-5 h-5 inline" />
                  </Button>
                </Link>
                <Link to="/workouts">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Explore Workouts
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-8">
                <div>
                  <p className="text-3xl font-bold text-green-600">50K+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Active Users</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">1M+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Workouts Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">500+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Challenges</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600"
                alt="Fitness"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl">
                <p className="text-sm text-gray-600 dark:text-gray-400">Daily Goal</p>
                <p className="text-2xl font-bold text-green-600">8,547 steps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Everything You Need to Stay Fit</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Comprehensive fitness platform designed for Indians, by Indians</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform cursor-pointer hover:shadow-2xl">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Loved by Fitness Enthusiasts</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">See what our community has to say</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Fitness Journey?</h2>
          <p className="text-xl text-green-100 mb-8">Join thousands of Indians achieving their fitness goals with SwadeshiFit</p>
          <Link to="/register">
            <Button variant="secondary" size="lg">
              Start Your Free Journey Today <ArrowRight className="ml-2 w-5 h-5 inline" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
