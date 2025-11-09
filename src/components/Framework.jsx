import React from 'react';
import { Award, Target, ListChecks, CalendarCheck2 } from 'lucide-react';

export default function Framework({ onJoin }) {
  const objectives = [
    'Promote active student participation in community-based outreach.',
    'Track and recognize community engagement through a standardized hour-based log system.',
    'Introduce a tiered certificate system to appreciate and reward student efforts.',
    'Strengthen institutional-community collaboration and NSS-CCE synergy.'
  ];

  const categories = [
    { name: 'Platinum', hours: '150+ hours', criteria: 'Contribution with leadership roles', color: 'from-violet-500 to-fuchsia-500' },
    { name: 'Gold', hours: '100–149 hours', criteria: 'Sustained and consistent participation', color: 'from-amber-500 to-orange-500' },
    { name: 'Silver', hours: '60–99 hours', criteria: 'Active engagement in occasional activities', color: 'from-slate-500 to-gray-600' }
  ];

  const domainExamples = [
    {
      title: 'Health & Hygiene',
      sdg: 'SDG 1, 2, 3, 5, 6, 17',
      items: [
        'Menstrual hygiene campaigns',
        'TB, obesity & cancer awareness',
        'Personal hygiene & hand washing demos',
        'Safe water handling, passive smoking awareness'
      ]
    },
    {
      title: 'Education & Literacy',
      sdg: 'SDG 4, 9, 10, 17',
      items: [
        'Cyber safety awareness, digital literacy',
        'Tutorial classes and reading clubs',
        'Debates, JAM sessions, seminars'
      ]
    },
    {
      title: 'Environment & Sustainability',
      sdg: 'SDG 7, 13, 14, 15, 17',
      items: [
        'Seed ball preparation and distribution',
        'Urban bamboo forestry',
        'Rainwater harvesting, soak pits, tree guards',
        'Plastic-free campaigns, energy conservation drives'
      ]
    },
    {
      title: 'Social Welfare',
      sdg: 'SDG 3, 5, 8, 10, 16',
      items: [
        'Visits to elder care and special needs homes',
        'Gender equality campaigns',
        'Road safety and government scheme surveys'
      ]
    },
    {
      title: 'Disaster Risk Reduction (DRR)',
      sdg: 'SDG 11, 13, 17',
      items: [
        'Earthquake/fire/flood safety drills',
        'DRR awareness sessions and training',
        'Fund/material collection during emergencies'
      ]
    }
  ];

  const implementation = [
    {
      title: 'Calendar & Planning',
      desc: 'Annual outreach calendar with defined themes and goals (CCE + NSS).'
    },
    {
      title: 'Logbook & Monitoring',
      desc: 'Each student maintains a verified hour log with proofs (attendance, photos, reports).'
    },
    {
      title: 'Certification Process',
      desc: 'Annual certification based on verified logs with joint authentication (NSS PO, CCE Coordinator, Registrar).'
    },
    {
      title: 'Technology Support',
      desc: 'Mobile app for hour tracking and dashboards for real-time insights.'
    },
    {
      title: 'Reports & Outcomes',
      desc: 'Monthly and annual reviews with outcome-based reporting to measure social impact.'
    }
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-10">
          <div>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-emerald-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Objectives</h2>
            </div>
            <ul className="mt-4 grid gap-2 list-disc pl-5 text-gray-700">
              {objectives.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Certificate Categories</h2>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((c) => (
                <div key={c.name} className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${c.color}`} />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900">{c.name}</h3>
                    <p className="text-sm text-gray-600">{c.hours}</p>
                    <p className="mt-2 text-gray-700">{c.criteria}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <ListChecks className="h-5 w-5 text-sky-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Key Activity Domains (Mapped to SDGs)</h2>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              {domainExamples.map((d) => (
                <div key={d.title} className="rounded-xl border border-gray-200 bg-white shadow-sm p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{d.title}</h3>
                      <p className="text-sm text-emerald-700">{d.sdg}</p>
                    </div>
                  </div>
                  <ul className="mt-3 text-gray-700 list-disc pl-5 space-y-1">
                    {d.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <CalendarCheck2 className="h-5 w-5 text-indigo-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Implementation Plan</h2>
            </div>
            <ol className="mt-4 grid gap-3 list-decimal pl-5 text-gray-700">
              {implementation.map((step) => (
                <li key={step.title}>
                  <span className="font-medium text-gray-900">{step.title}: </span>
                  {step.desc}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex justify-center pt-2">
            <button onClick={onJoin} className="px-8 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition">
              JOIN TAU-CE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
