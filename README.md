# Codeverse - Interactive Programming Learning Platform

A comprehensive, interactive learning platform for programming languages with a dark, techy theme and immersive 3D experience.

## Features

- **15+ Programming Languages** - Comprehensive coverage across Web, Mobile, and Systems tracks
- **Language Introduction Pages** - Beautiful, visual introduction pages for each language with official logos
- **Interactive Code Challenges** - Hands-on coding exercises with Monaco Editor
- **Flexible Code Validation** - Structural validation that focuses on correctness rather than exact text matching
- **Progress Tracking** - XP and leveling system with detailed progress tracking
- **Language Progression System** - Unlock languages by completing prerequisites in each track
- **Comprehensive Gamification**:
  - **Achievements** - 25+ achievements with celebration animations
  - **Daily Challenges** - Complete daily tasks for bonus rewards
  - **Streak System** - Maintain daily coding streaks with streak freezes
  - **Virtual Currency** - Earn and spend coins on power-ups and unlockables
  - **Leaderboard** - Compete globally with other learners
  - **Power-Ups** - Purchase temporary boosts for your learning
  - **Unlockables** - Unlock special content and customization options
- **Social Sharing** - Share achievements and progress on social media
- **Shop System** - Dedicated shop page for power-ups and unlockables
- **Official Language Logos** - Beautiful, colored logos for each language
- **Modern Icon System** - Font Awesome icons throughout the platform
- **Dark Theme** - Modern, techy design with custom fonts and gradients

## Tech Stack

- **React** + **TypeScript** + **Vite** - Modern frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Monaco Editor** - VS Code editor in the browser
- **Zustand** - State management
- **sql.js** - SQLite in the browser for data persistence
- **React Router DOM** - Client-side routing
- **React Icons** - Font Awesome icons throughout the platform
- **Simple Icons CDN** - Official language logos with brand colors
- **canvas-confetti** - Celebration animations for achievements
- **Three.js** + **React Three Fiber** - 3D graphics (optional)

## Available Languages

All languages have comprehensive introduction pages and are organized by difficulty:

### Beginner Languages

- ✅ **HTML & CSS** - Complete introduction page
- ✅ **JavaScript** - Complete introduction page
- ✅ **Python** - Complete introduction page
- ✅ **Ruby** - Complete introduction page

### Intermediate Languages

- ✅ **TypeScript** - Complete introduction page
- ✅ **Node.js** - Complete introduction page
- ✅ **PHP** - Complete introduction page
- ✅ **Swift** - Complete introduction page
- ✅ **Kotlin** - Complete introduction page
- ✅ **C#** - Complete introduction page

### Advanced Languages

- ✅ **C** - Complete introduction page
- ✅ **C++** - Complete introduction page
- ✅ **Go** - Complete introduction page
- ✅ **Rust** - Complete introduction page
- ✅ **Java** - Complete introduction page

## Language Tracks

Languages are organized into tracks for structured learning:

### Web Development Track

- **Beginner**: HTML & CSS, JavaScript, Python, Ruby
- **Intermediate**: TypeScript, Node.js, PHP

### Mobile Development Track

- **Intermediate**: Swift, Kotlin, C#

### Systems Programming Track

- **Advanced**: C, C++, Go, Rust, Java

## Language Introduction Pages

Each language has a comprehensive introduction page featuring:

- **Visual Overview** - Official language logo with brand colors
- **What is it?** - Clear explanation with visual analogies
- **Why Learn?** - 5 compelling reasons to learn the language
- **Key Features** - 4 main features with icons
- **Quick Examples** - Interactive code examples
- **Use Cases** - Real-world applications
- **Getting Started** - 4-step learning path
- **Next Steps** - Suggested progression to related languages
- **Available Lessons** - Direct links to all lessons for that language

## Lesson Structure

Each lesson includes:

- **Starter Code** - Pre-filled code to get started
- **Test Code** - Flexible validation focusing on structure and correctness
- **Solution** - Complete working solution
- **Line-by-Line Explanations** - Detailed explanations of every code snippet
- **Concepts Array** - Key concepts covered in the lesson

## Getting Started

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

## Project Structure

```
src/
├── components/
│   ├── auth/                    # Login and registration
│   ├── lessons/                 # Lesson components and code editor
│   ├── pages/                   # Main pages (Home, Study Program, Profile, Shop, Languages)
│   ├── ui/                      # Reusable UI components (Navbar, LanguageLogo, etc.)
│   ├── gamification/            # Gamification components
│   │   ├── AchievementNotification.tsx
│   │   ├── DailyChallengeCard.tsx
│   │   ├── Leaderboard.tsx
│   │   ├── PowerUpShop.tsx
│   │   ├── ShareButton.tsx
│   │   ├── StatisticsCard.tsx
│   │   └── UnlockablesShop.tsx
│   └── 3D/                      # 3D visualization components
├── data/
│   ├── lessons.ts               # All lesson definitions
│   ├── languages.ts             # Language configurations and tracks
│   ├── achievements.ts          # Achievement definitions
│   ├── languageIntroductions.ts # Language introduction content
│   ├── dailyChallenges.ts       # Daily challenge definitions
│   ├── powerUps.ts             # Power-up definitions
│   └── unlockables.ts          # Unlockable content definitions
├── db/                          # Database operations
│   ├── database.ts             # Core database setup
│   ├── gamificationDb.ts       # Gamification database operations
│   └── userStatsDb.ts          # User statistics database
├── store/                       # Zustand state management
│   ├── authStore.ts            # Authentication state
│   ├── progressStore.ts        # Progress and XP tracking
│   └── gamificationStore.ts    # Gamification state
├── utils/                       # Utility functions
│   ├── iconMapper.tsx          # Emoji to icon mapping
│   ├── languageLogos.ts        # Language logo utilities
│   ├── celebration.ts          # Confetti animations
│   └── socialSharing.ts        # Social sharing utilities
└── App.tsx                      # Main app component with routing
```

## Features in Detail

### Flexible Code Validation

The platform uses structural validation that checks for:

- Correct data types and structures
- Presence of required elements/tags
- Proper relationships between elements
- Type correctness rather than exact string matching

This allows students to use their own text/values while ensuring they understand the concepts.

### Progress System

- **XP (Experience Points)** - Earned by completing lessons (100 XP per lesson)
- **Levels** - Unlock based on total XP (100 XP per level)
- **Language Progress** - Track completion percentage per language
- **Unlock System** - Complete previous language in track to unlock next

### Gamification System

- **Achievements** - 25+ achievements across multiple categories with celebration animations
- **Daily Challenges** - Complete daily tasks for bonus coins and XP
- **Streak System** - Maintain daily coding streaks with streak freeze protection
- **Virtual Currency** - Earn coins by completing lessons and achievements
- **Power-Up Shop** - Purchase temporary boosts (XP multipliers, time extensions, etc.)
- **Unlockables Shop** - Unlock special content, themes, and customization options
- **Global Leaderboard** - Compete with other learners ranked by XP, level, or streak
- **Social Sharing** - Share achievements and progress on Twitter, Facebook, LinkedIn, Reddit
- **Detailed Statistics** - Comprehensive stats tracking on your profile

### Authentication

- User registration and login with password hashing (bcryptjs)
- Password strength validation
- Client-side rate limiting for brute-force protection
- Session management
- Persistent user data using SQLite in browser

## Contributing

This is a learning platform project. Contributions and suggestions are welcome!

## License

MIT
