# Codeverse - Interactive Programming Learning Platform

A comprehensive, interactive learning platform for programming languages with a dark, techy theme and immersive 3D experience. Learn to code through hands-on exercises, gamification, and structured learning paths across 38 programming languages.

## 🚀 Features

### Core Learning Features

- **38 Programming Languages** - Comprehensive coverage across Web, Mobile, and Systems tracks
- **Language Introduction Pages** - Beautiful, visual introduction pages for each language with official logos and brand colors
- **Interactive Code Challenges** - Hands-on coding exercises with Monaco Editor (VS Code in the browser)
- **HTML Live Preview** - Switch between code and live preview for HTML lessons
- **Flexible Code Validation** - Structural validation that focuses on correctness rather than exact text matching
- **Progress Tracking** - XP and leveling system with detailed progress tracking per language
- **Language Progression System** - Unlock languages by completing prerequisites in each track
- **Study Program** - Organized learning paths by track and difficulty

### Comprehensive Gamification

- **22 Achievements** - Unlock achievements across 6 categories (First Steps, Language Mastery, Speed, Perfect, Consistency, Special) with celebration animations
- **Daily Challenges** - Complete daily tasks for bonus coins and XP (5 different challenge types)
- **Streak System** - Maintain daily coding streaks with streak multipliers (up to 3.5x XP) and streak freeze protection
- **Virtual Currency** - Earn coins by completing lessons and achievements, spend on power-ups and unlockables
- **Power-Ups Shop** - Purchase temporary boosts:
  - 2x/3x XP Boosts (1 hour / 30 minutes)
  - 2x Coin Boost (1 hour)
  - Streak Freeze (protect your streak)
  - Lesson Hints
  - Time Extensions
- **Unlockables Shop** - Unlock special content:
  - Avatars (Code Master, Python Pro, Streak Champion, Golden Coder)
  - Themes (Neon, Matrix, Solarized)
  - Badges (First Steps, Polyglot)
  - Titles (Novice Coder, Code Wizard)
  - Effects (Confetti, Fireworks)
  - Backgrounds (Space, Cyber)
- **Global Leaderboard** - Compete with other learners ranked by XP, level, or streak
- **Social Sharing** - Share achievements and progress on Twitter, Facebook, LinkedIn, Reddit
- **Detailed Statistics** - Comprehensive stats tracking on your profile page

### User Experience

- **Dark Theme** - Modern, techy design with custom fonts and gradients
- **Official Language Logos** - Beautiful, colored logos for each language using Simple Icons CDN
- **Modern Icon System** - Font Awesome icons throughout the platform
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Error Boundary** - Graceful error handling with user-friendly error messages
- **Code Splitting** - Lazy-loaded components for optimal performance
- **Protected Routes** - Secure authentication with route protection

### Authentication & Security

- **User Registration & Login** - Secure authentication with password hashing (bcryptjs)
- **Password Strength Validation** - Enforce strong passwords
- **Client-Side Rate Limiting** - Brute-force protection for login attempts
- **Session Management** - Persistent user sessions
- **Browser-Based Database** - SQLite in the browser (sql.js) for data persistence

## 🛠️ Tech Stack

### Frontend Framework

- **React 18.3** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite 7.1** - Fast build tool and dev server

### Styling & UI

- **Tailwind CSS 3.4** - Utility-first CSS framework
- **React Icons 5.5** - Font Awesome icons
- **Simple Icons CDN** - Official language logos with brand colors

### Code Editor

- **Monaco Editor 0.54** - VS Code editor in the browser
- **@monaco-editor/react 4.7** - React wrapper for Monaco

### State Management & Data

- **Zustand 5.0** - Lightweight state management
- **sql.js 1.13** - SQLite in the browser for data persistence

### Routing & Navigation

- **React Router DOM 6.28** - Client-side routing with protected routes

### 3D Graphics (Optional)

- **Three.js 0.171** - 3D graphics library
- **@react-three/fiber 8.17** - React renderer for Three.js
- **@react-three/drei 9.114** - Useful helpers for React Three Fiber

### Utilities

- **canvas-confetti 1.9** - Celebration animations for achievements
- **bcryptjs 3.0** - Password hashing

## 📚 Available Languages

All 38 languages have comprehensive introduction pages and are organized by difficulty:

### Beginner Languages (7)

**Web Development:**

- ✅ **HTML & CSS** - Complete introduction page
- ✅ **JavaScript** - Complete introduction page
- ✅ **Python** - Complete introduction page
- ✅ **Ruby** - Complete introduction page
- ✅ **SQL** - Complete introduction page

**Systems:**

- ✅ **Bash / Shell** - Complete introduction page
- ✅ **PowerShell** - Complete introduction page

### Intermediate Languages (21)

**Web Development:**

- ✅ **TypeScript** - Complete introduction page
- ✅ **Node.js** - Complete introduction page
- ✅ **PHP** - Complete introduction page
- ✅ **Vue.js** - Complete introduction page
- ✅ **React** - Complete introduction page
- ✅ **Svelte** - Complete introduction page
- ✅ **Angular** - Complete introduction page
- ✅ **Deno** - Complete introduction page
- ✅ **Ruby on Rails** - Complete introduction page
- ✅ **PostgreSQL** - Complete introduction page
- ✅ **MySQL** - Complete introduction page

**Mobile Development:**

- ✅ **Swift** - Complete introduction page
- ✅ **Kotlin** - Complete introduction page
- ✅ **C#** - Complete introduction page
- ✅ **Flutter / Dart** - Complete introduction page
- ✅ **React Native** - Complete introduction page

**Systems:**

- ✅ **R** - Complete introduction page
- ✅ **MATLAB** - Complete introduction page
- ✅ **Lua** - Complete introduction page
- ✅ **Perl** - Complete introduction page
- ✅ **Julia** - Complete introduction page

### Advanced Languages (10)

**Web Development:**

- ✅ **Elixir** - Complete introduction page

**Mobile Development:**

- ✅ **Objective-C** - Complete introduction page

**Systems:**

- ✅ **C** - Complete introduction page
- ✅ **C++** - Complete introduction page
- ✅ **Go** - Complete introduction page
- ✅ **Rust** - Complete introduction page
- ✅ **Java** - Complete introduction page
- ✅ **Assembly** - Complete introduction page
- ✅ **Haskell** - Complete introduction page
- ✅ **Scala** - Complete introduction page

## 🗺️ Language Tracks

Languages are organized into tracks for structured learning:

### Web Development Track (17 languages)

- **Beginner**: HTML & CSS, JavaScript, Python, Ruby, SQL
- **Intermediate**: TypeScript, Node.js, PHP, Vue.js, React, Svelte, Angular, Deno, Ruby on Rails, PostgreSQL, MySQL
- **Advanced**: Elixir

### Mobile Development Track (6 languages)

- **Intermediate**: Swift, Kotlin, C#, Flutter / Dart, React Native
- **Advanced**: Objective-C

### Systems Programming Track (15 languages)

- **Beginner**: Bash / Shell, PowerShell
- **Intermediate**: R, MATLAB, Lua, Perl, Julia
- **Advanced**: C, C++, Go, Rust, Java, Assembly, Haskell, Scala

## 📖 Language Introduction Pages

Each language has a comprehensive introduction page featuring:

- **Visual Overview** - Official language logo with brand colors
- **Tagline & Description** - Quick introduction to the language
- **What is it?** - Clear explanation with visual analogies
- **Why Learn?** - 5 compelling reasons to learn the language
- **Key Features** - 4 main features with icons
- **Quick Examples** - Interactive code examples with explanations
- **Use Cases** - Real-world applications
- **Getting Started** - 4-step learning path
- **Next Steps** - Suggested progression to related languages with clickable links
- **Available Lessons** - Direct links to all lessons for that language (filtered to avoid redundancy)

## 📝 Lesson Structure

Each lesson includes:

- **Starter Code** - Pre-filled code to get started
- **Test Code** - Flexible validation focusing on structure and correctness
- **Solution** - Complete working solution
- **Line-by-Line Explanations** - Detailed explanations of every code snippet
- **Concepts Array** - Key concepts covered in the lesson
- **HTML Preview** - For HTML lessons, switch between code editor and live preview

## 🎮 Pages & Routes

### Public Routes

- `/login` - User login page
- `/register` - User registration page

### Protected Routes (Require Authentication)

- `/` - Home page with welcome message, stats, and features overview
- `/study-program` - Organized learning paths by track and difficulty
- `/languages` - Browse all available languages as cards with logos
- `/language/:languageId` - Language introduction page
- `/lesson/:lessonId` - Interactive lesson with code editor
- `/profile` - User profile with statistics, achievements, daily challenges, and leaderboard
- `/shop` - Shop for power-ups and unlockables
- `/settings` - User settings (account, notifications, theme preferences)

## 🗄️ Database Schema

The application uses SQLite in the browser (sql.js) with the following tables:

- **users** - User accounts (id, email, name, password, created_at)
- **progress** - Lesson completion tracking (user_id, lesson_id, completed, last_accessed, attempts)
- **gamification** - Gamification data (user_id, achievements, streak, coins, streak_freeze_count)
- **daily_challenges** - Daily challenge progress (user_id, challenge_id, date, progress, completed)
- **user_stats** - User statistics (user_id, total_lessons_completed, total_xp_earned, etc.)

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ (tested with 20.19.5)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables (optional, for Supabase integration)
cp .env.example .env.local
# Edit .env.local with your actual values

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

This project uses environment variables for configuration. Create a `.env.local` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Important:** Never commit `.env.local` to version control. It's already in `.gitignore`.

### GitHub Actions Deployment

The project includes a GitHub Actions workflow for automated deployment:

1. **Set up GitHub Secrets:**
   - Go to your repository settings → Secrets and variables → Actions
   - Add the following secrets:
     - `VITE_SUPABASE_URL` - Your Supabase project URL
     - `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

2. **Deployment:**
   - The workflow automatically builds and deploys on push to `main`
   - Build artifacts are uploaded and deployed to GitHub Pages
   - Environment variables are securely injected during build

3. **Access environment variables in code:**

   ```typescript
   const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
   const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
   ```

## 📁 Project Structure

```text
src/
├── components/
│   ├── auth/                    # Authentication components
│   │   ├── Login.tsx           # Login page
│   │   └── Register.tsx        # Registration page
│   ├── lessons/                 # Lesson components
│   │   ├── CodeEditor.tsx      # Monaco editor with HTML preview
│   │   ├── LessonCard.tsx      # Lesson card component
│   │   ├── LessonList.tsx      # List of lessons
│   │   └── LessonView.tsx      # Main lesson view
│   ├── pages/                   # Main pages
│   │   ├── Home.tsx            # Home page
│   │   ├── StudyProgram.tsx    # Study program page
│   │   ├── Profile.tsx         # User profile page
│   │   ├── Settings.tsx        # Settings page
│   │   ├── Shop.tsx            # Shop page
│   │   ├── Languages.tsx       # Languages browser
│   │   └── LanguageIntroduction.tsx  # Language intro page
│   ├── ui/                      # Reusable UI components
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── LanguageLogo.tsx    # Language logo component
│   │   ├── ProfileDropdown.tsx # Profile dropdown menu
│   │   └── ProgressBar.tsx     # Progress bar component
│   ├── gamification/            # Gamification components
│   │   ├── AchievementBadge.tsx
│   │   ├── AchievementNotification.tsx
│   │   ├── DailyChallengeCard.tsx
│   │   ├── DailyChallengesSection.tsx
│   │   ├── Leaderboard.tsx
│   │   ├── PowerUpShop.tsx
│   │   ├── ShareButton.tsx
│   │   ├── StatisticsCard.tsx
│   │   ├── StreakFreezeButton.tsx
│   │   └── UnlockablesShop.tsx
│   └── 3D/                      # 3D visualization components (optional)
│       ├── InteractiveObject.tsx
│       ├── Scene.tsx
│       └── StrandScene.tsx
├── data/                        # Data definitions
│   ├── lessons.ts              # All lesson definitions
│   ├── languages.ts            # Language configurations and tracks
│   ├── achievements.ts         # 22 achievement definitions
│   ├── languageIntroductions.ts # Language introduction content
│   ├── dailyChallenges.ts      # Daily challenge templates
│   ├── powerUps.ts            # Power-up definitions (6 types)
│   └── unlockables.ts         # Unlockable content definitions
├── db/                          # Database operations
│   ├── database.ts            # Core database setup and schema
│   ├── authDb.ts              # Authentication database operations
│   ├── gamificationDb.ts      # Gamification database operations
│   ├── progressDb.ts          # Progress tracking database operations
│   └── userStatsDb.ts         # User statistics database operations
├── store/                       # Zustand state management
│   ├── authStore.ts           # Authentication state
│   ├── progressStore.ts       # Progress and XP tracking
│   └── gamificationStore.ts   # Gamification state (achievements, streaks, coins)
├── utils/                       # Utility functions
│   ├── iconMapper.tsx         # Emoji to React icon mapping
│   ├── languageLogos.ts       # Language logo utilities (Simple Icons CDN)
│   ├── celebration.ts         # Confetti animations
│   ├── socialSharing.ts       # Social sharing utilities
│   ├── password.ts            # Password hashing utilities
│   └── rateLimiter.ts         # Rate limiting for login attempts
├── App.tsx                      # Main app component with routing
├── main.tsx                     # Application entry point
└── index.css                    # Global styles and Tailwind imports
```

## 🔍 Features in Detail

### Flexible Code Validation

The platform uses structural validation that checks for:

- Correct data types and structures
- Presence of required elements/tags
- Proper relationships between elements
- Type correctness rather than exact string matching

This allows students to use their own text/values while ensuring they understand the concepts.

### HTML Live Preview

For HTML lessons, the code editor includes a preview toggle that allows switching between:

- **Code View** - Monaco editor with syntax highlighting
- **Preview View** - Live iframe rendering of the HTML code

The preview uses a sandboxed iframe for security.

### Progress System

- **XP (Experience Points)** - Earned by completing lessons (100 XP per lesson)
- **Levels** - Unlock based on total XP (100 XP per level)
- **Language Progress** - Track completion percentage per language
- **Unlock System** - Complete previous language in track to unlock next
- **Overall Progress** - Aggregate progress across all languages

### Gamification System

#### Achievements (22 total)

**Categories:**

- **First Steps** (3) - Hello World, Getting Started, On a Roll
- **Language Mastery** (4) - JavaScript Novice, Python Pro, HTML Hero, Polyglot, Linguist
- **Speed** (3) - Speed Demon, Quick Learner, Marathon Runner
- **Perfect** (3) - First Try, Perfect Streak, Flawless
- **Consistency** (4) - Daily Coder, Week Warrior, Month Master, Habit Builder
- **Special** (5) - Weekend Warrior, Night Owl, Early Bird, Code Whisperer

Each achievement has:

- Unique icon (emoji)
- Rarity (common, rare, epic, legendary)
- Coin and XP rewards
- Celebration animation on unlock

#### Daily Challenges (5 types)

- **Complete Lessons** - Complete 3 or 5 lessons today
- **Earn XP** - Earn 500 XP today
- **Maintain Streak** - Keep your daily streak alive
- **Unlock Achievements** - Unlock 1 achievement today

Challenges rotate daily and offer bonus coins and XP.

#### Streak System

- **Streak Multipliers** - Earn bonus XP based on streak length:
  - 7 days: 1.5x XP
  - 14 days: 2.0x XP
  - 30 days: 2.5x XP
  - 60 days: 3.0x XP
  - 100 days: 3.5x XP
- **Streak Freeze** - Purchase streak freezes to protect your streak
- **Automatic Tracking** - Streak updates automatically on lesson completion

#### Power-Ups (6 types)

- **2x XP Boost** - Double XP for 1 hour (100 coins, max 5)
- **3x XP Boost** - Triple XP for 30 minutes (200 coins, max 3)
- **2x Coin Boost** - Double coin earnings for 1 hour (150 coins, max 5)
- **Streak Freeze** - Protect streak for one day (50 coins, max 10)
- **Lesson Hint** - Get a hint for current lesson (25 coins, max 20)
- **Time Extension** - Add 10 minutes to lesson timer (30 coins, max 15)

#### Unlockables (12 items)

- **Avatars** (4) - Code Master, Python Pro, Streak Champion, Golden Coder
- **Themes** (3) - Neon Theme, Matrix Theme, Solarized Theme
- **Badges** (2) - First Steps, Polyglot
- **Titles** (2) - Novice Coder, Code Wizard
- **Effects** (2) - Confetti Effect, Fireworks Effect
- **Backgrounds** (2) - Space Background, Cyber Background

Unlockables can be earned through achievements or purchased with coins.

### Authentication

- **User Registration** - Create account with email, name, and password
- **Password Hashing** - Secure password storage using bcryptjs
- **Password Strength Validation** - Enforce strong passwords
- **Client-Side Rate Limiting** - Brute-force protection (max 5 attempts per 15 minutes)
- **Session Management** - Persistent user sessions
- **Protected Routes** - All learning content requires authentication

### Error Handling

- **Error Boundary** - Catches React errors and displays user-friendly messages
- **Graceful Degradation** - Application continues to work even if some features fail
- **Loading States** - Proper loading indicators during async operations

## 🎨 Design System

- **Color Scheme** - Dark theme with indigo/purple gradients
- **Typography** - Custom font families (heading and body fonts)
- **Icons** - Font Awesome icons throughout
- **Language Logos** - Simple Icons CDN with official brand colors
- **Responsive** - Mobile-first design with Tailwind CSS breakpoints

## 📊 Performance

- **Code Splitting** - Lazy-loaded components for optimal bundle size
- **Database Persistence** - LocalStorage-backed SQLite for fast data access
- **Optimized Builds** - Vite for fast development and optimized production builds

## 🤝 Contributing

This is a learning platform project. Contributions and suggestions are welcome!

## 📄 License

MIT
