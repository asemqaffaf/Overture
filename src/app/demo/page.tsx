

'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Search, Code, Eye, Users, Zap, Grid, Box, Type, Image, Square, Layout, Download, Send } from 'lucide-react';

const VisualComposer = () => {
  const [draggedComponent, setDraggedComponent] = useState(null as any);
  const [canvasComponents, setCanvasComponents] = useState([] as any[]);
  const [selectedComponent, setSelectedComponent] = useState(null as any);
  const [activeTab, setActiveTab] = useState('design');

  const componentLibraries = [
    {
      name: 'Storybook',
      color: 'bg-pink-100 text-pink-800',
      components: [
        { id: 'btn-primary', name: 'Primary Button', icon: Square, props: { variant: 'primary', size: 'md' } },
        { id: 'btn-secondary', name: 'Secondary Button', icon: Square, props: { variant: 'secondary', size: 'md' } },
        { id: 'input-text', name: 'Text Input', icon: Type, props: { placeholder: 'Enter text...' } },
      ],
    },
    {
      name: 'Figma',
      color: 'bg-purple-100 text-purple-800',
      components: [
        { id: 'card-hero', name: 'Hero Card', icon: Layout, props: { title: 'Hero Section', subtitle: 'Compelling headline' } },
        { id: 'avatar-user', name: 'User Avatar', icon: Users, props: { size: 'lg', status: 'online' } },
        { id: 'icon-star', name: 'Star Icon', icon: Zap, props: { filled: true, size: 'md' } },
      ],
    },
    {
      name: 'Bit.dev',
      color: 'bg-blue-100 text-blue-800',
      components: [
        { id: 'grid-responsive', name: 'Responsive Grid', icon: Grid, props: { columns: 3, gap: 'md' } },
        { id: 'modal-dialog', name: 'Modal Dialog', icon: Box, props: { size: 'md', centered: true } },
        { id: 'img-optimized', name: 'Optimized Image', icon: Image, props: { lazy: true, responsive: true } },
      ],
    },
  ];

  const handleDragStart = (e: any, component: any, library: any) => {
    setDraggedComponent({ ...component, library });
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    if (draggedComponent) {
      const rect = e.currentTarget.getBoundingClientRect();
      const newComponent = {
        ...draggedComponent,
        id: `${draggedComponent.id}-${Date.now()}`,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      setCanvasComponents((prev) => [...prev, newComponent]);
      setDraggedComponent(null);
    }
  };

  const ComponentPreview = ({ component }: { component: any }) => {
    const Icon = component.icon;
    return (
      <div
        className={`absolute p-2 border-2 border-dashed border-gray-300 rounded-lg bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow ${
          selectedComponent?.id === component.id ? 'ring-2 ring-blue-500' : ''
        }`}
        style={{ left: component.x, top: component.y }}
        onClick={() => setSelectedComponent(component)}
      >
        <div className='flex items-center gap-2'>
          <Icon className='w-4 h-4 text-gray-600' />
          <span className='text-sm font-medium text-gray-800'>{component.name}</span>
          <span className={`text-xs px-2 py-1 rounded ${component.library.color}`}>{component.library.name}</span>
        </div>
      </div>
    );
  };

  const generateCode = () => {
    const codeLines = canvasComponents.map((comp) => {
      const propsStr = Object.entries(comp.props)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ');
      return `<${comp.name.replace(/\s+/g, '')} ${propsStr} />`;
    });

    return `import React from 'react';

export const GeneratedPage = () => {
  return (
    <div className="page-container">
${codeLines.map((line) => `      ${line}`).join('\n')}
    </div>
  );
};`;
  };

  return (
    <div className='w-full h-screen bg-gray-50 flex'>
      {/* Left Sidebar - Component Library */}
      <div className='w-80 bg-white border-r border-gray-200 flex flex-col'>
        <div className='p-4 border-b border-gray-200'>
          <h2 className='text-lg font-semibold text-gray-900 mb-3'>Component Libraries</h2>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
            <input
              type='text'
              placeholder='Search components...'
              className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>
        </div>

        <div className='flex-1 overflow-y-auto p-4'>
          {componentLibraries.map((library) => (
            <div key={library.name} className='mb-6'>
              <h3 className='text-sm font-medium text-gray-700 mb-2 flex items-center gap-2'>
                <span className={`w-3 h-3 rounded-full ${library.color.split(' ')[0]}`}></span>
                {library.name}
              </h3>
              <div className='space-y-2'>
                {library.components.map((component) => {
                  const Icon = component.icon;
                  return (
                    <div
                      key={component.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, component, library)}
                      className='p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-move hover:bg-gray-100 transition-colors'
                    >
                      <div className='flex items-center gap-2'>
                        <Icon className='w-4 h-4 text-gray-600' />
                        <span className='text-sm font-medium text-gray-800'>{component.name}</span>
                      </div>
                      <div className='text-xs text-gray-500 mt-1'>
                        {Object.entries(component.props)
                          .slice(0, 2)
                          .map(([key, value]) => `${key}: ${value}`)
                          .join(', ')}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className='flex-1 flex flex-col'>
        {/* Top Toolbar */}
        <div className='bg-white border-b border-gray-200 p-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <h1 className='text-xl font-semibold text-gray-900'>Visual Composer</h1>
              <div className='flex items-center gap-2'>
                <button
                  onClick={() => setActiveTab('design')}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === 'design' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Eye className='w-4 h-4 inline mr-1' />
                  Design
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === 'code' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Code className='w-4 h-4 inline mr-1' />
                  Code
                </button>
              </div>
            </div>
            <div className='flex flex-col items-end gap-4'>
              <h2 className='text-md font-semibold text-red-500 mb-3 '>Overture - Demo</h2>
              <div className='flex items-center gap-2'>
                <button className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2'>
                  <Download className='w-4 h-4' />
                  Export
                </button>
                <button className='px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2'>
                  <Send className='w-4 h-4' />
                  Deploy
                </button>
                <button className='px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2'>
                  <Users className='w-4 h-4' />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Canvas or Code View */}
        {activeTab === 'design' ? (
          <div className='flex-1 relative bg-white m-4 border-2 border-dashed border-gray-300 rounded-lg' onDragOver={handleDragOver} onDrop={handleDrop}>
            {canvasComponents.length === 0 ? (
              <div className='absolute inset-0 flex items-center justify-center text-gray-500'>
                <div className='text-center'>
                  <Layout className='w-12 h-12 mx-auto mb-4 text-gray-400' />
                  <p className='text-lg font-medium'>Drag components here to start building</p>
                  <p className='text-sm'>Components from Storybook, Figma, and Bit.dev</p>
                </div>
              </div>
            ) : (
              canvasComponents.map((component) => <ComponentPreview key={component.id} component={component} />)
            )}
          </div>
        ) : (
          <div className='flex-1 m-4 bg-gray-900 rounded-lg p-6'>
            <pre className='text-green-400 font-mono text-sm overflow-auto'>{generateCode()}</pre>
          </div>
        )}
      </div>

      {/* Right Sidebar - Properties */}
      {selectedComponent && (
        <div className='w-80 bg-white border-l border-gray-200 p-4'>
          <h3 className='text-lg font-semibold text-gray-900 mb-4'>Properties</h3>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Component</label>
              <div className={`p-2 rounded ${selectedComponent.library.color} text-sm`}>
                {selectedComponent.name} ({selectedComponent.library.name})
              </div>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Properties</label>
              <div className='space-y-2'>
                {Object.entries(selectedComponent.props).map(([key, value]: any) => (
                  <div key={key} className='flex justify-between items-center p-2 bg-gray-50 rounded'>
                    <span className='text-sm text-gray-600'>{key}</span>
                    <span className='text-sm font-medium text-gray-900'>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisualComposer;
