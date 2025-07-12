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
          <h1 className="text-6xl font-bold text-gray-900 mb-4">Overture</h1>
          <h2 className="text-3xl text-gray-700 mb-8">The Component Intelligence Platform for Enterprise Frontend Teams</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-xl text-gray-800 mb-2"><strong>Founder:</strong> Asem Qaffaf</p>
            <p className="text-lg text-gray-600">Former: Rakuten Frontend Architect, Expedia Senior Engineer</p>
          </div>
        </div>
      )
    },
    
    // Slide 2: Problem
    {
      title: "The $2B Problem",
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The Hidden Crisis Every CTO Faces</h2>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Tool Fragmentation</h3>
              <p className="text-gray-700">Teams use 5+ disconnected tools (Storybook, Figma, Bit.dev, Cosmos)</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Component Graveyard</h3>
              <p className="text-gray-700">5,000+ components scattered across silos with zero discovery</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Migration Nightmare</h3>
              <p className="text-gray-700">6-12 months lost productivity when switching tools</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Developer Waste</h3>
              <p className="text-gray-700">40% of time spent hunting for existing components</p>
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Real Enterprise Pain Points</h2>
          <div className="overflow-x-auto">
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
                  <td className="px-6 py-4 text-sm text-gray-500">12,000+ components across 200+ teams, no discovery</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">$3M+ wasted effort</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Airbnb</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Component duplication across 50+ teams</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">$2M+ annual waste</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Spotify</td>
                  <td className="px-6 py-4 text-sm text-gray-500">100+ squads using different toolchains</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">$1.5M+ fragmentation cost</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Shopify</td>
                  <td className="px-6 py-4 text-sm text-gray-500">400+ Polaris components spread across 3+ tools</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">$800K+ efficiency loss</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 bg-red-100 p-6 rounded-lg">
            <p className="text-xl font-semibold text-red-800">The Bottom Line: Enterprise teams are drowning in component chaos, burning $2B annually on tool fragmentation.</p>
          </div>
        </div>
      )
    },

    // Slide 4: Solution
    {
      title: "Solution: Overture",
      content: (
        <div>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>Overture - Kubernetes for React Components</h2>
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">Core Value Proposition</h3>
            <p className="text-xl text-gray-800">Overture orchestrates your existing tools into one intelligent workflow—no rip-and-replace required.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">1. Universal Component Registry</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Auto-discovery from any source</li>
                <li>• Privacy-first AI with your own API keys</li>
                <li>• Semantic search capabilities</li>
                <li>• Duplicate detection and consolidation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">2. Visual Page Composer</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Drag-and-drop interface</li>
                <li>• Export to production code</li>
                <li>• Real-time collaboration</li>
                <li>• AI-assisted composition</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">3. Migration Intelligence Engine</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Automated dependency analysis</li>
                <li>• One-click migration paths</li>
                <li>• AI-powered code transformation</li>
                <li>• Zero-downtime tool transitions</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">4. Enterprise Governance</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Usage analytics and insights</li>
                <li>• Automated compliance checks</li>
                <li>• Team-based permissions</li>
                <li>• Zero data lock-in</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: Market Opportunity
    {
      title: "Market Opportunity",
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Market Opportunity: $8.5B and Growing</h2>
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Frontend Tooling Market</h3>
              <p className="text-3xl font-bold text-green-600">$2.5B</p>
              <p className="text-sm text-green-700">25% annual growth</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Enterprise Dev Tools</h3>
              <p className="text-3xl font-bold text-blue-600">$6B</p>
              <p className="text-sm text-blue-700">Expanding to frontend</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Immediate Addressable</h3>
              <p className="text-3xl font-bold text-purple-600">$850M</p>
              <p className="text-sm text-purple-700">Our initial target</p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Target Profile</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-gray-900">10,000+</p>
                <p className="text-sm text-gray-600">Enterprises with 50+ frontend developers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">$85K</p>
                <p className="text-sm text-gray-600">Average annual spend on component tooling</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">10%</p>
                <p className="text-sm text-gray-600">Target market share in 5 years</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: Competitive Advantage
    {
      title: "Competitive Advantage",
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why We Win: The Orchestration Gap</h2>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Storybook</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bit.dev</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Backstage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-blue-50">Overture</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cross-tool Integration</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"><X className="w-4 h-4 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"><Minus className="w-4 h-4 text-yellow-500 mx-auto" /> Limited</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"><X className="w-4 h-4 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center bg-blue-50"><Check className="w-4 h-4 text-green-500 mx-auto" /> Full</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">AI Capabilities</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"><X className="w-4 h-4 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"><X className="w-4 h-4 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"><X className="w-4 h-4 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center bg-blue-50"><Check className="w-4 h-4 text-green-500 mx-auto" /> Bring-your-own</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Visual Composer</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"><X className="w-4 h-4 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"><X className="w-4 h-4 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"><X className="w-4 h-4 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center bg-blue-50"><Check className="w-4 h-4 text-green-500 mx-auto" /> Yes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Migration Support</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"><X className="w-4 h-4 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"><X className="w-4 h-4 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"><X className="w-4 h-4 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center bg-blue-50"><Check className="w-4 h-4 text-green-500 mx-auto" /> AI-powered</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Enterprise Governance</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"><X className="w-4 h-4 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"><Minus className="w-4 h-4 text-yellow-500 mx-auto" /> Basic</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center bg-blue-50"><Check className="w-4 h-4 text-green-500 mx-auto" /> Robust</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Moats</h3>
              <ul className="text-blue-700 space-y-2">
                <li>• First-mover advantage in component orchestration</li>
                <li>• Privacy-first AI eliminates enterprise concerns</li>
                <li>• Integration-first philosophy reduces adoption friction</li>
                <li>• Enterprise-grade security with on-premise options</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Why Now?</h3>
              <ul className="text-green-700 space-y-2">
                <li>• Component-first development is mainstream</li>
                <li>• Existing tools hit scale limits</li>
                <li>• AI makes orchestration possible</li>
                <li>• Remote work demands better collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7: Business Model
    {
      title: "Business Model",
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Predictable SaaS Growth</h2>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Revenue Streams</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Team Plan:</span>
                  <span className="font-semibold">$49/user/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Enterprise Plan:</span>
                  <span className="font-semibold">$10K-50K/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Migration Services:</span>
                  <span className="font-semibold">$25K-100K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Add-ons:</span>
                  <span className="font-semibold">Analytics, AI gen</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Go-to-Market Strategy</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">1.</span>
                  <span className="text-gray-700">Product-Led Growth: Free tier for &lt;10 users</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">2.</span>
                  <span className="text-gray-700">Enterprise Sales: Direct outreach to design system teams</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">3.</span>
                  <span className="text-gray-700">Community Building: Open-source adapters and integrations</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Metrics</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-gray-900">$85K</p>
                <p className="text-sm text-gray-600">Average deal size annually</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">3-6 months</p>
                <p className="text-sm text-gray-600">Enterprise sales cycle</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">$500K+</p>
                <p className="text-sm text-gray-600">Customer lifetime value</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: Traction
    {
      title: "Traction",
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Early Validation</h2>
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Proof of Concept</h3>
              <ul className="text-green-700 space-y-2">
                <li>• Rakuten Internal Pilot: 40% faster component discovery</li>
                <li>• Developer Onboarding: 60% reduction in ramp-up time</li>
                <li>• Component Deduplication: 300+ duplicates identified</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Market Validation</h3>
              <ul className="text-blue-700 space-y-2">
                <li>• 87% report fragmentation as top pain</li>
                <li>• 12 enterprise teams on beta waitlist</li>
                <li>• 3 Fortune 500 companies committed to pilots</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Technical Milestones</h3>
              <ul className="text-purple-700 space-y-2">
                <li>• MVP completed with 5 major tool integrations</li>
                <li>• AI engine supporting multiple providers</li>
                <li>• Enterprise security framework implemented</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 9: Founder
    {
      title: "The Founder",
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Perfect Market Fit</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Technical Credibility</h3>
              <ul className="text-blue-700 space-y-2">
                <li>• <strong>Rakuten:</strong> Led monorepo transformation for 100M+ users</li>
                <li>• <strong>Expedia:</strong> Delivered $777M revenue-generating systems</li>
                <li>• <strong>Real Experience:</strong> Managed 5,000+ components at scale</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Product Vision</h3>
              <ul className="text-green-700 space-y-2">
                <li>• <strong>Pain-driven development:</strong> Built to solve my own frustrations</li>
                <li>• <strong>User-centric design:</strong> Understands both dev and design workflows</li>
                <li>• <strong>Pragmatic approach:</strong> Integration over replacement</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Execution Ability</h3>
              <ul className="text-purple-700 space-y-2">
                <li>• <strong>Full-stack expertise:</strong> Frontend interfaces + backend infrastructure</li>
                <li>• <strong>Enterprise sales experience:</strong> Fortune 500 technical decisions</li>
                <li>• <strong>Global perspective:</strong> US, Europe, MENA, Asia markets</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 10: The Ask
    {
      title: "The Ask",
      content: (
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">$2M Seed Round</h2>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Use of Funds</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Product Development</p>
                    <p className="text-sm text-gray-600">Core platform features, enterprise integrations</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">60%</p>
                    <p className="text-sm text-gray-600">$1.2M</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Go-to-Market</p>
                    <p className="text-sm text-gray-600">Sales team, marketing, customer success</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">25%</p>
                    <p className="text-sm text-gray-600">$500K</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Team Building</p>
                    <p className="text-sm text-gray-600">Senior engineers, product managers</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">15%</p>
                    <p className="text-sm text-gray-600">$300K</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Opportunity</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Valuation Cap</p>
                    <p className="text-sm text-gray-600">Post-money valuation cap at $10M</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">$10M</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Equity Offered</p>
                    <p className="text-sm text-gray-600">20% equity stake for $2M investment</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">20%</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Expected ROI</p>
                    <p className="text-sm text-gray-600">Targeting 5x return in 5 years</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">5x</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
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
        <div className="p-12">
          {slides[currentSlide].content}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <button onClick={handlePrev} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={handleNext} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600">
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="text-sm text-gray-500">{currentSlide + 1} / {slides.length}</span>
          </div>
          <div className="w-1/2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
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
