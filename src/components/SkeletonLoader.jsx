import React from 'react';

export const CardSkeleton = () => (
  <div className="card animate-pulse">
    <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>
    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
    <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
  </div>
);

export const StatSkeleton = () => (
  <div className="card animate-pulse">
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
        <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
      </div>
      <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
    </div>
  </div>
);

export const ChartSkeleton = () => (
  <div className="card animate-pulse">
    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
    <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded"></div>
  </div>
);
