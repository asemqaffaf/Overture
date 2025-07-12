'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Check, X, Minus } from 'lucide-react';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      title: "Overture",
      content: (
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">Overture</h1>
          <h2 className="text-xl sm:text-3xl text-gray-700 mb-8">The Component Intelligence Platform for Enterprise Frontend Teams</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-xl text-gray-800 mb-2"><strong>Founder:</strong> Asem Qaffaf</p>
            <p className="text-lg text-gray-600">Frontend Core Architect at Rakuten Group | Ex-Expedia Group Senior Software Engineer</p>
          </div>
        </div>
      )
    },
    
    // Slide 2: Problem
    {
      title: "The Problem: $2B+ Enterprise Frontend Chaos",
      content: (
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">The Hidden Crisis Every CTO Faces</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Tool Fragmentation Crisis</h3>
              <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li>Teams juggle 5+ disconnected tools</li>
                <li>Zero visibility across the component ecosystem</li>
                <li>40% of developer time wasted</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-3">The Component Graveyard</h3>
              <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li>Ghost Components & Zombie Duplicates</li>
                <li>Orphaned Code & Documentation Decay</li>
                <li>Multiple versions creating inconsistent UX</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Migration Nightmare</h3>
              <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li>6-12 months lost productivity</li>
                <li>Complete workflow disruption</li>
                <li>Vendor lock-in prevents evolution</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3: Real Enterprise Pain
    {
      title: "Real Enterprise Pain Points",
      content: (
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Real Enterprise Pain Points</h2>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Problem</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Cost</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Netflix</td>
                  <td className="px-6 py-4 text-sm text-gray-500">12,000+ components, no discovery</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">$3M+</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Airbnb</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Component duplication across 50+ teams</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">$2M+</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Spotify</td>
                  <td className="px-6 py-4 text-sm text-gray-500">100+ squads, different toolchains</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">$1.5M+</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Shopify</td>
                  <td className="px-6 py-4 text-sm text-gray-500">400+ components across 3+ tools</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">$800K+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">The Netflix Reality: Multi-Framework Complexity</h3>
            <p className="text-gray-700">Netflix uses React, SSR, and static HTML for performance, but this creates massive architectural complexity. Overture tames this chaos.</p>
          </div>
        </div>
      )
    },

    // Slide 4: Solution
    {
      title: "Solution: Overture",
      content: (
        <div className="text-center">
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-2'>Solution: Overture</h2>
          <p className="text-xl sm:text-2xl text-gray-600 mb-6">{"Kubernetes for React Components"}</p>
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">Core Value Proposition</h3>
            <p className="text-xl text-gray-800">Overture orchestrates your existing tools into one intelligent workflow—no rip-and-replace required.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">The Universal Truth</h4>
            <p className="text-gray-700">Every frontend framework compiles to vanilla JS, HTML, and CSS. Overture leverages this to provide true framework-agnostic orchestration.</p>
          </div>
        </div>
      )
    },

    // Slide 5: Platform Capabilities
    {
      title: "Platform Capabilities",
      content: (
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Platform Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">1. Universal Component Registry</h4>
              <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li>Auto-discovery from any source</li>
                <li>Privacy-first AI (your keys)</li>
                <li>Semantic search</li>
                <li>Duplicate detection</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">2. Visual Page Composer</h4>
              <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li>Drag-and-drop interface</li>
                <li>Export to production code</li>
                <li>Real-time collaboration</li>
                <li>AI-assisted composition</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">3. Migration Intelligence</h4>
              <ul className="text-gray-700 space-y-2 list-disc list-inside">
                <li>Framework-agnostic analysis</li>
                <li>Netflix-style performance analysis</li>
                <li>Smart architecture recommendations</li>
                <li>Universal code transformation</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: How Overture Handles the Netflix Scenario
    {
        title: "The Netflix Scenario",
        content: (
            <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">How Overture Handles the Netflix Scenario</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-lg text-gray-800 mb-4"><strong>Problem:</strong> Netflix needed different rendering strategies (React, static, SSR) for optimal performance.</p>
                    <p className="text-lg text-gray-800"><strong>{"Overture's Solution:"}</strong></p>
                    <ol className="list-decimal list-inside mt-2 space-y-2 text-gray-700">
                        <li><strong>Migration Analysis:</strong> AI analyzes which pages need React vs. static HTML vs. SSR.</li>
                        <li><strong>Automated Transformation:</strong> One-click conversion with preserved component logic.</li>
                        <li><strong>Performance Validation:</strong> Measure TTI improvements (Netflix saw 50% faster loads).</li>
                        <li><strong>Unified Management:</strong> A single dashboard to manage all component types.</li>
                    </ol>
                </div>
            </div>
        )
    },

    // Slide 7: Market Opportunity
    {
      title: "Market Opportunity: $27B+",
      content: (
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Market Opportunity: $27B+ Explosive Growth</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 p-4 sm:p-6 rounded-lg text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2">TAM</h3>
              <p className="text-2xl sm:text-3xl font-bold text-green-600">$27B+</p>
              <p className="text-xs sm:text-sm text-green-700">Dev Tools by 2033</p>
            </div>
            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">SAM</h3>
              <p className="text-2xl sm:text-3xl font-bold text-blue-600">$8.5B</p>
              <p className="text-xs sm:text-sm text-blue-700">Frontend Tools by 2025</p>
            </div>
            <div className="bg-purple-50 p-4 sm:p-6 rounded-lg text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-800 mb-2">SOM</h3>
              <p className="text-2xl sm:text-3xl font-bold text-purple-600">$1.2B</p>
              <p className="text-xs sm:text-sm text-purple-700">Initial Target by 2025</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: Target Market
    {
        title: "Target Market",
        content: (
            <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Target Market Segmentation</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Primary: Enterprise</h3>
                        <p className="text-gray-600">50-500+ frontend devs</p>
                        <p className="text-gray-600">$100K-500K tooling spend</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Secondary: Mid-Market</h3>
                        <p className="text-gray-600">15-50 frontend devs</p>
                        <p className="text-gray-600">$25K-100K tooling spend</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Tertiary: Consultancies</h3>
                        <p className="text-gray-600">10-100 devs per project</p>
                        <p className="text-gray-600">$50K-200K tooling spend</p>
                    </div>
                </div>
            </div>
        )
    },

    // Slide 9: Why Now?
    {
        title: "Why Now?",
        content: (
            <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Why Now? The Perfect Storm</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-green-800 mb-2">1. Component-First is Mainstream</h3>
                        <p className="text-green-700">React at 87% enterprise adoption; design systems are critical.</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-yellow-800 mb-2">2. Existing Tools Hit Scale Limits</h3>
                        <p className="text-yellow-700">Storybook for dev, Figma for design—both disconnected from code.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">3. AI Makes Orchestration Possible</h3>
                        <p className="text-blue-700">Semantic search and intelligent migration are now feasible.</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-red-800 mb-2">4. Performance is Critical</h3>
                        <p className="text-red-700">Netflix proved intelligent rendering can boost TTI by 50%.</p>
                    </div>
                </div>
            </div>
        )
    },

    // Slide 10: Competitive Advantage
    {
      title: "Competitive Advantage",
      content: (
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">The Orchestration Gap</h2>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Feature</th>
                  <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase">Storybook</th>
                  <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase">Bit.dev</th>
                  <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase">Backstage</th>
                  <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase bg-blue-50">Overture</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                    { feature: 'Cross-tool Integration', storybook: false, bit: 'Limited', backstage: false, overture: true },
                    { feature: 'Framework Agnostic', storybook: false, bit: false, backstage: false, overture: 'Universal' },
                    { feature: 'AI Capabilities', storybook: false, bit: false, backstage: false, overture: 'BYO' },
                    { feature: 'Visual Composer', storybook: false, bit: false, backstage: false, overture: true },
                    { feature: 'Migration Support', storybook: false, bit: false, backstage: false, overture: 'AI-powered' },
                    { feature: 'Performance Analysis', storybook: false, bit: false, backstage: false, overture: 'Netflix-style' },
                    { feature: 'Data Sovereignty', storybook: false, bit: false, backstage: false, overture: true },
                ].map(row => (
                    <tr key={row.feature}>
                        <td className="px-4 py-2 text-sm font-medium text-gray-900">{row.feature}</td>
                        <td className="px-4 py-2 text-center">{row.storybook ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />}</td>
                        <td className="px-4 py-2 text-center">{row.bit === 'Limited' ? <Minus className="w-5 h-5 text-yellow-500 mx-auto" /> : (row.bit ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />)}</td>
                        <td className="px-4 py-2 text-center">{row.backstage ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />}</td>
                        <td className="px-4 py-2 text-center bg-blue-50">{row.overture === 'BYO' || row.overture === 'Universal' || row.overture === 'AI-powered' || row.overture === 'Netflix-style' ? <span className="text-sm font-semibold text-blue-700">{row.overture}</span> : (row.overture ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />)}</td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    },

    // Slide 11: Business Model
    {
      title: "Business Model",
      content: (
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Predictable SaaS Growth</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Revenue Streams</h3>
              <div className="space-y-3">
                <p className='text-gray-700'><strong className="text-blue-600">Team Plan:</strong> $49/user/month</p>
                <p className='text-gray-700'><strong className="text-blue-600">Enterprise Plan:</strong> $10K-50K/month (On-prem)</p>
                <p className='text-gray-700'><strong className="text-blue-600">Migration Services:</strong> $25K-100K projects</p>
                <p className='text-gray-700'><strong className="text-blue-600">Add-ons:</strong> Analytics, AI generation</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Migration Scenarios</h3>
               <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Tool Consolidation ($50K):</strong> 60% faster discovery, $2M productivity gain.</p>
                <p><strong>Framework Migration ($75K):</strong> 95% compatibility, 4x faster than manual.</p>
                <p><strong>Performance Migration ($100K):</strong> 50% faster checkout, 15% conversion lift.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 12: Go-to-Market
    {
        title: "Go-to-Market",
        content: (
            <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Go-to-Market Strategy</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Unit Economics</h3>
                        <ul className="space-y-3 list-disc list-inside text-gray-700">
                            <li><strong>Average deal size:</strong> $125K annually</li>
                            <li><strong>Sales cycle:</strong> 3-6 months for enterprise</li>
                            <li><strong>Customer LTV:</strong> $750K+ (5-year retention)</li>
                            <li><strong>Customer acquisition cost:</strong>  {'<$20K'}</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Market Share Goals</h3>
                        <ul className="space-y-3 list-disc list-inside text-gray-700">
                            <li><strong>Year 1:</strong> 0.1% market share ($1M ARR)</li>
                            <li><strong>Year 3:</strong> 1.5% market share ($18M ARR)</li>
                            <li><strong>Year 5:</strong> 5% market share ($60M ARR)</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    },

    // Slide 13: Traction
    {
      title: "Traction",
      content: (
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Early Validation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">PoC Results</h3>
              <ul className="text-green-700 space-y-2 list-disc list-inside">
                <li>45% faster discovery</li>
                <li>60% faster onboarding</li>
                <li>500+ duplicates found</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Market Validation</h3>
              <ul className="text-blue-700 space-y-2 list-disc list-inside">
                <li>87% cite fragmentation pain</li>
                <li>Netflix case study validates</li>
                <li>Early customer interest</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Validated Demand</h3>
              <ul className="text-purple-700 space-y-2 list-disc list-inside">
                <li>$125K/yr avg spend</li>
                <li>45% dev time on tooling</li>
                <li>$500K+ migration costs</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 14: Founder
    {
      title: "The Founder",
      content: (
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">The Founder: Perfect Market Fit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Technical Credibility</h3>
              <p className="text-blue-700">Leading frontend architecture at Rakuten (100M+ users) & built $777M+ systems at Expedia.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Product Vision</h3>
              <p className="text-green-700">Pain-driven development to solve real enterprise frustrations I&apos;ve faced daily.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Execution Ability</h3>
              <p className="text-purple-700">Full-stack architecture and enterprise decision-making track record.</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 15: The Ask
    {
      title: "The Ask: $120K",
      content: (
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">$120K Pre-Seed Investment</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-center">Use of Funds</h3>
            <div className="flex flex-col sm:flex-row sm:justify-around items-center text-center space-y-4 sm:space-y-0">
                <div>
                    <p className="text-2xl sm:text-3xl font-bold text-blue-600">70%</p>
                    <p className="font-semibold text-gray-700">Product Dev ($84K)</p>
                    <p className="text-sm text-gray-600">Core MVP & Integrations</p>
                </div>
                <div>
                    <p className="text-2xl sm:text-3xl font-bold text-green-600">20%</p>
                    <p className="font-semibold text-gray-700">Go-to-Market ($24K)</p>
                    <p className="text-sm text-gray-600">Pilot Customer Acquisition</p>
                </div>
                <div>
                    <p className="text-2xl sm:text-3xl font-bold text-purple-600">10%</p>
                    <p className="font-semibold text-gray-700">Team Building ($12K)</p>
                    <p className="text-sm text-gray-600">Co-founder Recruitment</p>
                </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 16: Milestones
    {
        title: "12-Month Milestones",
        content: (
            <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">12-Month Milestones</h2>
                <div className="relative">
                    <div className="border-l-2 border-blue-500 absolute h-full left-1.5"></div>
                    <div className="space-y-8">
                        <div className="flex items-center">
                            <div className="bg-blue-500 rounded-full h-3 w-3 z-10"></div>
                            <div className="ml-4 bg-blue-50 p-4 rounded-lg w-full">
                                <h4 className="font-bold text-blue-800">Q3 2025: Foundation</h4>
                                <p className="text-blue-700">Secure $120K, complete MVP, establish open-source core.</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-blue-500 rounded-full h-3 w-3 z-10"></div>
                            <div className="ml-4 bg-blue-50 p-4 rounded-lg w-full">
                                <h4 className="font-bold text-blue-800">Q4 2025: Validation</h4>
                                <p className="text-blue-700">3 pilot customers active, technical co-founder onboarded.</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-blue-500 rounded-full h-3 w-3 z-10"></div>
                            <div className="ml-4 bg-blue-50 p-4 rounded-lg w-full">
                                <h4 className="font-bold text-blue-800">Q1 2026: Growth</h4>
                                <p className="text-blue-700">Achieve PMF, $50K ARR from pilots, performance features live.</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-blue-500 rounded-full h-3 w-3 z-10"></div>
                            <div className="ml-4 bg-blue-50 p-4 rounded-lg w-full">
                                <h4 className="font-bold text-blue-800">Q2 2026: Scale</h4>
                                <p className="text-blue-700">Seed round ready ($2M), 10+ customers, $200K ARR.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },

    // Slide 17: Vision & Contact
    {
        title: "Vision & Contact",
        content: (
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Ready to Orchestrate the Future?</h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-8">Become the infrastructure layer for component-based development—the &quot;AWS for frontend components&quot;.</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                    <p className="text-lg text-gray-700">Asem Qaffaf</p>
                    <p className="text-lg text-gray-700">asem@qaffaf.com</p>
                    <a href="https://overture-demo.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 hover:underline mt-2 inline-block">
                        overture-demo.vercel.app
                    </a>
                </div>
                <p className="mt-8 text-2xl font-semibold text-gray-800">{"Orchestrate. Scale. Ship."}</p>
            </div>
        )
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-2 sm:p-4 font-sans">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-sm text-gray-600 font-medium">
            {slides[currentSlide].title}
          </div>
          <a href="https://overture-demo.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Slide Content */}
        <div className="p-6 sm:p-8 md:p-12 min-h-[60vh] flex items-center">
          <div className="w-full">
            {slides[currentSlide].content}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <button onClick={handlePrev} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={handleNext} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="text-sm text-gray-500">{currentSlide + 1} / {slides.length}</span>
          </div>
          <div className="w-1/3 md:w-1/2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-in-out" 
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;
