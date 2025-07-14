/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, AlertTriangle, Zap, GitBranch, Clock, TrendingUp, Package, Play, Download, Eye, BarChart3 } from 'lucide-react';

const MigrationIntelligencePage = () => {
  const [selectedMigration, setSelectedMigration] = useState('react-to-vue');
  const [analysisStep, setAnalysisStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showCodePreview, setShowCodePreview] = useState(false);

  const migrationScenarios: any = {
    'react-to-vue': {
      title: 'React to Vue.js',
      description: 'Migrate React components to Vue.js with preserved functionality',
      complexity: 'Medium',
      estimatedTime: '6-8 weeks',
      components: 347,
      compatibility: 92,
      cost: '$75,000',
      roi: '3.2x',
      risks: ['State management patterns need adaptation', 'Event handling differences require attention', 'Lifecycle method conversions', 'Third-party library compatibility'],
      benefits: ['35% smaller bundle size', '28% faster rendering performance', 'Improved developer experience', 'Better TypeScript integration', 'Easier unit testing'],
    },
    'angular-to-react': {
      title: 'Angular to React',
      description: 'Transform Angular components to React with modern hooks',
      complexity: 'High',
      estimatedTime: '10-14 weeks',
      components: 892,
      compatibility: 85,
      cost: '$125,000',
      roi: '2.8x',
      risks: ['Dependency injection pattern changes', 'Service-to-hook conversions', 'Template syntax differences', 'RxJS to modern React patterns'],
      benefits: ['45% faster development cycles', 'Larger talent pool availability', 'Better ecosystem support', 'Simplified state management', 'Modern development patterns'],
    },
    'vanilla-to-react': {
      title: 'Vanilla JS to React',
      description: 'Modernize legacy JavaScript to React components',
      complexity: 'Low',
      estimatedTime: '4-6 weeks',
      components: 156,
      compatibility: 98,
      cost: '$45,000',
      roi: '4.1x',
      risks: ['DOM manipulation patterns', 'Global state management', 'Event listener cleanup'],
      benefits: ['60% faster feature development', 'Improved maintainability', 'Better testing capabilities', 'Modern tooling support', 'Enhanced developer productivity'],
    },
  };

  const analysisSteps = [
    {
      title: 'Scanning Components',
      description: 'Analyzing existing codebase structure and dependencies',
      icon: <Eye className='w-5 h-5' />,
      duration: 2000,
    },
    {
      title: 'Mapping Dependencies',
      description: 'Identifying component relationships and data flow',
      icon: <GitBranch className='w-5 h-5' />,
      duration: 3000,
    },
    {
      title: 'Calculating Complexity',
      description: 'Assessing migration effort and potential risks',
      icon: <BarChart3 className='w-5 h-5' />,
      duration: 2500,
    },
    {
      title: 'Generating Strategy',
      description: 'Creating optimized migration plan with timelines',
      icon: <Zap className='w-5 h-5' />,
      duration: 2000,
    },
  ];

  const sampleCode = {
    before: `// React Component (Before)
import React, { useState, useEffect } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Track product view
    analytics.track('product_viewed', { id: product.id });
  }, [product.id]);

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      await onAddToCart(product.id, quantity);
      showToast('Added to cart!');
    } catch (error) {
      showToast('Error adding to cart');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">{product.price}</p>
      <div className="quantity-controls">
        <button onClick={() => setQuantity(q => q - 1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>
      <button 
        onClick={handleAddToCart}
        disabled={isLoading}
        className="add-to-cart-btn"
      >
        {isLoading ? 'Adding...' : 'Add to Cart'}
      </button>
    </div>
  );
};`,
    after: `<!-- Vue Component (After) -->
<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p class="price">{{ product.price }}</p>
    <div class="quantity-controls">
      <button @click="quantity--">-</button>
      <span>{{ quantity }}</span>
      <button @click="quantity++">+</button>
    </div>
    <button 
      @click="handleAddToCart"
      :disabled="isLoading"
      class="add-to-cart-btn"
    >
      {{ isLoading ? 'Adding...' : 'Add to Cart' }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  product: Object,
  onAddToCart: Function
});

const isLoading = ref(false);
const quantity = ref(1);

onMounted(() => {
  // Track product view
  analytics.track('product_viewed', { id: props.product.id });
});

const handleAddToCart = async () => {
  isLoading.value = true;
  try {
    await props.onAddToCart(props.product.id, quantity.value);
    showToast('Added to cart!');
  } catch (error) {
    showToast('Error adding to cart');
  } finally {
    isLoading.value = false;
  }
};
</script>`,
  };

  const performanceMetrics = [
    { metric: 'Bundle Size', before: '847kb', after: '621kb', improvement: '-27%', status: 'good' },
    { metric: 'First Paint', before: '2.1s', after: '1.6s', improvement: '-24%', status: 'good' },
    { metric: 'Time to Interactive', before: '3.8s', after: '2.9s', improvement: '-24%', status: 'good' },
    { metric: 'Memory Usage', before: '45MB', after: '32MB', improvement: '-29%', status: 'good' },
  ];

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisStep(0);

    const runStep = (step: number) => {
      if (step < analysisSteps.length) {
        setTimeout(() => {
          setAnalysisStep(step + 1);
          runStep(step + 1);
        }, analysisSteps[step].duration);
      } else {
        setIsAnalyzing(false);
      }
    };

    runStep(0);
  };

  const currentScenario = migrationScenarios[selectedMigration];

  const StatusBadge = ({ status, children }:any) => {
    const colors: any = {
      good: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      critical: 'bg-red-100 text-red-800',
    };
    return <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status]}`}>{children}</span>;
  };

  const ComplexityBadge = ({ complexity }:any) => {
    const colors: any = {
      Low: 'bg-green-100 text-green-800',
      Medium: 'bg-yellow-100 text-yellow-800',
      High: 'bg-red-100 text-red-800',
    };
    return <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[complexity]}`}>{complexity} Complexity</span>;
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-white shadow-sm border-b'>
        <div className='max-w-7xl mx-auto px-4 py-6'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center'>
                <GitBranch className='w-6 h-6 text-white' />
              </div>
              <div>
                <h1 className='text-2xl font-bold text-gray-900'>Migration Intelligence</h1>
                <p className='text-sm text-gray-500'>AI-powered framework migrations with zero downtime</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='text-sm text-gray-600'>
                <span className='font-medium'>15</span> successful migrations
              </div>
              <div className='text-sm text-gray-600'>
                <span className='font-medium'>99.2%</span> success rate
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Migration Scenario Selector */}
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <div className='bg-white rounded-lg shadow-sm mb-8'>
          <div className='p-6 border-b'>
            <h2 className='text-lg font-semibold text-gray-900'>Select Migration Scenario</h2>
            <p className='text-sm text-gray-600 mt-1'>Choose your current and target frameworks</p>
          </div>
          <div className='p-6'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {Object.entries(migrationScenarios).map(([key, scenario]: any[]) => (
                <button
                  key={key}
                  onClick={() => setSelectedMigration(key)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    selectedMigration === key ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className='flex items-center justify-between mb-2'>
                    <h3 className='font-medium text-gray-900'>{scenario.title}</h3>
                    <ComplexityBadge complexity={scenario.complexity} />
                  </div>
                  <p className='text-sm text-gray-600 mb-3'>{scenario.description}</p>
                  <div className='flex items-center justify-between text-sm'>
                    <span className='text-gray-500'>{scenario.components} components</span>
                    <span className='font-medium text-indigo-600'>{scenario.estimatedTime}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Analysis Section */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Analysis Controls */}
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-lg shadow-sm p-6'>
              <h3 className='text-lg font-semibold text-gray-900 mb-4'>Migration Analysis</h3>

              {!isAnalyzing ? (
                <button
                  onClick={runAnalysis}
                  className='w-full flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors'
                >
                  <Play className='w-4 h-4' />
                  Run AI Analysis
                </button>
              ) : (
                <div className='space-y-4'>
                  {analysisSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg ${index < analysisStep ? 'bg-green-50' : index === analysisStep ? 'bg-indigo-50' : 'bg-gray-50'}`}
                    >
                      <div className={`flex-shrink-0 ${index < analysisStep ? 'text-green-600' : index === analysisStep ? 'text-indigo-600' : 'text-gray-400'}`}>
                        {index < analysisStep ? <CheckCircle className='w-5 h-5' /> : step.icon}
                      </div>
                      <div className='flex-1'>
                        <div className='font-medium text-gray-900'>{step.title}</div>
                        <div className='text-sm text-gray-600'>{step.description}</div>
                      </div>
                      {index === analysisStep && <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-600'></div>}
                    </div>
                  ))}
                </div>
              )}

              {analysisStep >= analysisSteps.length && (
                <div className='mt-6 space-y-3'>
                  <div className='flex items-center gap-2 text-green-600'>
                    <CheckCircle className='w-5 h-5' />
                    <span className='font-medium'>Analysis Complete</span>
                  </div>
                  <div className='space-y-2'>
                    <button
                      onClick={() => setShowCodePreview(true)}
                      className='w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors'
                    >
                      <Eye className='w-4 h-4' />
                      Preview Code Changes
                    </button>
                    <button className='w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors'>
                      <Download className='w-4 h-4' />
                      Download Migration Plan
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Overview Cards */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
              <div className='bg-white rounded-lg shadow-sm p-4'>
                <div className='flex items-center gap-2 mb-2'>
                  <Package className='w-5 h-5 text-indigo-600' />
                  <span className='text-sm font-medium text-gray-700'>Components</span>
                </div>
                <div className='text-2xl font-bold text-gray-900'>{currentScenario.components}</div>
              </div>
              <div className='bg-white rounded-lg shadow-sm p-4'>
                <div className='flex items-center gap-2 mb-2'>
                  <CheckCircle className='w-5 h-5 text-green-600' />
                  <span className='text-sm font-medium text-gray-700'>Compatibility</span>
                </div>
                <div className='text-2xl font-bold text-gray-900'>{currentScenario.compatibility}%</div>
              </div>
              <div className='bg-white rounded-lg shadow-sm p-4'>
                <div className='flex items-center gap-2 mb-2'>
                  <Clock className='w-5 h-5 text-yellow-600' />
                  <span className='text-sm font-medium text-gray-700'>Timeline</span>
                </div>
                <div className='text-lg font-bold text-gray-900'>{currentScenario.estimatedTime}</div>
              </div>
              <div className='bg-white rounded-lg shadow-sm p-4'>
                <div className='flex items-center gap-2 mb-2'>
                  <TrendingUp className='w-5 h-5 text-blue-600' />
                  <span className='text-sm font-medium text-gray-700'>ROI</span>
                </div>
                <div className='text-2xl font-bold text-gray-900'>{currentScenario.roi}</div>
              </div>
            </div>

            {/* Performance Improvements */}
            <div className='bg-white rounded-lg shadow-sm p-6'>
              <h3 className='text-lg font-semibold text-gray-900 mb-4'>Expected Performance Improvements</h3>
              <div className='space-y-4'>
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'>
                    <div className='flex items-center gap-3'>
                      <span className='font-medium text-gray-900'>{metric.metric}</span>
                      <StatusBadge status={metric.status}>{metric.improvement}</StatusBadge>
                    </div>
                    <div className='flex items-center gap-4 text-sm text-gray-600'>
                      <span>{metric.before}</span>
                      <ArrowRight className='w-4 h-4' />
                      <span className='font-medium text-gray-900'>{metric.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits & Risks */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='bg-white rounded-lg shadow-sm p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>Migration Benefits</h3>
                <div className='space-y-3'>
                  {currentScenario.benefits.map(
                    (
                      benefit:
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | Promise<
                            | string
                            | number
                            | bigint
                            | boolean
                            | React.ReactPortal
                            | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
                            | Iterable<React.ReactNode>
                            | null
                            | undefined
                          >
                        | null
                        | undefined,
                      index: React.Key | null | undefined,
                    ) => (
                      <div key={index} className='flex items-start gap-3'>
                        <CheckCircle className='w-5 h-5 text-green-600 mt-0.5 flex-shrink-0' />
                        <span className='text-sm text-gray-700'>{benefit}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-sm p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>Migration Risks</h3>
                <div className='space-y-3'>
                  {currentScenario.risks.map(
                    (
                      risk:
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | Promise<
                            | string
                            | number
                            | bigint
                            | boolean
                            | React.ReactPortal
                            | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
                            | Iterable<React.ReactNode>
                            | null
                            | undefined
                          >
                        | null
                        | undefined,
                      index: React.Key | null | undefined,
                    ) => (
                      <div key={index} className='flex items-start gap-3'>
                        <AlertTriangle className='w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0' />
                        <span className='text-sm text-gray-700'>{risk}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Cost Analysis */}
            <div className='bg-white rounded-lg shadow-sm p-6'>
              <h3 className='text-lg font-semibold text-gray-900 mb-4'>Cost Analysis</h3>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-gray-900 mb-2'>{currentScenario.cost}</div>
                  <div className='text-sm text-gray-600'>Migration Cost</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-green-600 mb-2'>{currentScenario.roi}</div>
                  <div className='text-sm text-gray-600'>Expected ROI</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-blue-600 mb-2'>6 months</div>
                  <div className='text-sm text-gray-600'>Payback Period</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code Preview Modal */}
      {showCodePreview && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
          <div className='bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto'>
            <div className='p-6 border-b'>
              <div className='flex items-center justify-between'>
                <h2 className='text-xl font-bold text-gray-900'>Code Transformation Preview</h2>
                <button onClick={() => setShowCodePreview(false)} className='text-gray-400 hover:text-gray-600'>
                  ×
                </button>
              </div>
            </div>
            <div className='p-6'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div>
                  <h3 className='font-semibold text-gray-900 mb-3'>Before (React)</h3>
                  <pre className='bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm'>{sampleCode.before}</pre>
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 mb-3'>After (Vue.js)</h3>
                  <pre className='bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm'>{sampleCode.after}</pre>
                </div>
              </div>
              <div className='mt-6 p-4 bg-green-50 rounded-lg'>
                <div className='flex items-center gap-2 mb-2'>
                  <Zap className='w-5 h-5 text-green-600' />
                  <span className='font-medium text-green-800'>AI Transformation Summary</span>
                </div>
                <ul className='text-sm text-green-700 space-y-1'>
                  <li>• Converted React hooks to Vue Composition API</li>
                  <li>• Transformed JSX to Vue template syntax</li>
                  <li>• Maintained all component functionality</li>
                  <li>• Preserved event handling and state management</li>
                  <li>• Added TypeScript support improvements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MigrationIntelligencePage;
