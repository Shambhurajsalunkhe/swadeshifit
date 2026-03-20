# SwadeshiFit - AI Powered Fitness & Sports Platform

![SwadeshiFit](https://img.shields.io/badge/SwadeshiFit-Fitness%20Platform-green)
![React](https://img.shields.io/badge/React-18.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan)

## 🇮🇳 Empowering India's Fitness Movement

SwadeshiFit is a modern, production-quality fitness platform designed for Atmanirbhar Bharat. Track your activities, join challenges, and achieve your fitness goals with AI-powered guidance.

## ✨ Features

- 🎯 **AI Workout Suggestions** - Personalized workout plans based on your goals
- 📊 **Fitness Tracking** - Track calories, steps, and workout progress
- 🏆 **Community Challenges** - Gamified fitness challenges with leaderboards
- 💪 **Workout Library** - Extensive collection of workouts (Strength, Cardio, Yoga, Sports)
- 📈 **Activity Tracker** - Log and monitor all your fitness activities
- 🎖️ **Achievements & Badges** - Earn rewards as you progress
- 🌙 **Dark Mode** - Beautiful dark theme support
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop

## 🚀 Tech Stack

- **Frontend Framework:** React 18 with Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Charts:** Recharts
- **Icons:** Lucide React
- **State Management:** React Hooks

## 📁 Project Structure

```
swadeshifit/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Sidebar.jsx
│   │   ├── WorkoutCard.jsx
│   │   ├── ChallengeCard.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── ActivityChart.jsx
│   │   └── SkeletonLoader.jsx
│   ├── pages/               # Page components
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Workouts.jsx
│   │   ├── Challenges.jsx
│   │   ├── Activity.jsx
│   │   └── Profile.jsx
│   ├── layouts/             # Layout components
│   │   ├── MainLayout.jsx
│   │   └── DashboardLayout.jsx
│   ├── hooks/               # Custom React hooks
│   │   └── useDarkMode.js
│   ├── utils/               # Utility functions & data
│   │   └── dummyData.js
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Navigate to project directory:**
   ```bash
   cd swadeshifit
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🎨 Design Features

- **Color Scheme:** Green (primary), Black, White
- **Typography:** Clean, modern fonts
- **Animations:** Smooth transitions and hover effects
- **Layout:** Card-based, dashboard-style design
- **Responsive:** Mobile-first approach

## 🔐 Authentication

Currently uses localStorage for demo purposes. To use the app:

1. Click "Get Started" or "Login"
2. Enter any email and password (min 6 characters)
3. You'll be redirected to the dashboard

**Note:** This is a frontend demo. For production, integrate with a real backend authentication system.

## 📱 Pages Overview

### 1. Landing Page
- Hero section with CTA
- Features showcase
- Testimonials
- Footer with links

### 2. Authentication
- Login page with validation
- Register page with form validation
- Password strength requirements

### 3. Dashboard
- Daily fitness summary
- Stats cards (calories, steps, workouts)
- Weekly activity chart
- Today's goals with progress bars
- Quick action buttons
- Active challenges

### 4. Workout Library
- Filterable workout grid
- Search functionality
- Category and difficulty filters
- Detailed workout cards

### 5. Challenges
- Active, upcoming, and completed challenges
- Progress tracking
- Global leaderboard
- Join/continue challenge actions

### 6. Activity Tracker
- Log new activities
- Weekly progress charts
- Activity history
- Stats summary

### 7. Profile
- User information
- Fitness goals
- Achievements & badges
- Activity summary
- Edit profile functionality

## 🎯 Dummy Data

The app includes comprehensive dummy data in `src/utils/dummyData.js`:
- Workouts (6 different types)
- Challenges (4 active challenges)
- Activities (7 recent activities)
- Weekly data for charts
- Achievements & badges
- Leaderboard data
- User profile information

## 🔄 Backend Integration

To connect with a real backend:

1. Replace localStorage authentication with API calls
2. Update dummy data imports with API endpoints
3. Add loading states and error handling
4. Implement real-time data updates
5. Add form submission to backend

## 🌙 Dark Mode

Toggle dark mode using the moon/sun icon in the navbar. Preference is saved in localStorage.

## 📊 Charts & Visualizations

Uses Recharts for beautiful, responsive charts:
- Bar charts for weekly activity
- Progress bars for goals and challenges
- Custom tooltips and legends

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the primary color scheme:
```js
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Components
All components are modular and reusable. Customize them in the `src/components` folder.

## 🚀 Future Enhancements

- Real backend integration
- Social features (friends, sharing)
- Nutrition tracking
- Workout video tutorials
- Push notifications
- Mobile app (React Native)
- AI-powered workout recommendations
- Integration with fitness wearables

## 📄 License

This project is created for educational purposes as a capstone project.

## 👨‍💻 Developer

Built with ❤️ for Atmanirbhar Bharat

---

**Ready to transform your fitness journey? Start now with SwadeshiFit!** 💪🇮🇳
