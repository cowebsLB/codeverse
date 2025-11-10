interface ProgressBarProps {
  lessonId: string
  progress?: number
  completed?: boolean
}

export default function ProgressBar({ lessonId, progress = 0, completed = false }: ProgressBarProps) {
  return (
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div
        className={`h-2 rounded-full transition-all ${
          completed ? 'bg-green-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'
        }`}
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

