import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import * as authStore from '../../../store/authStore'
import * as progressStore from '../../../store/progressStore'
import * as gamificationStore from '../../../store/gamificationStore'

// Mock stores
vi.mock('../../../store/authStore')
vi.mock('../../../store/progressStore')
vi.mock('../../../store/gamificationStore')

describe('Home Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    
    // Mock auth store
    vi.spyOn(authStore, 'useAuthStore').mockReturnValue({
      user: { id: 'user-1', email: 'test@example.com', name: 'Test User' },
      isAuthenticated: true,
    } as any)

    // Mock progress store
    vi.spyOn(progressStore, 'useProgressStore').mockReturnValue({
      xp: 1000,
      level: 5,
      lessons: {},
    } as any)

    // Mock gamification store
    vi.spyOn(gamificationStore, 'useGamificationStore').mockReturnValue({
      coins: 500,
      currentStreak: 7,
      unlockedAchievements: ['achievement-1'],
    } as any)
  })

  it('should render home page with user stats', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    expect(screen.getByText(/welcome/i)).toBeInTheDocument()
    expect(screen.getByText(/test user/i)).toBeInTheDocument()
  })

  it('should display user statistics', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    // Check for stats section
    const statsSection = document.getElementById('stats-section')
    expect(statsSection).toBeInTheDocument()
  })

  it('should have a bouncing arrow in hero section', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    // The arrow should be present (check for button with chevron)
    const arrowButton = screen.getByRole('button', { name: /scroll/i }) || 
                       document.querySelector('button[aria-label*="scroll"]')
    expect(arrowButton).toBeInTheDocument()
  })
})

