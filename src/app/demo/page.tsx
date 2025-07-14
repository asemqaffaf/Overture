'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Layout, GitBranch, TrendingUp } from 'lucide-react';

const DemoPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to the Overture Demo</h1>
        <p className="text-xl text-gray-600">
          Explore the core features of the Overture platform.
        </p>
      </div>

      <div className="max-w-4xl w-full grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Card for Component Intelligence Platform */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
          <div className="p-4 bg-blue-100 rounded-full mb-4">
            <Zap className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Component Intelligence Platform</h2>
          <p className="text-gray-600 mb-6 flex-grow">
            Discover, manage, and analyze all your components from a single, unified interface. Eliminate duplicates, track usage, and make data-driven decisions.
          </p>
          <Link href="/component-intelligence-platform" className="mt-auto inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Explore Intelligence Platform
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </Link>
        </div>

        {/* Card for Visual Composer */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
          <div className="p-4 bg-purple-100 rounded-full mb-4">
            <Layout className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Visual Composer</h2>
          <p className="text-gray-600 mb-6 flex-grow">
            Build pages and applications visually by dragging and dropping components from your design systems. Accelerate development and ensure consistency.
          </p>
          <Link href="/visual-composer" className="mt-auto inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              Launch Visual Composer
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </Link>
        </div>

        {/* Card for Migration Intelligence */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
          <div className="p-4 bg-yellow-100 rounded-full mb-4">
            <GitBranch className="w-8 h-8 text-yellow-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Migration Intelligence</h2>
          <p className="text-gray-600 mb-6 flex-grow">
            Seamlessly plan and execute migrations with AI-powered assistance. Optimize your transition between frameworks with zero downtime.
          </p>
          <Link href="/migration-intelligence" className="mt-auto inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              Discover Migration Tools
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </Link>
        </div>

        {/* Card for Performance Orchestration */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
          <div className="p-4 bg-green-100 rounded-full mb-4">
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Performance Orchestration</h2>
          <p className="text-gray-600 mb-6 flex-grow">
            Enhance your application&apos;s performance with insights and real-time analytics. Implement strategies to optimize load times and user experience.
          </p>
          <Link href="/performance-orchestration" className="mt-auto inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Boost Performance
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
