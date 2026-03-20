// Dummy data for the application

export const workouts = [
  {
    id: 1,
    name: "Full Body Strength",
    category: "Strength",
    difficulty: "Intermediate",
    duration: "45 min",
    calories: 350,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400",
    description: "Complete full body workout targeting all major muscle groups"
  },
  {
    id: 2,
    name: "HIIT Cardio Blast",
    category: "Cardio",
    difficulty: "Advanced",
    duration: "30 min",
    calories: 400,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400",
    description: "High intensity interval training for maximum calorie burn"
  },
  {
    id: 3,
    name: "Morning Yoga Flow",
    category: "Yoga",
    difficulty: "Beginner",
    duration: "20 min",
    calories: 120,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
    description: "Gentle yoga flow to start your day with energy"
  },
  {
    id: 4,
    name: "Cricket Training",
    category: "Sports Training",
    difficulty: "Intermediate",
    duration: "60 min",
    calories: 300,
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400",
    description: "Improve your cricket skills with targeted drills"
  },
  {
    id: 5,
    name: "Core Crusher",
    category: "Strength",
    difficulty: "Intermediate",
    duration: "25 min",
    calories: 200,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400",
    description: "Intense core workout for stronger abs"
  },
  {
    id: 6,
    name: "Power Yoga",
    category: "Yoga",
    difficulty: "Advanced",
    duration: "40 min",
    calories: 250,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400",
    description: "Dynamic yoga practice for strength and flexibility"
  }
];

export const challenges = [
  {
    id: 1,
    name: "30 Day Pushup Challenge",
    description: "Build upper body strength with progressive pushup training",
    duration: "30 days",
    participants: 1247,
    difficulty: "Intermediate",
    progress: 45,
    icon: "💪"
  },
  {
    id: 2,
    name: "10K Steps Daily",
    description: "Walk 10,000 steps every day for a month",
    duration: "30 days",
    participants: 3521,
    difficulty: "Beginner",
    progress: 67,
    icon: "🚶"
  },
  {
    id: 3,
    name: "5K Running Challenge",
    description: "Complete a 5K run within 30 minutes",
    duration: "21 days",
    participants: 892,
    difficulty: "Advanced",
    progress: 23,
    icon: "🏃"
  },
  {
    id: 4,
    name: "Yoga Everyday",
    description: "Practice yoga for at least 20 minutes daily",
    duration: "30 days",
    participants: 2156,
    difficulty: "Beginner",
    progress: 80,
    icon: "🧘"
  }
];

export const activities = [
  { id: 1, type: "Running", duration: 30, calories: 300, date: "2026-03-09", distance: 5 },
  { id: 2, type: "Cycling", duration: 45, calories: 350, date: "2026-03-08", distance: 15 },
  { id: 3, type: "Gym", duration: 60, calories: 400, date: "2026-03-07", distance: 0 },
  { id: 4, type: "Walking", duration: 40, calories: 150, date: "2026-03-06", distance: 4 },
  { id: 5, type: "Running", duration: 25, calories: 250, date: "2026-03-05", distance: 4 },
  { id: 6, type: "Yoga", duration: 30, calories: 120, date: "2026-03-04", distance: 0 },
  { id: 7, type: "Cycling", duration: 50, calories: 380, date: "2026-03-03", distance: 18 }
];

export const weeklyData = [
  { day: "Mon", calories: 300, steps: 8500 },
  { day: "Tue", calories: 450, steps: 12000 },
  { day: "Wed", calories: 350, steps: 9500 },
  { day: "Thu", calories: 500, steps: 15000 },
  { day: "Fri", calories: 280, steps: 7000 },
  { day: "Sat", calories: 600, steps: 18000 },
  { day: "Sun", calories: 400, steps: 11000 }
];

export const achievements = [
  { id: 1, name: "First Workout", icon: "🎯", unlocked: true, date: "2026-02-15" },
  { id: 2, name: "7 Day Streak", icon: "🔥", unlocked: true, date: "2026-02-22" },
  { id: 3, name: "100 Workouts", icon: "💯", unlocked: true, date: "2026-03-01" },
  { id: 4, name: "Marathon Runner", icon: "🏃", unlocked: false, date: null },
  { id: 5, name: "Yoga Master", icon: "🧘", unlocked: false, date: null },
  { id: 6, name: "Strength Champion", icon: "💪", unlocked: true, date: "2026-02-28" }
];

export const leaderboard = [
  { rank: 1, name: "Rahul Sharma", points: 2850, avatar: "RS" },
  { rank: 2, name: "Priya Patel", points: 2720, avatar: "PP" },
  { rank: 3, name: "Amit Kumar", points: 2650, avatar: "AK" },
  { rank: 4, name: "Sneha Reddy", points: 2580, avatar: "SR" },
  { rank: 5, name: "Vikram Singh", points: 2450, avatar: "VS" },
  { rank: 6, name: "You", points: 2380, avatar: "YO", isCurrentUser: true },
  { rank: 7, name: "Anjali Gupta", points: 2290, avatar: "AG" },
  { rank: 8, name: "Rohan Mehta", points: 2150, avatar: "RM" }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Software Engineer",
    content: "SwadeshiFit transformed my fitness journey. Lost 15kg in 6 months!",
    rating: 5,
    avatar: "RK"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Teacher",
    content: "The AI workout suggestions are spot on. Love the community challenges!",
    rating: 5,
    avatar: "PS"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Business Owner",
    content: "Best fitness platform I've used. The gamification keeps me motivated!",
    rating: 5,
    avatar: "AP"
  }
];

export const userProfile = {
  name: "Arjun Verma",
  email: "arjun.verma@example.com",
  avatar: "AV",
  joinDate: "2026-01-15",
  fitnessGoal: "Build Muscle & Lose Fat",
  currentWeight: 75,
  targetWeight: 70,
  height: 175,
  age: 28,
  totalWorkouts: 124,
  totalCalories: 45600,
  currentStreak: 12
};
