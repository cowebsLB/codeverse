# Codeverse - Interactive Programming Learning Platform

A comprehensive, interactive learning platform for programming languages with a dark, techy theme and immersive 3D experience.

## Features

- **500+ Programming Languages** - Comprehensive coverage of programming languages across multiple domains
- **Interactive Code Challenges** - Hands-on coding exercises with Monaco Editor
- **Flexible Code Validation** - Structural validation that focuses on correctness rather than exact text matching
- **Progress Tracking** - XP and leveling system with detailed progress tracking
- **Language Progression System** - Unlock languages by completing prerequisites in each track
- **Gamification System** - Achievements, daily streaks, and virtual currency (coins)
- **Dark Theme** - Modern, techy design with custom fonts and gradients
- **3D Visualizations** - Immersive 3D experience for learning (optional)

## Tech Stack

- **React** + **TypeScript** + **Vite** - Modern frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Monaco Editor** - VS Code editor in the browser
- **Three.js** + **React Three Fiber** - 3D graphics
- **Zustand** - State management
- **sql.js** - SQLite in the browser for data persistence
- **React Router DOM** - Client-side routing

## Current Progress

### Completed Languages (20+ lessons each)

- ✅ **JavaScript** - 25 lessons
- ✅ **HTML** - 25 lessons
- ✅ **Python** - 22 lessons
- ✅ **TypeScript** - 25 lessons
- ✅ **Ruby** - 25 lessons

### In Progress

- 🔄 **React** - 2 lessons (expanding to 20+)
- ⏳ **PHP** - 2 lessons (expanding to 20+)
- ⏳ **Node.js** - 2 lessons (expanding to 20+)
- ⏳ **Swift** - 2 lessons (expanding to 20+)
- ⏳ **Kotlin** - 2 lessons (expanding to 20+)
- ⏳ **C++** - 2 lessons (expanding to 20+)
- ⏳ **Go** - 2 lessons (expanding to 20+)
- ⏳ **Rust** - 2 lessons (expanding to 20+)
- ⏳ **C** - 2 lessons (expanding to 20+)
- ⏳ **Java** - 2 lessons (expanding to 20+)
- ⏳ **C#** - 2 lessons (expanding to 20+)

## Language Tracks

Languages are organized into tracks for structured learning:

1. **Beginner/Friendly** - Python, Ruby, JavaScript
2. **Web/Application Development** - HTML, CSS, JavaScript, TypeScript, React, PHP, Node.js
3. **Systems Programming/Advanced Concepts** - C, C++, Go, Rust, Swift, Kotlin, Java, C#

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
│   ├── auth/              # Login and registration
│   ├── lessons/           # Lesson components and code editor
│   ├── pages/             # Main pages (Home, Study Program, Profile)
│   ├── ui/                # Reusable UI components
│   ├── gamification/      # Achievement badges and notifications
│   └── 3D/                # 3D visualization components
├── data/
│   ├── lessons.ts         # All lesson definitions
│   ├── languages.ts        # Language configurations and tracks
│   └── achievements.ts    # Achievement definitions
├── db/                    # Database operations
├── store/                 # Zustand state management
├── utils/                 # Utility functions (password, rate limiting)
└── App.tsx                # Main app component with routing
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

- **Achievements** - 25+ achievements across multiple categories (First Steps, Language Mastery, Speed, Perfect Execution, Consistency, Special)
- **Daily Streaks** - Maintain your coding streak with daily activity tracking
- **Virtual Currency** - Earn coins by completing lessons and unlocking achievements
- **Progress Tracking** - Visual progress indicators and completion statistics

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
