import React from 'react';
import { Users, Calendar, Trophy } from 'lucide-react';
import Button from './Button';
import ProgressBar from './ProgressBar';

const ChallengeCard = ({ challenge, onJoin }) => {
  const difficultyColors = {
    Beginner: 'text-green-600',
    Intermediate: 'text-yellow-600',
    Advanced: 'text-red-600'
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:border-green-500 border-2 border-transparent">
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{challenge.icon}</div>
        <span className={`text-sm font-semibold ${difficultyColors[challenge.difficulty]}`}>
          {challenge.difficulty}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {challenge.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {challenge.description}
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>{challenge.duration}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <Users className="w-4 h-4" />
          <span>{challenge.participants.toLocaleString()} joined</span>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600 dark:text-gray-400">Your Progress</span>
          <span className="font-semibold text-green-600">{challenge.progress}%</span>
        </div>
        <ProgressBar progress={challenge.progress} />
      </div>

      {/* Action Button */}
      <Button 
        variant={challenge.progress > 0 ? "secondary" : "primary"}
        size="sm" 
        className="w-full"
        onClick={() => onJoin && onJoin(challenge)}
      >
        {challenge.progress > 0 ? (
          <span className="flex items-center justify-center space-x-2">
            <Trophy className="w-4 h-4" />
            <span>Continue Challenge</span>
          </span>
        ) : (
          'Join Challenge'
        )}
      </Button>
    </div>
  );
};

export default ChallengeCard;
