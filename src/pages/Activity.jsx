import React, { useState } from 'react';
import { Plus, Calendar, MapPin, Clock, Flame } from 'lucide-react';
import Button from '../components/Button';
import ActivityChart from '../components/ActivityChart';
import { activities, weeklyData } from '../utils/dummyData';

const card = "bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl";
const inputClass = "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all";

const Activity = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    type: 'Running', duration: '', distance: '',
    date: new Date().toISOString().split('T')[0]
  });

  const activityTypes = ['Running', 'Walking', 'Cycling', 'Gym', 'Yoga', 'Swimming'];
  const icons = { Running: '🏃', Walking: '🚶', Cycling: '🚴', Gym: '💪', Yoga: '🧘', Swimming: '🏊' };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Activity logged successfully!');
    setShowModal(false);
    setFormData({ type: 'Running', duration: '', distance: '', date: new Date().toISOString().split('T')[0] });
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Activity Tracker</h1>
            <p className="text-blue-100">Log and monitor your fitness activities</p>
          </div>
          <Button variant="secondary" onClick={() => setShowModal(true)} className="flex items-center space-x-2">
            <Plus className="w-5 h-5" /><span>Log Activity</span>
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {[
          { label: 'Total Activities', value: '28', icon: Calendar, color: 'text-blue-500' },
          { label: 'Total Distance', value: '156 km', icon: MapPin, color: 'text-green-500' },
          { label: 'Total Time', value: '42 hrs', icon: Clock, color: 'text-purple-500' },
          { label: 'Calories Burned', value: '18.5K', icon: Flame, color: 'text-orange-500' }
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className={card}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                </div>
                <Icon className={`w-10 h-10 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      <div className={card}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Weekly Progress</h2>
        <ActivityChart data={weeklyData} />
      </div>

      <div className={card}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent Activities</h2>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{icons[activity.type] || '🏃'}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{activity.type}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {new Date(activity.date).toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                {activity.distance > 0 && (
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 dark:text-white">{activity.distance} km</p>
                    <p className="text-gray-600 dark:text-gray-400">Distance</p>
                  </div>
                )}
                <div className="text-center">
                  <p className="font-semibold text-gray-900 dark:text-white">{activity.duration} min</p>
                  <p className="text-gray-600 dark:text-gray-400">Duration</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-orange-600">{activity.calories} cal</p>
                  <p className="text-gray-600 dark:text-gray-400">Burned</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-md w-full p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Log New Activity</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Activity Type</label>
                <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className={inputClass} required>
                  {activityTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Duration (minutes)</label>
                <input type="number" value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className={inputClass} placeholder="30" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Distance (km) - Optional</label>
                <input type="number" step="0.1" value={formData.distance} onChange={(e) => setFormData({ ...formData, distance: e.target.value })}
                  className={inputClass} placeholder="5.0" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date</label>
                <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className={inputClass} required />
              </div>
              <div className="flex space-x-4 pt-4">
                <Button type="submit" className="flex-1">Log Activity</Button>
                <Button type="button" variant="outline" onClick={() => setShowModal(false)} className="flex-1">Cancel</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activity;
