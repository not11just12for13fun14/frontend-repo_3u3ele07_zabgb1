import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col items-center justify-center px-4 text-center">
        <p className="text-emerald-700 font-semibold tracking-wide">“The smallest act of kindness is worth more than the grandest intention.”</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-gray-900">Discover. Engage. Transform.</h1>
        <p className="mt-3 max-w-2xl text-gray-700">Explore five domains of social impact at TAU-CE and start contributing to your community today.</p>
      </div>
    </section>
  );
}
