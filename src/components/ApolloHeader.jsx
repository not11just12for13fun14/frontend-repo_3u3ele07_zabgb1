import React from 'react';
import { Phone, MapPin, User } from 'lucide-react';

export default function ApolloHeader({ onNavigate }) {
  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded bg-indigo-700" />
          <div className="leading-tight">
            <p className="font-semibold text-gray-900">Apollo University</p>
            <p className="text-xs text-gray-600 flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Chittoor, Andhra Pradesh</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <button className="hover:text-indigo-700" onClick={() => onNavigate('home')}>Home</button>
          <a className="hover:text-indigo-700" href="#highlights">Highlights</a>
          <button className="hover:text-indigo-700" onClick={() => onNavigate('apply')}>Apply</button>
        </div>
        <button aria-label="Profile" className="p-2 rounded-full hover:bg-gray-100" onClick={() => onNavigate('profile')}>
          <User className="h-6 w-6 text-gray-800" />
        </button>
      </div>
    </header>
  );
}
