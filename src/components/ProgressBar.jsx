import React from 'react';

const ProgressBar = ({ progress, height = 'h-2', showLabel = false }) => {
  return (
    <div className="w-full">
      <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${height}`}>
        <div 
          className="bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      {showLabel && (
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 text-right">
          {progress}% Complete
        </p>
      )}
    </div>
  );
};

export default ProgressBar;
