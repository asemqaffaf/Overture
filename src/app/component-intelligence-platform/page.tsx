'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { Search, GitBranch, Zap, Code, Figma, Package, BarChart3, ArrowRight, CheckCircle, AlertTriangle, Clock, TrendingUp } from 'lucide-react';

const OvertureDemo = () => {
  const [activeTab, setActiveTab] = useState('discovery');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedComponent, setSelectedComponent] = useState<any>(null);
  const [discoveryResults, setDiscoveryResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Mock component data from different tools
  const mockComponents = [
    {
      id: 1,
      name: 'PrimaryButton',
      source: 'Storybook',
      icon: <Package className='w-4 h-4' />,
      description: 'Main CTA button with loading states',
      usage: 847,
      lastUpdated: '2 days ago',
      versions: ['v2.1.0', 'v2.0.3', 'v1.9.1'],
      duplicates: 3,
      performance: { bundle: '2.1kb', rendering: '16ms' },
      tags: ['button', 'primary', 'loading', 'cta'],
      framework: 'React',
      status: 'active',
    },
    {
      id: 2,
      name: 'Button_Primary',
      source: 'Figma',
      icon: <Figma className='w-4 h-4' />,
      description: 'Primary button design variants',
      usage: 234,
      lastUpdated: '1 week ago',
      versions: ['Design v3.0'],
      duplicates: 0,
      performance: { bundle: '-', rendering: '-' },
      tags: ['button', 'primary', 'design'],
      framework: 'Design',
      status: 'active',
    },
    {
      id: 3,
      name: 'btn-primary',
      source: 'Bit.dev',
      icon: <Code className='w-4 h-4' />,
      description: 'Legacy primary button component',
      usage: 12,
      lastUpdated: '3 months ago',
      versions: ['v1.5.0'],
      duplicates: 2,
      performance: { bundle: '3.8kb', rendering: '24ms' },
      tags: ['button', 'primary', 'legacy'],
      framework: 'React',
      status: 'deprecated',
    },
    {
      id: 4,
      name: 'ActionButton',
      source: 'Internal',
      icon: <GitBranch className='w-4 h-4' />,
      description: 'Custom action button with analytics',
      usage: 156,
      lastUpdated: '1 month ago',
      versions: ['v1.2.0'],
      duplicates: 1,
      performance: { bundle: '2.9kb', rendering: '18ms' },
      tags: ['button', 'action', 'analytics'],
      framework: 'Vue',
      status: 'active',
    },
  ];

  const mockMigrationData = {
    currentFramework: 'React',
    targetFramework: 'Vue',
    components: 347,
    complexity: 'Medium',
    estimatedTime: '6-8 weeks',
    compatibility: 92,
    risks: ['State management patterns', 'Event handling differences'],
    benefits: ['Smaller bundle size', 'Better performance', 'Easier testing'],
  };

  const mockPerformanceData = {
    components: [
      { name: 'ProductCard', ttl: 145, bundle: '12.3kb', status: 'warning' },
      { name: 'SearchBar', ttl: 89, bundle: '8.7kb', status: 'good' },
      { name: 'Navigation', ttl: 234, bundle: '15.2kb', status: 'critical' },
      { name: 'Footer', ttl: 67, bundle: '5.1kb', status: 'good' },
    ],
    recommendations: ['Convert ProductCard to static HTML for 45% TTI improvement', 'Enable code splitting for Navigation component', 'Optimize bundle for SearchBar component'],
  };

  // Simulate search
  useEffect(() => {
    if (searchQuery.length > 0) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        const filtered = mockComponents.filter(
          (comp) =>
            comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            comp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            comp.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
        );
        setDiscoveryResults(filtered);
        setIsSearching(false);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setDiscoveryResults([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const StatusBadge = ({ status }: any) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      deprecated: 'bg-red-100 text-red-800',
      warning: 'bg-yellow-100 text-yellow-800',
      good: 'bg-green-100 text-green-800',
      critical: 'bg-red-100 text-red-800',
    } as any;
    return <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status]}`}>{status}</span>;
  };

  const SourceBadge = ({ source, icon }: any) => {
    const colors = {
      Storybook: 'bg-pink-100 text-pink-800',
      Figma: 'bg-purple-100 text-purple-800',
      'Bit.dev': 'bg-blue-100 text-blue-800',
      Internal: 'bg-gray-100 text-gray-800',
    } as any;
    return (
      <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${colors[source]}`}>
        {icon}
        {source}
      </div>
    );
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-white shadow-sm border-b'>
        <div className='max-w-7xl mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center'>
                <Zap className='w-5 h-5 text-white' />
              </div>
              <h1 className='text-2xl font-bold text-gray-900'>Component Intelligence Platform</h1>
              {/* <span className='text-sm text-gray-500'>Component Intelligence Platform</span> */}
            </div>
            <div className='flex items-center gap-4'>
              <div className='text-sm text-gray-600'>
                <span className='font-medium'>347</span> components discovered
              </div>
              <div className='text-sm text-gray-600'>
                <span className='font-medium'>12</span> tools integrated
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className='bg-white border-b'>
        <div className='max-w-7xl mx-auto px-4'>
          <nav className='flex space-x-8'>
            {[
              { id: 'discovery', label: 'Component Discovery', icon: <Search className='w-4 h-4' /> },
              { id: 'migration', label: 'Migration Intelligence', icon: <GitBranch className='w-4 h-4' /> },
              { id: 'performance', label: 'Performance Analysis', icon: <BarChart3 className='w-4 h-4' /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 py-8'>
        {activeTab === 'discovery' && (
          <div className='space-y-6'>
            {/* Search Bar */}
            <div className='bg-white rounded-lg shadow-sm p-6'>
              <div className='flex items-center gap-4'>
                <div className='flex-1 relative'>
                  <Search className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                  <input
                    type='text'
                    placeholder="Search components across all tools... (try 'button with loading')"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='w-full pl-10 pr-4 py-2 border text-gray-600 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <span className='text-sm text-gray-500'>AI-powered semantic search</span>
                  <Zap className='w-4 h-4 text-indigo-500' />
                </div>
              </div>
            </div>

            {/* Search Results */}
            {searchQuery && (
              <div className='bg-white rounded-lg shadow-sm'>
                <div className='p-4 border-b'>
                  <h3 className='font-medium text-gray-900'>{isSearching ? 'Searching across tools...' : `Found ${discoveryResults.length} components`}</h3>
                </div>
                {isSearching ? (
                  <div className='p-8 text-center'>
                    <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto'></div>
                    <p className='mt-2 text-gray-500'>Analyzing components across Storybook, Figma, Bit.dev...</p>
                  </div>
                ) : (
                  <div className='divide-y'>
                    {discoveryResults.map((component: any) => (
                      <div key={component.id} className='p-4 hover:bg-gray-50 cursor-pointer' onClick={() => setSelectedComponent(component)}>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center gap-4'>
                            <div className='flex items-center gap-3'>
                              <h4 className='font-medium text-gray-900'>{component.name}</h4>
                              <SourceBadge source={component.source} icon={component.icon} />
                              <StatusBadge status={component.status} />
                            </div>
                            {component.duplicates > 0 && (
                              <div className='flex items-center gap-1 text-yellow-600'>
                                <AlertTriangle className='w-4 h-4' />
                                <span className='text-sm'>{component.duplicates} duplicates</span>
                              </div>
                            )}
                          </div>
                          <div className='flex items-center gap-4 text-sm text-gray-500'>
                            <span>{component.usage} usages</span>
                            <span>{component.lastUpdated}</span>
                            <ArrowRight className='w-4 h-4' />
                          </div>
                        </div>
                        <p className='mt-1 text-sm text-gray-600'>{component.description}</p>
                        <div className='mt-2 flex items-center gap-2'>
                          {component.tags.map((tag: any) => (
                            <span key={tag} className='px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs'>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {!searchQuery && (
              <div className='bg-white rounded-lg shadow-sm p-8 text-center'>
                <Search className='w-12 h-12 text-gray-400 mx-auto mb-4' />
                <h3 className='text-lg font-medium text-gray-900 mb-2'>Discover Components Across All Tools</h3>
                <p className='text-gray-600 mb-4'>Search through components from Storybook, Figma, Bit.dev, and internal repositories</p>
                <div className='flex justify-center gap-4'>
                  <button onClick={() => setSearchQuery('button')} className='px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors'>
                    {`Try: "button"`}
                  </button>
                  <button onClick={() => setSearchQuery('loading')} className='px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors'>
                    {`Try: "loading"`}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'migration' && (
          <div className='space-y-6'>
            <div className='bg-white rounded-lg shadow-sm p-6'>
              <h3 className='text-lg font-medium text-gray-900 mb-4'>Migration Analysis</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-4'>
                  <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
                    <span className='text-sm font-medium text-gray-700'>Current Framework</span>
                    <span className='text-sm text-gray-900'>{mockMigrationData.currentFramework}</span>
                  </div>
                  <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
                    <span className='text-sm font-medium text-gray-700'>Target Framework</span>
                    <span className='text-sm text-gray-900'>{mockMigrationData.targetFramework}</span>
                  </div>
                  <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
                    <span className='text-sm font-medium text-gray-700'>Components to Migrate</span>
                    <span className='text-sm text-gray-900'>{mockMigrationData.components}</span>
                  </div>
                  <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
                    <span className='text-sm font-medium text-gray-700'>Estimated Timeline</span>
                    <span className='text-sm text-gray-900'>{mockMigrationData.estimatedTime}</span>
                  </div>
                </div>
                <div className='space-y-4'>
                  <div className='p-4 bg-green-50 rounded-lg'>
                    <div className='flex items-center gap-2 mb-2'>
                      <CheckCircle className='w-5 h-5 text-green-600' />
                      <span className='font-medium text-green-800'>Compatibility Score</span>
                    </div>
                    <div className='text-2xl font-bold text-green-800'>{mockMigrationData.compatibility}%</div>
                  </div>
                  <div className='p-4 bg-yellow-50 rounded-lg'>
                    <div className='flex items-center gap-2 mb-2'>
                      <AlertTriangle className='w-5 h-5 text-yellow-600' />
                      <span className='font-medium text-yellow-800'>Migration Risks</span>
                    </div>
                    <ul className='text-sm text-yellow-700 space-y-1'>
                      {mockMigrationData.risks.map((risk, idx) => (
                        <li key={idx}>• {risk}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-lg shadow-sm p-6'>
              <h3 className='text-lg font-medium text-gray-900 mb-4'>Migration Benefits</h3>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {mockMigrationData.benefits.map((benefit, idx) => (
                  <div key={idx} className='flex items-center gap-3 p-3 bg-blue-50 rounded-lg'>
                    <CheckCircle className='w-5 h-5 text-blue-600' />
                    <span className='text-sm text-blue-800'>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className='space-y-6'>
            <div className='bg-white rounded-lg shadow-sm p-6'>
              <h3 className='text-lg font-medium text-gray-900 mb-4'>Component Performance Analysis</h3>
              <div className='space-y-4'>
                {mockPerformanceData.components.map((comp, idx) => (
                  <div key={idx} className='flex items-center justify-between p-4 border rounded-lg'>
                    <div className='flex items-center gap-4'>
                      <span className='font-medium text-gray-900'>{comp.name}</span>
                      <StatusBadge status={comp.status} />
                    </div>
                    <div className='flex items-center gap-6 text-sm text-gray-600'>
                      <div className='flex items-center gap-1'>
                        <Clock className='w-4 h-4' />
                        <span>{comp.ttl}ms TTI</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <Package className='w-4 h-4' />
                        <span>{comp.bundle}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-white rounded-lg shadow-sm p-6'>
              <h3 className='text-lg font-medium text-gray-900 mb-4'>AI Recommendations</h3>
              <div className='space-y-3'>
                {mockPerformanceData.recommendations.map((rec, idx) => (
                  <div key={idx} className='flex items-start gap-3 p-3 bg-indigo-50 rounded-lg'>
                    <TrendingUp className='w-5 h-5 text-indigo-600 mt-0.5' />
                    <span className='text-sm text-indigo-800'>{rec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Component Detail Modal */}
      {selectedComponent && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
          <div className='bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto'>
            <div className='p-6 border-b'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <h2 className='text-xl font-bold text-gray-900'>{selectedComponent.name}</h2>
                  <SourceBadge source={selectedComponent.source} icon={selectedComponent.icon} />
                </div>
                <button onClick={() => setSelectedComponent(null)} className='text-gray-400 hover:text-gray-600'>
                  ×
                </button>
              </div>
            </div>
            <div className='p-6 space-y-6'>
              <div>
                <h3 className='font-medium text-gray-900 mb-2'>Description</h3>
                <p className='text-gray-600'>{selectedComponent.description}</p>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <h3 className='font-medium text-gray-900 mb-2'>Usage Stats</h3>
                  <div className='text-2xl font-bold text-indigo-600'>{selectedComponent.usage}</div>
                  <div className='text-sm text-gray-500'>times used</div>
                </div>
                <div>
                  <h3 className='font-medium text-gray-900 mb-2'>Performance</h3>
                  <div className='text-sm text-gray-600'>
                    <div>Bundle: {selectedComponent.performance.bundle}</div>
                    <div>Rendering: {selectedComponent.performance.rendering}</div>
                  </div>
                </div>
              </div>
              {selectedComponent.duplicates > 0 && (
                <div className='p-4 bg-yellow-50 rounded-lg'>
                  <div className='flex items-center gap-2 mb-2'>
                    <AlertTriangle className='w-5 h-5 text-yellow-600' />
                    <span className='font-medium text-yellow-800'>Duplicate Detection</span>
                  </div>
                  <p className='text-sm text-yellow-700'>Found {selectedComponent.duplicates} similar components. Consider consolidating for better maintainability.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OvertureDemo;
