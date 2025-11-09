import React, { useState } from 'react';
import ApolloHeader from './components/ApolloHeader';
import ApolloHero from './components/ApolloHero';
import Highlights from './components/Highlights';
import ApolloFooter from './components/ApolloFooter';

function Home({ onApply }) {
  return (
    <div>
      <ApolloHero onApply={onApply} />
      <div id="highlights">
        <Highlights />
      </div>
    </div>
  );
}

function Apply() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900">Apply to Apollo University</h2>
      <p className="mt-2 text-gray-700">Admissions open for UG, PG, and Doctoral programs. Fill the form below to get a callback from our admissions team.</p>
      <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Jane Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="jane@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input type="tel" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="+91XXXXXXXXXX" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Program Interested</label>
          <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>Undergraduate</option>
            <option>Postgraduate</option>
            <option>Doctoral</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" rows={4} placeholder="Tell us about your interests" />
        </div>
        <div className="sm:col-span-2">
          <button type="button" className="w-full px-6 py-3 rounded-md bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">Request Callback</button>
        </div>
      </form>
    </div>
  );
}

function Profile() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900">Your Profile</h2>
      <p className="mt-2 text-gray-700">Sign in to view your application status and personalized recommendations.</p>
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState('home');

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <ApolloHeader onNavigate={setRoute} />
      <main className="pt-16">
        {route === 'home' && <Home onApply={() => setRoute('apply')} />}
        {route === 'apply' && <Apply />}
        {route === 'profile' && <Profile />}
      </main>
      <ApolloFooter />
    </div>
  );
}
