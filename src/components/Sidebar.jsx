import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Dumbbell, Trophy, Activity, User, LogOut } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Workouts', path: '/workouts', icon: Dumbbell },
    { name: 'Challenges', path: '/challenges', icon: Trophy },
    { name: 'Activity', path: '/activity', icon: Activity },
    { name: 'Profile', path: '/profile', icon: User }
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/';
  };

  return (
    <aside className="hidden lg:flex lg:flex-col w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <nav className="mt-5 flex-1 px-2 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? 'bg-green-50 dark:bg-green-900 text-green-600'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-green-600' : 'text-gray-400'}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      
      {/* Logout Button */}
      <div className="flex-shrink-0 flex border-t border-gray-200 dark:border-gray-700 p-4">
        <button
          onClick={handleLogout}
          className="flex-shrink-0 w-full group flex items-center px-4 py-3 text-sm font-medium rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
