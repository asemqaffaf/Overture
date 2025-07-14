'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, Layout, GitBranch, TrendingUp } from 'lucide-react';

const HomePage = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <main className='pt-24'>
        <div className='max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center'>
          <div className='relative inline-block'>
            <div className='absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-40 animate-pulse'></div>
            <Image src='/overture_logo.png' alt='Overture Logo' width={140} height={140} className='relative' />
          </div>
          <h2 className='text-6xl font-extrabold text-white mt-8 mb-4 animate-fade-in-down'>The Future of Frontend Development is Here</h2>
          <p className='text-2xl text-gray-400 mb-10 animate-fade-in-up'>Overture is the Component Intelligence Platform that will revolutionize your workflow.</p>
          <div className='flex justify-center space-x-6'>
            <Link
              href='/features'
              className='px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg hover:scale-105 transform transition-transform shadow-lg'
            >
              Get Started
            </Link>
            <Link href='/pitch-deck' className='px-10 py-4 rounded-full bg-gray-700 text-white font-bold text-lg hover:bg-gray-600 transition-colors'>
              Learn More
            </Link>
          </div>
        </div>

        <section className='py-20 bg-gray-800/50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h3 className='text-5xl font-bold text-center text-white mb-16'>Why Overture?</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <Link
                href='/component-intelligence-platform'
                className='flex flex-col p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-700/50 hover:border-blue-500'
              >
                <div className='p-3 bg-blue-500/10 rounded-full mb-6 self-start'>
                  <Zap className='w-8 h-8 text-blue-400' />
                </div>
                <h4 className='text-xl font-bold text-white mb-4 text-left'>Component Intelligence</h4>
                <p className='text-gray-400 flex-grow text-left'>Discover, manage, and analyze all your components from a single, unified interface.</p>
              </Link>
              <Link
                href='/visual-composer'
                className='flex flex-col p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-700/50 hover:border-purple-500'
              >
                <div className='p-3 bg-purple-500/10 rounded-full mb-6 self-start'>
                  <Layout className='w-8 h-8 text-purple-400' />
                </div>
                <h4 className='text-xl font-bold text-white mb-4 text-left'>Visual Composer</h4>
                <p className='text-gray-400 flex-grow text-left'>Build pages and applications visually by dragging and dropping components from your design systems.</p>
              </Link>
              <Link
                href='/migration-Intelligence'
                className='flex flex-col p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-700/50 hover:border-yellow-500'
              >
                <div className='p-3 bg-yellow-500/10 rounded-full mb-6 self-start'>
                  <GitBranch className='w-8 h-8 text-yellow-400' />
                </div>
                <h4 className='text-xl font-bold text-white mb-4 text-left'>Migration Intelligence</h4>
                <p className='text-gray-400 flex-grow text-left'>Seamlessly plan and execute migrations with AI-powered assistance.</p>
              </Link>
              <Link
                href='/performance-orchestration'
                className='flex flex-col p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-700/50 hover:border-green-500'
              >
                <div className='p-3 bg-green-500/10 rounded-full mb-6 self-start'>
                  <TrendingUp className='w-8 h-8 text-green-600' />
                </div>
                <h4 className='text-xl font-semibold text-white mb-4'>Performance Orchestration</h4>
                <p className='text-gray-400 flex-grow'>Enhance your application&apos;s performance with insights and real-time analytics.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
