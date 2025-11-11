import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './store/authStore'
import { useProgressStore } from './store/progressStore'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/ui/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

// Lazy load components for code splitting
const Home = lazy(() => import('./components/pages/Home'))
const StudyProgram = lazy(() => import('./components/pages/StudyProgram'))
const Profile = lazy(() => import('./components/pages/Profile'))
const Settings = lazy(() => import('./components/pages/Settings'))
const Shop = lazy(() => import('./components/pages/Shop'))
const Languages = lazy(() => import('./components/pages/Languages'))
const LessonView = lazy(() => import('./components/lessons/LessonView'))

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const initialized = useAuthStore((state) => state.initialized)
  
  // Wait for auth to initialize before making routing decisions
  if (!initialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 font-body">Loading...</p>
        </div>
      </div>
    )
  }
  
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
}

function App() {
  const initAuth = useAuthStore((state) => state.init)
  const initProgress = useProgressStore((state) => state.init)

  useEffect(() => {
    // Initialize database and stores
    const initialize = async () => {
      await initAuth()
      await initProgress()
      
      // Initialize gamification after auth and progress are ready
      const { useGamificationStore } = await import('./store/gamificationStore')
      await useGamificationStore.getState().init()
    }
    
    initialize()
  }, [initAuth, initProgress])

  const LoadingFallback = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto"></div>
        <p className="mt-4 text-gray-400 font-body">Loading...</p>
      </div>
    </div>
  )

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ErrorBoundary>
                  <>
                    <Navbar />
                    <Suspense fallback={<LoadingFallback />}>
                      <Home />
                    </Suspense>
                  </>
                </ErrorBoundary>
              </ProtectedRoute>
            }
          />
          <Route
            path="/study-program"
            element={
              <ProtectedRoute>
                <ErrorBoundary>
                  <>
                    <Navbar />
                    <Suspense fallback={<LoadingFallback />}>
                      <StudyProgram />
                    </Suspense>
                  </>
                </ErrorBoundary>
              </ProtectedRoute>
            }
          />
          <Route
            path="/lesson/:lessonId"
            element={
              <ProtectedRoute>
                <ErrorBoundary>
                  <>
                    <Navbar />
                    <Suspense fallback={<LoadingFallback />}>
                      <LessonView />
                    </Suspense>
                  </>
                </ErrorBoundary>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ErrorBoundary>
                  <>
                    <Navbar />
                    <Suspense fallback={<LoadingFallback />}>
                      <Profile />
                    </Suspense>
                  </>
                </ErrorBoundary>
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <ErrorBoundary>
                  <>
                    <Navbar />
                    <Suspense fallback={<LoadingFallback />}>
                      <Settings />
                    </Suspense>
                  </>
                </ErrorBoundary>
              </ProtectedRoute>
            }
          />
          <Route
            path="/shop"
            element={
              <ProtectedRoute>
                <ErrorBoundary>
                  <>
                    <Navbar />
                    <Suspense fallback={<LoadingFallback />}>
                      <Shop />
                    </Suspense>
                  </>
                </ErrorBoundary>
              </ProtectedRoute>
            }
          />
          <Route
            path="/languages"
            element={
              <ProtectedRoute>
                <ErrorBoundary>
                  <>
                    <Navbar />
                    <Suspense fallback={<LoadingFallback />}>
                      <Languages />
                    </Suspense>
                  </>
                </ErrorBoundary>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App

