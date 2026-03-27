import React, { useState } from 'react';
import { TrendingUp, Target, Calendar, Award, Edit2, Save } from 'lucide-react';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import { useToast } from '../components/Toast';
import { userProfile, achievements } from '../utils/dummyData';

const card = "bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl";
const inputClass = "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(userProfile);
  const toast = useToast();

  const handleSave = () => {
    setIsEditing(false);
    toast('Profile updated successfully!', 'success');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-purple-600 text-2xl font-bold">
              {profile.avatar}
            </div>
            <div>
              <h1 className="text-3xl font-bold">{profile.name}</h1>
              <p className="text-purple-100">{profile.email}</p>
              <p className="text-sm text-purple-200 mt-1">
                Member since {new Date(profile.joinDate).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>
          <Button variant="secondary" onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className="flex items-center space-x-2">
            {isEditing ? <Save className="w-5 h-5" /> : <Edit2 className="w-5 h-5" />}
            <span>{isEditing ? 'Save' : 'Edit Profile'}</span>
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900', value: profile.totalWorkouts, label: 'Total Workouts' },
          { icon: Target, color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-900', value: profile.totalCalories.toLocaleString(), label: 'Calories Burned' },
          { icon: Calendar, color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900', value: `${profile.currentStreak} 🔥`, label: 'Day Streak' },
          { icon: Award, color: 'text-purple-600', bg: 'bg-purple-100 dark:bg-purple-900', value: achievements.filter(a => a.unlocked).length, label: 'Achievements' }
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className={`${card} text-center`}>
              <div className={`w-12 h-12 ${stat.bg} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Personal Info */}
        <div className={card}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
              {isEditing
                ? <input type="text" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className={inputClass} />
                : <p className="text-gray-900 dark:text-white font-medium">{profile.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <p className="text-gray-900 dark:text-white font-medium">{profile.email}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Age</label>
                {isEditing
                  ? <input type="number" value={profile.age} onChange={(e) => setProfile({ ...profile, age: e.target.value })} className={inputClass} />
                  : <p className="text-gray-900 dark:text-white font-medium">{profile.age} years</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Height</label>
                {isEditing
                  ? <input type="number" value={profile.height} onChange={(e) => setProfile({ ...profile, height: e.target.value })} className={inputClass} />
                  : <p className="text-gray-900 dark:text-white font-medium">{profile.height} cm</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Fitness Goals */}
        <div className={card}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Fitness Goals</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Primary Goal</label>
              {isEditing
                ? <select value={profile.fitnessGoal} onChange={(e) => setProfile({ ...profile, fitnessGoal: e.target.value })} className={inputClass}>
                    {['Build Muscle & Lose Fat', 'Weight Loss', 'Muscle Gain', 'Improve Endurance', 'General Fitness'].map(g => <option key={g}>{g}</option>)}
                  </select>
                : <p className="text-gray-900 dark:text-white font-medium">{profile.fitnessGoal}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Weight Progress</label>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-400">Current: {profile.currentWeight} kg</span>
                <span className="text-gray-600 dark:text-gray-400">Target: {profile.targetWeight} kg</span>
              </div>
              <ProgressBar progress={75} />
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">{profile.currentWeight - profile.targetWeight} kg to go!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className={card}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <Award className="w-6 h-6 mr-2 text-yellow-500" /> Achievements & Badges
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {achievements.map((achievement) => (
            <div key={achievement.id}
              className={`text-center p-4 rounded-lg transition-all ${
                achievement.unlocked
                  ? 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 border-2 border-yellow-400'
                  : 'bg-gray-100 dark:bg-gray-700 opacity-50 grayscale'
              }`}>
              <div className="text-4xl mb-2">{achievement.icon}</div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">{achievement.name}</p>
              {achievement.unlocked && achievement.date && (
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {new Date(achievement.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Activity Summary */}
      <div className={card}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Activity Summary</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { border: 'border-blue-500', label: 'Most Active Day', value: 'Saturday', sub: 'Avg 18,000 steps' },
            { border: 'border-green-500', label: 'Favorite Workout', value: 'HIIT Cardio', sub: '32 sessions' },
            { border: 'border-purple-500', label: 'Best Streak', value: '21 Days', sub: 'Feb 2026' }
          ].map((item, i) => (
            <div key={i} className={`border-l-4 ${item.border} pl-4`}>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{item.label}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{item.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
