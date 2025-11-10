import { initDatabase, executeQuery, executeUpdate } from './database'

export interface LessonProgress {
  id?: number
  user_id: string
  lesson_id: string
  progress: number
  completed: number
  last_accessed: number
}

export async function getProgress(userId: string, lessonId: string): Promise<LessonProgress | null> {
  await initDatabase()
  
  const results = await executeQuery(
    'SELECT * FROM progress WHERE user_id = ? AND lesson_id = ?',
    [userId, lessonId]
  )
  
  return results.length > 0 ? (results[0] as LessonProgress) : null
}

export async function updateProgress(
  userId: string,
  lessonId: string,
  progress: number,
  completed: boolean = false
): Promise<void> {
  await initDatabase()
  
  const lastAccessed = Date.now()
  const completedInt = completed ? 1 : 0
  
  // Check if progress exists
  const existing = await getProgress(userId, lessonId)
  
  if (existing) {
    await executeUpdate(
      'UPDATE progress SET progress = ?, completed = ?, last_accessed = ? WHERE user_id = ? AND lesson_id = ?',
      [progress, completedInt, lastAccessed, userId, lessonId]
    )
  } else {
    await executeUpdate(
      'INSERT INTO progress (user_id, lesson_id, progress, completed, last_accessed) VALUES (?, ?, ?, ?, ?)',
      [userId, lessonId, progress, completedInt, lastAccessed]
    )
  }
}

export async function getAllProgress(userId: string): Promise<LessonProgress[]> {
  await initDatabase()
  
  const results = await executeQuery(
    'SELECT * FROM progress WHERE user_id = ?',
    [userId]
  )
  
  return results as LessonProgress[]
}

export async function getOverallProgress(userId: string): Promise<number> {
  await initDatabase()
  
  const results = await executeQuery(
    'SELECT AVG(progress) as avg_progress FROM progress WHERE user_id = ?',
    [userId]
  )
  
  if (results.length > 0 && results[0].avg_progress !== null) {
    return Math.round(results[0].avg_progress as number)
  }
  
  return 0
}

