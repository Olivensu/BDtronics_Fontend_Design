import Link from 'next/link';
import React from 'react'

export const CategoryDrawer = ({isOpen, setIsOpen}) => {
    return (
        <div className="relative z-50">
          {/* Button to open the drawer */}
          
    
          {/* Drawer */}
          <div
            className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform duration-300 ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            style={{
              width: window.innerWidth < 768 ? '100%' : '400px',
            }}
          >
            {/* Close button */}
            <button
              className="btn btn-sm btn-circle absolute top-2 right-2"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
    
            {/* Drawer Content */}
            <div className="p-4">
              <h2 className="text-lg font-bold">Shop by Categories</h2>
              <ul className="menu menu-compact mt-4">
                <li>
                  <Link href="#how-to-order">How to Order</Link>
                </li>
                <li>
                  <Link href="#3d-printing">3D Printing Service</Link>
                </li>
                <li>
                  <Link href="#solar-calculator">Solar Calculator</Link>
                </li>
                <li>
                  <Link href="#blog">Blog</Link>
                </li>
                <li>
                  <Link href="#facebook">Facebook Page</Link>
                </li>
                <li>
                  <Link href="#youtube">YouTube Channel</Link>
                </li>
                <li>
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
    
          {/* Overlay */}
          {isOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
              onClick={() => setIsOpen(false)}
            ></div>
          )}
        </div>
      );
}
