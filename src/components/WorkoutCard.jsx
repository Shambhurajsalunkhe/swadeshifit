import React from 'react';
import { Clock, Flame, TrendingUp } from 'lucide-react';
import Button from './Button';

const WorkoutCard = ({ workout, onStart }) => {
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    Advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl group cursor-pointer overflow-hidden">
      {/* Image */}
      <div className="relative h-48 -m-6 mb-4 overflow-hidden">
        <img 
          src={workout.image} 
          alt={workout.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[workout.difficulty]}`}>
            {workout.difficulty}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div>
          <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
            {workout.category}
          </span>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
            {workout.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {workout.description}
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{workout.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Flame className="w-4 h-4 text-orange-500" />
            <span>{workout.calories} cal</span>
          </div>
          <div className="flex items-center space-x-1">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span>{workout.difficulty}</span>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          variant="primary" 
          size="sm" 
          className="w-full"
          onClick={() => onStart && onStart(workout)}
        >
          Start Workout
        </Button>
      </div>
    </div>
  );
};

export default WorkoutCard;
