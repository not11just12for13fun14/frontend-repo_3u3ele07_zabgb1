import React from 'react';
import { Award, GraduationCap, Landmark, Users } from 'lucide-react';

const stats = [
  {
    icon: Award,
    title: 'NAAC Accreditation',
    value: 'A+ Grade',
    desc: 'Recognized for academic excellence and quality benchmarks.'
  },
  {
    icon: GraduationCap,
    title: 'Programs',
    value: '200+ Programs',
    desc: 'Interdisciplinary UG, PG, and doctoral offerings.'
  },
  {
    icon: Users,
    title: 'Alumni Network',
    value: '50,000+',
    desc: 'Global community of leaders and innovators.'
  },
  {
    icon: Landmark,
    title: 'Campus',
    value: '100+ Acres',
    desc: 'Modern infrastructure in the heart of Chittoor, AP.'
  }
];

export default function Highlights() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Why Apollo University?</h2>
        <p className="mt-2 text-gray-600 text-center max-w-2xl mx-auto">Experience a future-forward education with research, innovation, and holistic development at its core.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.title} className="rounded-xl border border-emerald-100 bg-white shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <s.icon className="h-6 w-6 text-emerald-600" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-600">{s.title}</p>
                  <p className="text-xl font-semibold text-gray-900">{s.value}</p>
                </div>
              </div>
              <p className="mt-3 text-gray-700 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
