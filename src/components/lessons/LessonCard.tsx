import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Lesson } from '../../data/lessons'
import { useProgressStore } from '../../store/progressStore'
import ProgressBar from '../ui/ProgressBar'

interface LessonCardProps {
  lesson: Lesson
}

interface LessonProgress {
  lessonId: string
  completed: boolean
  progress: number
  lastAccessed: number
}

export default function LessonCard({ lesson }: LessonCardProps) {
  const getProgress = useProgressStore((state) => state.getProgress)
  const [progress, setProgress] = useState<LessonProgress | null>(null)

  useEffect(() => {
    getProgress(lesson.id).then(setProgress)
  }, [lesson.id, getProgress])

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-900/30 text-green-400 border border-green-700'
      case 'intermediate':
        return 'bg-yellow-900/30 text-yellow-400 border border-yellow-700'
      case 'advanced':
        return 'bg-red-900/30 text-red-400 border border-red-700'
      default:
        return 'bg-gray-700 text-gray-300 border border-gray-600'
    }
  }

  // Generate consistent color based on language name
  const getSubjectColor = (subject: string) => {
    // Popular languages with specific colors
    const colorMap: Record<string, string> = {
      'JavaScript': 'bg-yellow-900/30 text-yellow-400 border border-yellow-700',
      'Python': 'bg-blue-900/30 text-blue-400 border border-blue-700',
      'TypeScript': 'bg-indigo-900/30 text-indigo-400 border border-indigo-700',
      'React': 'bg-cyan-900/30 text-cyan-400 border border-cyan-700',
      'Java': 'bg-red-900/30 text-red-400 border border-red-700',
      'C#': 'bg-purple-900/30 text-purple-400 border border-purple-700',
      'C++': 'bg-blue-900/30 text-blue-400 border border-blue-700',
      'C': 'bg-gray-700 text-gray-300 border border-gray-600',
      'Go': 'bg-cyan-900/30 text-cyan-400 border border-cyan-700',
      'Rust': 'bg-orange-900/30 text-orange-400 border border-orange-700',
      'Ruby': 'bg-red-900/30 text-red-400 border border-red-700',
      'PHP': 'bg-indigo-900/30 text-indigo-400 border border-indigo-700',
      'Swift': 'bg-orange-900/30 text-orange-400 border border-orange-700',
      'Kotlin': 'bg-purple-900/30 text-purple-400 border border-purple-700',
      'HTML': 'bg-orange-900/30 text-orange-400 border border-orange-700',
      'CSS': 'bg-pink-900/30 text-pink-400 border border-pink-700',
    }
    
    if (colorMap[subject]) {
      return colorMap[subject]
    }
    
    // Hash function to generate consistent colors for other languages
    let hash = 0
    for (let i = 0; i < subject.length; i++) {
      hash = subject.charCodeAt(i) + ((hash << 5) - hash)
    }
    
    const colors = [
      'bg-indigo-900/30 text-indigo-400 border border-indigo-700',
      'bg-purple-900/30 text-purple-400 border border-purple-700',
      'bg-pink-900/30 text-pink-400 border border-pink-700',
      'bg-cyan-900/30 text-cyan-400 border border-cyan-700',
      'bg-teal-900/30 text-teal-400 border border-teal-700',
      'bg-emerald-900/30 text-emerald-400 border border-emerald-700',
      'bg-amber-900/30 text-amber-400 border border-amber-700',
      'bg-violet-900/30 text-violet-400 border border-violet-700',
    ]
    
    return colors[Math.abs(hash) % colors.length]
  }

  return (
    <Link
      to={`/lesson/${lesson.id}`}
      className="block bg-gray-800 border border-gray-700 rounded-lg shadow-md hover:shadow-xl hover:border-indigo-500 transition-all p-6"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold font-heading text-white">{lesson.title}</h3>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium font-code ${getDifficultyColor(
            lesson.difficulty
          )}`}
        >
          {lesson.difficulty}
        </span>
      </div>
      <p className="text-gray-400 mb-4 font-body">{lesson.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium font-code ${getSubjectColor(
            lesson.subject
          )}`}
        >
          {lesson.subject}
        </span>
        <span className="px-2 py-1 rounded-full text-xs font-medium font-code bg-gray-700 text-gray-300 border border-gray-600">
          {lesson.estimatedTime} min
        </span>
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-400 font-code">
          {progress?.completed ? 'Completed' : progress ? 'In Progress' : 'Not Started'}
        </span>
      </div>
      <ProgressBar 
        lessonId={lesson.id} 
        progress={progress?.progress || 0}
        completed={progress?.completed || false}
      />
      {progress && (
        <div className="mt-2 text-sm text-indigo-400 font-code font-bold">
          Progress: {progress.progress}%
        </div>
      )}
    </Link>
  )
}

