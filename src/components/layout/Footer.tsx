import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '/features' },
      { name: 'Pitch Deck', href: '/pitch-deck' },
    ],
    Platform: [
      { name: 'Component Intelligence', href: '/component-intelligence-platform' },
      { name: 'Visual Composer', href: '/visual-composer' },
      { name: 'Migration Intelligence', href: '/migration-Intelligence' },
      { name: 'Performance Orchestration', href: '/performance-orchestration' },
    ],
    Company: [
      { name: 'Contact', href: '/contact' },
      // { name: 'Contact View', href: '/contact-view' },
    ],
  };

  const socialLinks = [
    // { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/asemqaffaf' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/asem-qaffaf-75b541199' },
    { name: 'Email', icon: Mail, href: 'mailto:asem@qaffaf.com' },
  ];

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/overture_logo.png" alt="Overture Logo" width={32} height={32} />
              <span className="text-xl font-bold text-white">Overture</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              The Component Intelligence Platform for Enterprise Frontend Teams
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Overture. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
