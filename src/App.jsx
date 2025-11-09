import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Domains from './components/Domains';
import FooterCTA from './components/FooterCTA';

function Home({ onJoin }) {
  return (
    <div>
      <Hero />
      <Domains onJoin={onJoin} />
      <FooterCTA onJoin={onJoin} />
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState('home');

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header onNavigate={setRoute} />
      <main className="pt-16">
        {route === 'home' && <Home onJoin={() => setRoute('enroll')} />}
        {route === 'enroll' && (
          <div className="max-w-3xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold">Enrollment Coming Next</h2>
            <p className="mt-2 text-gray-600">This prototype shows the landing experience. We will add full registration, domain selection, and profile tracking next.</p>
          </div>
        )}
        {route === 'profile' && (
          <div className="max-w-3xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold">Profile</h2>
            <p className="mt-2 text-gray-600">Your personalized dashboard will appear here.</p>
          </div>
        )}
      </main>
    </div>
  );
}
