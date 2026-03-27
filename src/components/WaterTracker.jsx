import React, { useState } from 'react';
import { Droplets } from 'lucide-react';

const WaterTracker = () => {
  const [glasses, setGlasses] = useState(3);
  const goal = 8;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <Droplets className="w-5 h-5 text-blue-500" /> Water Intake
      </h2>
      <div className="flex items-end gap-2 mb-4">
        <span className="text-4xl font-bold text-blue-500">{glasses}</span>
        <span className="text-gray-500 dark:text-gray-400 mb-1">/ {goal} glasses</span>
      </div>
      <div className="flex gap-2 mb-4 flex-wrap">
        {Array.from({ length: goal }).map((_, i) => (
          <button key={i} onClick={() => setGlasses(i + 1)}
            className={`w-8 h-10 rounded-b-full rounded-t-sm transition-all border-2 ${
              i < glasses
                ? 'bg-blue-400 border-blue-500 scale-110'
                : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600'
            }`}
            title={`${i + 1} glass${i > 0 ? 'es' : ''}`}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <button onClick={() => setGlasses(g => Math.max(0, g - 1))}
          className="flex-1 py-2 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
          − Remove
        </button>
        <button onClick={() => setGlasses(g => Math.min(goal, g + 1))}
          className="flex-1 py-2 text-sm font-medium rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          + Add Glass
        </button>
      </div>
      {glasses >= goal && (
        <p className="text-center text-green-600 font-semibold text-sm mt-3">🎉 Daily goal reached!</p>
      )}
    </div>
  );
};

export default WaterTracker;
