'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Features', href: '/features' },
    { name: 'Pitch Deck', href: '/pitch-deck' },
    // { name: 'Contact View', href: '/contact-view' },
  ];

  const isActiveLink = (href: string) => pathname === href;

  return (
    <header className='bg-gray-900/80 backdrop-blur-md left-0 right-0  sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
        <div className='flex items-center'>
          <Link href='/' className='flex items-center gap-2'>
            <div className='relative inline-block'>
              <Image src='/overture_logo.png' alt='Overture Logo' width={50} height={50} className='relative' />
            </div>
            <h1 className='text-2xl font-bold ml-3'>Overture</h1>
          </Link>
        </div>
        <nav className='hidden md:flex items-center space-x-6'>
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className={` transition-colors ${isActiveLink(item.href) ? 'text-indigo-200' : 'text-gray-300'}`}>
              {item.name}
            </Link>
          ))}

          <Link
            href='/contact'
            className='px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transform transition-transform'
          >
            Contact Us
          </Link>
        </nav>
        <div className='md:hidden'>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='text-gray-300 hover:text-white focus:outline-none'>
            {mobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className='md:hidden'>
          <nav className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActiveLink(item.href) ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href='/contact'
              onClick={() => setMobileMenuOpen(false)}
              className='block w-full text-center mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transform transition-transform'
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
