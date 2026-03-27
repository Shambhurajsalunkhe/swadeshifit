import React, { useState } from 'react';
import { Scale } from 'lucide-react';
import Button from './Button';

const getBMICategory = (bmi) => {
  if (bmi < 18.5) return { label: 'Underweight', color: 'text-blue-500' };
  if (bmi < 25) return { label: 'Normal weight', color: 'text-green-500' };
  if (bmi < 30) return { label: 'Overweight', color: 'text-yellow-500' };
  return { label: 'Obese', color: 'text-red-500' };
};

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w > 0 && h > 0) setBmi((w / (h * h)).toFixed(1));
  };

  const category = bmi ? getBMICategory(parseFloat(bmi)) : null;
  const inputClass = "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white text-sm";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <Scale className="w-5 h-5 text-green-600" /> BMI Calculator
      </h2>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Weight (kg)</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="75" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Height (cm)</label>
          <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="175" className={inputClass} />
        </div>
      </div>
      <Button size="sm" className="w-full mb-4" onClick={calculate}>Calculate BMI</Button>
      {bmi && (
        <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <p className="text-4xl font-bold text-gray-900 dark:text-white">{bmi}</p>
          <p className={`text-sm font-semibold mt-1 ${category.color}`}>{category.label}</p>
          <div className="mt-3 w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 to-red-500" />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-gray-800 rounded-full shadow"
              style={{ left: `${Math.min(Math.max(((parseFloat(bmi) - 10) / 30) * 100, 0), 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>10</span><span>18.5</span><span>25</span><span>30</span><span>40</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
