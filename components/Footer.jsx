"use client";

import React from "react";

export default function Footer() {
  return (
    <div className="min-h-[500px] flex flex-col">
      {/* Other content here */}
      <main className="flex-grow">
        {/* Main content */}
      </main>

      {/* Footer */}
      <footer className="bg-transparent text-white py-8 pl-8 w-full mt-auto">
        <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <a
              href="https://github.com/shikhar797"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/shikhargupta743"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/shikhar-gupta-66b861317/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/shikhar-gupta/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-600 transition-colors"
            >
              Leetcode
            </a>
          </div>
          <div className="text-center sm:text-right pr-12">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Shikhar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
