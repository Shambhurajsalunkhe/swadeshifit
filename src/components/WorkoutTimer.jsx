import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, X, Timer } from 'lucide-react';

const WorkoutTimer = ({ workout, onClose }) => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setSeconds(s => s + 1), 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const fmt = (s) => {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };

  const reset = () => { setRunning(false); setSeconds(0); };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-sm w-full p-8 text-center shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Timer className="w-5 h-5 text-green-600" /> {workout.name}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="w-40 h-40 rounded-full border-8 border-green-500 flex items-center justify-center mx-auto mb-6 bg-green-50 dark:bg-green-900/20">
          <span className="text-4xl font-mono font-bold text-gray-900 dark:text-white">{fmt(seconds)}</span>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          {workout.category} · {workout.duration} · {workout.calories} cal
        </p>

        <div className="flex justify-center gap-4">
          <button onClick={reset}
            className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <RotateCcw className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button onClick={() => setRunning(r => !r)}
            className={`w-16 h-16 rounded-full flex items-center justify-center text-white transition-all shadow-lg ${running ? 'bg-red-500 hover:bg-red-600' : 'bg-green-600 hover:bg-green-700'}`}>
            {running ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutTimer;
