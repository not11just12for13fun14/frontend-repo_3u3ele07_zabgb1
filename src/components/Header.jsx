import React from 'react';
import { User } from 'lucide-react';

export default function Header({ onNavigate }) {
  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-emerald-500" />
          <span className="font-semibold text-gray-900">TAU-CE</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <button className="hover:text-emerald-600" onClick={() => onNavigate('home')}>Home</button>
          <button className="hover:text-emerald-600" onClick={() => onNavigate('enroll')}>Enroll</button>
        </nav>
        <button aria-label="Profile" className="p-2 rounded-full hover:bg-gray-100" onClick={() => onNavigate('profile')}>
          <User className="h-6 w-6 text-gray-800" />
        </button>
      </div>
    </header>
  );
}
