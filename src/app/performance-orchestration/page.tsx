/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import { Activity, Zap, TrendingUp, CheckCircle, Clock, Users, Target, BarChart3, Cpu, Globe, Smartphone, ArrowRight } from 'lucide-react';

const PerformanceOrchestration = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [analysisStage, setAnalysisStage] = useState('idle');
  const [progress, setProgress] = useState(0);
  const [selectedOptimization, setSelectedOptimization] = useState<any>(null);

  const runAnalysis = () => {
    setAnalysisStage('analyzing');
    setProgress(0);

    const stages = [
      { stage: 'analyzing', duration: 2000, progress: 25 },
      { stage: 'profiling', duration: 1500, progress: 50 },
      { stage: 'optimizing', duration: 1800, progress: 75 },
      { stage: 'complete', duration: 800, progress: 100 },
    ];

    stages.forEach((stage, index) => {
      setTimeout(
        () => {
          setAnalysisStage(stage.stage);
          setProgress(stage.progress);
        },
        stages.slice(0, index + 1).reduce((acc, s) => acc + s.duration, 0),
      );
    });
  };

  const performanceData = {
    current: {
      tti: 3.2,
      fcp: 1.8,
      cls: 0.15,
      bundleSize: 2.4,
      renderTime: 245,
      score: 67,
    },
    optimized: {
      tti: 1.6,
      fcp: 0.9,
      cls: 0.03,
      bundleSize: 1.1,
      renderTime: 89,
      score: 94,
    },
  };

  const optimizations = [
    {
      id: 'ssr',
      title: 'Server-Side Rendering',
      description: 'Convert critical pages to SSR for 50% faster initial load',
      impact: 'High',
      effort: 'Medium',
      pages: ['Product Details', 'Category Pages', 'Search Results'],
      metrics: { tti: -1.6, fcp: -0.9, score: +27 },
      roi: '180%',
      timeline: '6 weeks',
      icon: Cpu,
    },
    {
      id: 'static',
      title: 'Static HTML Generation',
      description: 'Landing pages and marketing content as static HTML',
      impact: 'High',
      effort: 'Low',
      pages: ['Homepage', 'About', 'Pricing', 'Features'],
      metrics: { tti: -2.1, fcp: -1.2, score: +35 },
      roi: '240%',
      timeline: '3 weeks',
      icon: Globe,
    },
    {
      id: 'lazy',
      title: 'Smart Component Lazy Loading',
      description: 'AI-powered lazy loading based on user behavior patterns',
      impact: 'Medium',
      effort: 'Medium',
      pages: ['Dashboard', 'Settings', 'Profile'],
      metrics: { bundleSize: -0.8, renderTime: -120, score: +15 },
      roi: '120%',
      timeline: '4 weeks',
      icon: Zap,
    },
    {
      id: 'edge',
      title: 'Edge Rendering Optimization',
      description: 'Global edge deployment for 40% faster international load times',
      impact: 'High',
      effort: 'High',
      pages: ['All Pages'],
      metrics: { tti: -1.2, fcp: -0.7, score: +22 },
      roi: '160%',
      timeline: '8 weeks',
      icon: Smartphone,
    },
  ];

  const architectureStrategies = [
    {
      scenario: 'E-commerce Product Pages',
      current: 'React SPA',
      recommended: 'SSR + Hydration',
      reason: 'SEO critical, content-heavy, fast TTI needed',
      improvement: '65% faster TTI',
      color: 'blue',
    },
    {
      scenario: 'Interactive Dashboards',
      current: 'React SPA',
      recommended: 'Stay React',
      reason: 'High interactivity, user-specific data',
      improvement: '20% via lazy loading',
      color: 'green',
    },
    {
      scenario: 'Marketing Landing Pages',
      current: 'React SPA',
      recommended: 'Static HTML',
      reason: 'Content-only, SEO critical, maximum speed',
      improvement: '80% faster load times',
      color: 'purple',
    },
    {
      scenario: 'Checkout Flow',
      current: 'React SPA',
      recommended: 'Static HTML',
      reason: 'Conversion critical, minimal JS needed',
      improvement: '45% faster conversion',
      color: 'orange',
    },
  ];

  const caseStudies = [
    {
      company: 'Netflix',
      challenge: 'Mixed rendering strategies across 12,000+ components',
      solution: 'Intelligent architecture selection per page type',
      results: ['50% faster TTI on landing pages', '30% reduction in bundle size', '25% improvement in user engagement'],
      architecture: 'React + SSR + Static HTML + Edge',
      color: 'red',
    },
    {
      company: 'Airbnb',
      challenge: 'Slow search results impacting bookings',
      solution: 'SSR for search, React for booking flow',
      results: ['40% faster search results', '15% increase in booking conversion', '60% reduction in bounce rate'],
      architecture: 'SSR + React Hydration',
      color: 'pink',
    },
    {
      company: 'Shopify',
      challenge: 'Store performance affecting merchant sales',
      solution: 'Static generation for stores, React for admin',
      results: ['70% faster store load times', '20% increase in merchant sales', '45% reduction in hosting costs'],
      architecture: 'Static HTML + React Admin',
      color: 'green',
    },
  ];

  const colorClasses: any = {
    blue: 'bg-blue-100 text-blue-600 border-blue-200',
    green: 'bg-green-100 text-green-600 border-green-200',
    purple: 'bg-purple-100 text-purple-600 border-purple-200',
    orange: 'bg-orange-100 text-orange-600 border-orange-200',
    red: 'bg-red-100 text-red-600 border-red-200',
    pink: 'bg-pink-100 text-pink-600 border-pink-200',
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-white shadow-sm border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-6 py-6'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center'>
                <Activity className='w-6 h-6 text-white' />
              </div>
              <div>
                <h1 className='text-2xl font-bold text-gray-900'>Performance Orchestration</h1>
                <p className='text-gray-600'>Netflix-style intelligent rendering strategy</p>
              </div>
            </div>
            <div className='flex items-center gap-2 text-sm text-gray-600'>
              <Globe className='w-4 h-4' />
              <span>Global Performance Analysis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className='bg-white shadow-sm border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-6'>
          <nav className='flex space-x-8'>
            {[
              { id: 'overview', label: 'Performance Overview', icon: BarChart3 },
              { id: 'analysis', label: 'AI Analysis', icon: Cpu },
              { id: 'strategies', label: 'Architecture Strategies', icon: Target },
              { id: 'case-studies', label: 'Case Studies', icon: TrendingUp },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-4 border-b-2 transition-colors ${
                  activeTab === tab.id ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className='w-4 h-4' />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 py-8'>
        {/* Performance Overview */}
        {activeTab === 'overview' && (
          <div className='space-y-8'>
            {/* Current vs Optimized Metrics */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {/* Current Performance */}
              <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-200'>
                <div className='flex items-center justify-between mb-6'>
                  <h3 className='text-lg font-semibold text-gray-900'>Current Performance</h3>
                  <div className='flex items-center gap-2'>
                    <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                    <span className='text-sm text-gray-600'>Score: {performanceData.current.score}</span>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='bg-red-50 rounded-lg p-4 border border-red-200'>
                    <div className='text-2xl font-bold text-red-600'>{performanceData.current.tti}s</div>
                    <div className='text-sm text-red-500'>Time to Interactive</div>
                  </div>
                  <div className='bg-red-50 rounded-lg p-4 border border-red-200'>
                    <div className='text-2xl font-bold text-red-600'>{performanceData.current.fcp}s</div>
                    <div className='text-sm text-red-500'>First Contentful Paint</div>
                  </div>
                  <div className='bg-red-50 rounded-lg p-4 border border-red-200'>
                    <div className='text-2xl font-bold text-red-600'>{performanceData.current.bundleSize}MB</div>
                    <div className='text-sm text-red-500'>Bundle Size</div>
                  </div>
                  <div className='bg-red-50 rounded-lg p-4 border border-red-200'>
                    <div className='text-2xl font-bold text-red-600'>{performanceData.current.renderTime}ms</div>
                    <div className='text-sm text-red-500'>Render Time</div>
                  </div>
                </div>
              </div>

              {/* Optimized Performance */}
              <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-200'>
                <div className='flex items-center justify-between mb-6'>
                  <h3 className='text-lg font-semibold text-gray-900'>Optimized Performance</h3>
                  <div className='flex items-center gap-2'>
                    <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                    <span className='text-sm text-gray-600'>Score: {performanceData.optimized.score}</span>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='bg-green-50 rounded-lg p-4 border border-green-200'>
                    <div className='text-2xl font-bold text-green-600'>{performanceData.optimized.tti}s</div>
                    <div className='text-sm text-green-500'>Time to Interactive</div>
                    <div className='text-xs text-green-600 mt-1'>↓ 50% faster</div>
                  </div>
                  <div className='bg-green-50 rounded-lg p-4 border border-green-200'>
                    <div className='text-2xl font-bold text-green-600'>{performanceData.optimized.fcp}s</div>
                    <div className='text-sm text-green-500'>First Contentful Paint</div>
                    <div className='text-xs text-green-600 mt-1'>↓ 50% faster</div>
                  </div>
                  <div className='bg-green-50 rounded-lg p-4 border border-green-200'>
                    <div className='text-2xl font-bold text-green-600'>{performanceData.optimized.bundleSize}MB</div>
                    <div className='text-sm text-green-500'>Bundle Size</div>
                    <div className='text-xs text-green-600 mt-1'>↓ 54% smaller</div>
                  </div>
                  <div className='bg-green-50 rounded-lg p-4 border border-green-200'>
                    <div className='text-2xl font-bold text-green-600'>{performanceData.optimized.renderTime}ms</div>
                    <div className='text-sm text-green-500'>Render Time</div>
                    <div className='text-xs text-green-600 mt-1'>↓ 64% faster</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Optimization Recommendations */}
            <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-200'>
              <h3 className='text-lg font-semibold mb-6 text-gray-900'>Optimization Recommendations</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {optimizations.map((opt) => (
                  <div
                    key={opt.id}
                    className='bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer'
                    onClick={() => setSelectedOptimization(opt as any)}
                  >
                    <div className='flex items-start justify-between mb-4'>
                      <div className='flex items-center gap-3'>
                        <div className='p-2 bg-blue-100 rounded-lg'>
                          <opt.icon className='w-5 h-5 text-blue-600' />
                        </div>
                        <div>
                          <h4 className='font-semibold text-gray-900'>{opt.title}</h4>
                          <div className='flex items-center gap-2 mt-1'>
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                opt.impact === 'High' ? 'bg-red-100 text-red-600' : opt.impact === 'Medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'
                              }`}
                            >
                              {opt.impact} Impact
                            </span>
                            <span className='text-sm text-gray-600'>{opt.roi} ROI</span>
                          </div>
                        </div>
                      </div>
                      <ArrowRight className='w-5 h-5 text-gray-400' />
                    </div>
                    <p className='text-sm text-gray-600 mb-4'>{opt.description}</p>
                    <div className='flex items-center justify-between text-xs text-gray-500'>
                      <span>Timeline: {opt.timeline}</span>
                      <span>{opt.pages.length} pages affected</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* AI Analysis */}
        {activeTab === 'analysis' && (
          <div className='space-y-8'>
            <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-200'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-lg font-semibold text-gray-900'>AI Performance Analysis</h3>
                <button
                  onClick={runAnalysis}
                  disabled={analysisStage !== 'idle' && analysisStage !== 'complete'}
                  className='inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-md transition-colors'
                >
                  <Zap className='w-4 h-4' />
                  {analysisStage === 'idle' || analysisStage === 'complete' ? 'Run Analysis' : 'Analyzing...'}
                </button>
              </div>

              {analysisStage !== 'idle' && (
                <div className='mb-6'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-sm text-gray-600'>
                      {analysisStage === 'analyzing' && 'Analyzing component architecture...'}
                      {analysisStage === 'profiling' && 'Profiling performance bottlenecks...'}
                      {analysisStage === 'optimizing' && 'Generating optimization strategies...'}
                      {analysisStage === 'complete' && 'Analysis complete!'}
                    </span>
                    <span className='text-sm text-blue-600'>{progress}%</span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div className='bg-blue-600 h-2 rounded-full transition-all duration-300' style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
              )}

              {analysisStage === 'complete' && (
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  <div className='bg-blue-50 rounded-lg p-4 border border-blue-200'>
                    <h4 className='font-semibold text-blue-900 mb-2'>Architecture Analysis</h4>
                    <ul className='text-sm text-blue-700 space-y-1'>
                      <li>• 847 React components analyzed</li>
                      <li>• 23 pages suitable for SSR</li>
                      <li>• 12 pages optimal for static HTML</li>
                      <li>• 156 lazy-loadable components</li>
                    </ul>
                  </div>
                  <div className='bg-yellow-50 rounded-lg p-4 border border-yellow-200'>
                    <h4 className='font-semibold text-yellow-900 mb-2'>Performance Bottlenecks</h4>
                    <ul className='text-sm text-yellow-700 space-y-1'>
                      <li>• Large bundle size (2.4MB)</li>
                      <li>• Unnecessary hydration on static pages</li>
                      <li>• Blocking render on heavy components</li>
                      <li>• Poor caching strategies</li>
                    </ul>
                  </div>
                  <div className='bg-green-50 rounded-lg p-4 border border-green-200'>
                    <h4 className='font-semibold text-green-900 mb-2'>Optimization Opportunities</h4>
                    <ul className='text-sm text-green-700 space-y-1'>
                      <li>• 50% TTI improvement possible</li>
                      <li>• 54% bundle size reduction</li>
                      <li>• 180% ROI on optimizations</li>
                      <li>• 12-week implementation timeline</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Detailed Optimization */}
            {selectedOptimization && (
              <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-200'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='text-lg font-semibold text-gray-900'>{selectedOptimization.title}</h3>
                  <button onClick={() => setSelectedOptimization(null)} className='text-gray-400 hover:text-gray-600'>
                    <p className='text-gray-400 hover:text-gray-600 text-3xl'>×</p>
                  </button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <h4 className='font-semibold mb-3 text-gray-900'>Implementation Details</h4>
                    <div className='space-y-3'>
                      <div className='flex items-center gap-2'>
                        <Clock className='w-4 h-4 text-gray-500' />
                        <span className='text-sm text-gray-700'>Timeline: {selectedOptimization.timeline}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Target className='w-4 h-4 text-gray-500' />
                        <span className='text-sm text-gray-700'>ROI: {selectedOptimization.roi}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Users className='w-4 h-4 text-gray-500' />
                        <span className='text-sm text-gray-700'>Effort: {selectedOptimization.effort}</span>
                      </div>
                    </div>

                    <h4 className='font-semibold mt-6 mb-3 text-gray-900'>Affected Pages</h4>
                    <div className='space-y-2'>
                      {selectedOptimization.pages.map((page: any, index: any) => (
                        <div key={index} className='flex items-center gap-2'>
                          <CheckCircle className='w-4 h-4 text-green-500' />
                          <span className='text-sm text-gray-700'>{page}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className='font-semibold mb-3 text-gray-900'>Performance Impact</h4>
                    <div className='space-y-3'>
                      {Object.entries(selectedOptimization.metrics).map(([metric, value]: any[]) => (
                        <div key={metric} className='flex items-center justify-between'>
                          <span className='text-sm text-gray-700 capitalize'>{metric.replace(/([A-Z])/g, ' $1')}</span>
                          <span className={`text-sm font-semibold ${value > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {value > 0 ? '+' : ''}
                            {value}
                            {metric.includes('score') ? '' : metric.includes('Size') ? 'MB' : metric.includes('Time') ? 'ms' : 's'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Architecture Strategies */}
        {activeTab === 'strategies' && (
          <div className='space-y-8'>
            <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-200'>
              <h3 className='text-lg font-semibold mb-6 text-gray-900'>Intelligent Architecture Selection</h3>
              <div className='space-y-6'>
                {architectureStrategies.map((strategy, index) => (
                  <div key={index} className='bg-gray-50 rounded-lg p-6 border border-gray-200'>
                    <div className='grid grid-cols-1 md:grid-cols-5 gap-4 items-center'>
                      <div>
                        <h4 className='font-semibold text-gray-900'>{strategy.scenario}</h4>
                        <p className='text-sm text-gray-600'>Current: {strategy.current}</p>
                      </div>
                      <div className='flex items-center justify-center'>
                        <div className='text-2xl text-gray-400'>→</div>
                      </div>
                      <div>
                        <h4 className='font-semibold text-green-600'>{strategy.recommended}</h4>
                        <p className='text-sm text-green-500'>{strategy.improvement}</p>
                      </div>
                      <div className='md:col-span-2'>
                        <p className='text-sm text-gray-600'>{strategy.reason}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Netflix-Style Architecture */}
            <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-200'>
              <h3 className='text-lg font-semibold mb-6 text-gray-900'>Netflix-Style Multi-Architecture Approach</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='bg-blue-50 rounded-lg p-4 border border-blue-200'>
                  <h4 className='font-semibold text-blue-900 mb-2'>React SPA</h4>
                  <p className='text-sm text-blue-700 mb-3'>Interactive dashboards, user-specific content</p>
                  <div className='text-xs text-blue-600'>Best for: High interactivity</div>
                </div>
                <div className='bg-green-50 rounded-lg p-4 border border-green-200'>
                  <h4 className='font-semibold text-green-900 mb-2'>SSR + Hydration</h4>
                  <p className='text-sm text-green-700 mb-3'>Product pages, SEO-critical content</p>
                  <div className='text-xs text-green-600'>Best for: SEO + Performance</div>
                </div>
                <div className='bg-yellow-50 rounded-lg p-4 border border-yellow-200'>
                  <h4 className='font-semibold text-yellow-900 mb-2'>Static HTML</h4>
                  <p className='text-sm text-yellow-700 mb-3'>Landing pages, marketing content</p>
                  <div className='text-xs text-yellow-600'>Best for: Maximum speed</div>
                </div>
                <div className='bg-purple-50 rounded-lg p-4 border border-purple-200'>
                  <h4 className='font-semibold text-purple-900 mb-2'>Edge Rendering</h4>
                  <p className='text-sm text-purple-700 mb-3'>Global optimization, CDN deployment</p>
                  <div className='text-xs text-purple-600'>Best for: Global users</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Case Studies */}
        {activeTab === 'case-studies' && (
          <div className='space-y-8'>
            {caseStudies.map((study: any, index: number) => (
              <div key={index} className='bg-white rounded-lg shadow-sm p-6 border border-gray-200'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='text-xl font-semibold text-gray-900'>{study.company}</h3>
                  <div className={`px-3 py-1 rounded-full text-sm ${colorClasses[study.color]}`}>{study.architecture}</div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <h4 className='font-semibold mb-3 text-red-600'>Challenge</h4>
                    <p className='text-gray-700 mb-6'>{study.challenge}</p>

                    <h4 className='font-semibold mb-3 text-blue-600'>Solution</h4>
                    <p className='text-gray-700'>{study.solution}</p>
                  </div>

                  <div>
                    <h4 className='font-semibold mb-3 text-green-600'>Results</h4>
                    <ul className='space-y-2'>
                      {study.results.map((result: any, resultIndex: number) => (
                        <li key={resultIndex} className='flex items-center gap-2'>
                          <CheckCircle className='w-4 h-4 text-green-500 flex-shrink-0' />
                          <span className='text-gray-700'>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceOrchestration;
