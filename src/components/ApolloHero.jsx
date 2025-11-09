import React from 'react';
import Spline from '@splinetool/react-spline';

export default function ApolloHero({ onApply }) {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">Apollo University</h1>
        <p className="mt-3 max-w-2xl text-gray-700">Best Private University in Chittoor, AP</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <button onClick={onApply} className="px-6 py-3 rounded-full bg-indigo-700 text-white font-semibold shadow hover:bg-indigo-800 transition">Apply Now</button>
          <a href="#highlights" className="px-6 py-3 rounded-full bg-white text-indigo-700 border border-indigo-200 font-semibold shadow hover:bg-indigo-50 transition">Explore Highlights</a>
        </div>
      </div>
    </section>
  );
}
