import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import Register from '../Register'
import * as authStore from '../../../store/authStore'
import * as rateLimiter from '../../../utils/rateLimiter'

// Mock the stores and utilities
vi.mock('../../../store/authStore')
vi.mock('../../../utils/rateLimiter')
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  }
})

const mockRegister = vi.fn()
const mockCheckRateLimit = vi.fn()
const mockRecordAttempt = vi.fn()
const mockResetRateLimit = vi.fn()
const mockGetFormattedRemainingTime = vi.fn()

describe('Register Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    
    // Setup auth store mock
    vi.spyOn(authStore, 'useAuthStore').mockReturnValue({
      register: mockRegister,
    } as any)
    
    // Setup rate limiter mocks
    vi.spyOn(rateLimiter, 'checkRateLimit').mockImplementation(mockCheckRateLimit)
    vi.spyOn(rateLimiter, 'recordAttempt').mockImplementation(mockRecordAttempt)
    vi.spyOn(rateLimiter, 'resetRateLimit').mockImplementation(mockResetRateLimit)
    vi.spyOn(rateLimiter, 'getFormattedRemainingTime').mockImplementation(mockGetFormattedRemainingTime)
    
    // Default rate limit response
    mockCheckRateLimit.mockReturnValue({
      isLimited: false,
      remainingAttempts: 5,
      resetTime: null,
    })
  })

  it('should render registration form', () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    )

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument()
    expect(screen.getByText(/already have an account/i)).toBeInTheDocument()
  })

  it('should show error when submitting empty form', async () => {
    const user = userEvent.setup()
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    )

    const submitButton = screen.getByRole('button', { name: /register/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/please fill in all fields/i)).toBeInTheDocument()
    })
  })

  it('should validate password strength', async () => {
    const user = userEvent.setup()
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    )

    const nameInput = screen.getByLabelText(/name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /register/i })

    await user.type(nameInput, 'Test User')
    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'weak')
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/password must be at least 8 characters/i)).toBeInTheDocument()
    })
  })

  it('should call register with correct data', async () => {
    const user = userEvent.setup()
    mockRegister.mockResolvedValue(true)
    
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    )

    const nameInput = screen.getByLabelText(/name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /register/i })

    await user.type(nameInput, 'Test User')
    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'TestPassword123!')
    await user.click(submitButton)

    await waitFor(() => {
      expect(mockRegister).toHaveBeenCalledWith('test@example.com', 'TestPassword123!', 'Test User')
    })
  })

  it('should show error on failed registration', async () => {
    const user = userEvent.setup()
    mockRegister.mockResolvedValue(false)
    
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    )

    const nameInput = screen.getByLabelText(/name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /register/i })

    await user.type(nameInput, 'Test User')
    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'TestPassword123!')
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/registration failed/i)).toBeInTheDocument()
    })
  })
})

