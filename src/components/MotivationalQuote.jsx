import React, { useState } from 'react';
import { Quote, RefreshCw } from 'lucide-react';

const quotes = [
  { text: "The body achieves what the mind believes.", author: "Napoleon Hill" },
  { text: "Take care of your body. It's the only place you have to live.", author: "Jim Rohn" },
  { text: "Fitness is not about being better than someone else. It's about being better than you used to be.", author: "Khloe Kardashian" },
  { text: "The pain you feel today will be the strength you feel tomorrow.", author: "Arnold Schwarzenegger" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "All progress takes place outside the comfort zone.", author: "Michael John Bobak" },
  { text: "If it doesn't challenge you, it doesn't change you.", author: "Fred DeVito" },
  { text: "Strength does not come from the physical capacity. It comes from an indomitable will.", author: "Mahatma Gandhi" },
];

const MotivationalQuote = () => {
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * quotes.length));
  const quote = quotes[idx];

  const next = () => setIdx(i => (i + 1) % quotes.length);

  return (
    <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-lg p-6 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-10">
        <Quote className="w-32 h-32 -mt-4 -mr-4" />
      </div>
      <p className="text-lg font-medium italic mb-3 relative z-10">"{quote.text}"</p>
      <p className="text-green-200 text-sm">— {quote.author}</p>
      <button onClick={next}
        className="mt-4 flex items-center gap-2 text-green-200 hover:text-white text-sm transition-colors">
        <RefreshCw className="w-4 h-4" /> New Quote
      </button>
    </div>
  );
};

export default MotivationalQuote;
