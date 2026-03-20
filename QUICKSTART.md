# 🚀 Quick Start Guide - SwadeshiFit

## Your app is now running! 🎉

**Development Server:** http://localhost:5174

## 🎯 How to Use the App

### 1. Explore the Landing Page
- Open http://localhost:5174 in your browser
- See the hero section, features, and testimonials
- Click "Get Started" or "Explore Workouts"

### 2. Create an Account
- Click "Get Started" or "Register"
- Fill in the form (any email/password works - it's a demo)
- Password must be at least 6 characters
- You'll be automatically logged in

### 3. Explore the Dashboard
After login, you'll see:
- **Daily Stats:** Calories, steps, active days, workouts
- **Today's Goals:** Progress bars for daily targets
- **Weekly Chart:** Visual representation of your activity
- **Quick Actions:** Shortcuts to main features
- **Active Challenges:** Your ongoing fitness challenges

### 4. Try Different Features

#### 📚 Workout Library (`/workouts`)
- Browse 6+ different workouts
- Filter by category (Strength, Cardio, Yoga, Sports)
- Filter by difficulty (Beginner, Intermediate, Advanced)
- Search for specific workouts
- Click "Start Workout" to begin

#### 🏆 Challenges (`/challenges`)
- View active fitness challenges
- See your progress on each challenge
- Check the global leaderboard
- Join new challenges

#### 📊 Activity Tracker (`/activity`)
- View your weekly activity chart
- See recent activity history
- Click "Log Activity" to add new activities
- Track running, cycling, gym, yoga, etc.

#### 👤 Profile (`/profile`)
- View your fitness stats
- See achievements and badges
- Edit personal information
- Track your fitness goals
- View activity summary

### 5. Toggle Dark Mode 🌙
- Click the moon/sun icon in the navbar
- Your preference is saved automatically

## 🎨 Design Highlights

- **Mobile Responsive:** Try resizing your browser
- **Smooth Animations:** Hover over cards and buttons
- **Clean UI:** Minimal, fitness-inspired design
- **Card-Based Layout:** Modern dashboard style

## 🔐 Demo Credentials

Since this is a frontend demo:
- **Any email works** (e.g., test@example.com)
- **Any password works** (min 6 characters)
- Data is stored in localStorage

## 📱 Test Responsiveness

1. Open browser DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Try different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1440px

## 🎯 Key Features to Test

✅ Navigation between pages
✅ Search and filter workouts
✅ Dark mode toggle
✅ Form validation (login/register)
✅ Progress bars and charts
✅ Responsive design
✅ Hover animations
✅ Modal dialogs (Log Activity)

## 🛠️ Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📂 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── layouts/        # Layout wrappers
├── hooks/          # Custom React hooks
├── utils/          # Utilities and dummy data
├── App.jsx         # Main app with routes
└── index.css       # Global styles + Tailwind
```

## 🎨 Customization Tips

### Change Primary Color
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    600: '#your-color',
    // ...
  }
}
```

### Add New Workout
Edit `src/utils/dummyData.js`:
```js
export const workouts = [
  // Add your workout object
];
```

### Modify Components
All components are in `src/components/`
- Fully customizable
- Well-commented code
- Reusable and modular

## 🚀 Next Steps

1. **Explore all pages** - Click through every feature
2. **Test responsiveness** - Try different screen sizes
3. **Toggle dark mode** - See the beautiful dark theme
4. **Check the code** - All files are well-organized
5. **Customize** - Make it your own!

## 💡 Tips

- Use the sidebar (desktop) or hamburger menu (mobile) for navigation
- All forms have validation - try submitting empty forms
- Charts are interactive - hover over bars to see details
- Progress bars animate when the page loads
- Achievements show unlock dates

## 🐛 Troubleshooting

**Port already in use?**
- The app will automatically use another port (5174, 5175, etc.)

**Styles not loading?**
- Make sure Tailwind is properly configured
- Check that `npm install` completed successfully

**Dark mode not working?**
- Clear localStorage and try again
- Check browser console for errors

## 📞 Need Help?

Check the main README.md for detailed documentation.

---

**Enjoy building with SwadeshiFit! 💪🇮🇳**
