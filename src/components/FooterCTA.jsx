import React from 'react';

export default function FooterCTA({ onJoin }) {
  return (
    <div className="sticky bottom-4 w-full flex justify-center px-4">
      <button onClick={onJoin} className="px-8 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow-lg hover:bg-emerald-700 transition">
        JOIN TAU-CE
      </button>
    </div>
  );
}
