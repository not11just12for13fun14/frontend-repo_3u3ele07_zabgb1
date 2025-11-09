import React from 'react';

export default function ApolloFooter() {
  return (
    <footer className="py-10 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Apollo University, Chittoor, AP. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-emerald-700 hover:underline">Admissions</a>
          <a href="#" className="text-sm text-emerald-700 hover:underline">Programs</a>
          <a href="#" className="text-sm text-emerald-700 hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
