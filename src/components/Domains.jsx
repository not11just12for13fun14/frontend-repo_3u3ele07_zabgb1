import React from 'react';

const domains = [
  {
    key: 'health',
    title: 'Health & Hygiene',
    color: 'from-rose-500 to-pink-500',
    mentor: 'Dr. Ananya Rao',
    video: 'https://www.youtube.com/embed/ysz5S6PUM-U'
  },
  {
    key: 'education',
    title: 'Education & Literacy',
    color: 'from-indigo-500 to-sky-500',
    mentor: 'Prof. Karthik Iyer',
    video: 'https://www.youtube.com/embed/oUFJJNQGwhk'
  },
  {
    key: 'environment',
    title: 'Environment & Sustainability',
    color: 'from-emerald-500 to-lime-500',
    mentor: 'Dr. Meera Nair',
    video: 'https://www.youtube.com/embed/ScMzIvxBSi4'
  },
  {
    key: 'welfare',
    title: 'Social Welfare',
    color: 'from-amber-500 to-orange-500',
    mentor: 'Prof. Suresh Patil',
    video: 'https://www.youtube.com/embed/aqz-KE-bpKQ'
  },
  {
    key: 'drr',
    title: 'Disaster Risk Reduction (DRR)',
    color: 'from-cyan-500 to-teal-500',
    mentor: 'Dr. Neha Kulkarni',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

export default function Domains({ onJoin }) {
  return (
    <section id="domains" className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Five Domains of Impact</h2>
        <p className="mt-2 text-gray-600 text-center max-w-2xl mx-auto">Get inspired by our faculty mentors and explore how you can contribute across health, education, environment, social welfare, and disaster resilience.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((d) => (
            <div key={d.key} className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
              <div className={`h-2 bg-gradient-to-r ${d.color}`} />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{d.title}</h3>
                <p className="text-sm text-gray-600 mt-1">Mentor: {d.mentor}</p>
                <div className="mt-3 aspect-video w-full overflow-hidden rounded-lg">
                  <iframe
                    className="w-full h-full"
                    src={d.video}
                    title={`${d.title} Mentor Message`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button onClick={onJoin} className="px-8 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition">JOIN TAU-CE</button>
        </div>
      </div>
    </section>
  );
}
