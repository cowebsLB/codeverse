import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import Login from '../Login'
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

const mockLogin = vi.fn()
const mockCheckRateLimit = vi.fn()
const mockRecordAttempt = vi.fn()
const mockResetRateLimit = vi.fn()
const mockGetFormattedRemainingTime = vi.fn()

describe('Login Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    
    // Setup auth store mock
    vi.spyOn(authStore, 'useAuthStore').mockReturnValue({
      login: mockLogin,
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

  it('should render login form', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
    expect(screen.getByText(/don't have an account/i)).toBeInTheDocument()
  })

  it('should show error when submitting empty form', async () => {
    const user = userEvent.setup()
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )

    const submitButton = screen.getByRole('button', { name: /login/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/please enter both email and password/i)).toBeInTheDocument()
    })
  })

  it('should call login with correct credentials', async () => {
    const user = userEvent.setup()
    mockLogin.mockResolvedValue(true)
    
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /login/i })

    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'TestPassword123!')
    await user.click(submitButton)

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'TestPassword123!')
    })
  })

  it('should show error on failed login', async () => {
    const user = userEvent.setup()
    mockLogin.mockResolvedValue(false)
    
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /login/i })

    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'WrongPassword123!')
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/invalid email or password/i)).toBeInTheDocument()
    })
  })

  it('should check rate limit on email change', async () => {
    const user = userEvent.setup()
    mockCheckRateLimit.mockReturnValue({
      isLimited: true,
      remainingAttempts: 0,
      resetTime: Date.now() + 900000,
    })
    mockGetFormattedRemainingTime.mockReturnValue('15 minutes')
    
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )

    const emailInput = screen.getByLabelText(/email/i)
    await user.type(emailInput, 'test@example.com')

    await waitFor(() => {
      expect(mockCheckRateLimit).toHaveBeenCalledWith('login:test@example.com')
      expect(screen.getByText(/too many attempts/i)).toBeInTheDocument()
    })
  })

  it('should record attempt on form submission', async () => {
    const user = userEvent.setup()
    mockLogin.mockResolvedValue(false)
    
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /login/i })

    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'TestPassword123!')
    await user.click(submitButton)

    await waitFor(() => {
      expect(mockRecordAttempt).toHaveBeenCalledWith('login:test@example.com')
    })
  })

  it('should reset rate limit on successful login', async () => {
    const user = userEvent.setup()
    mockLogin.mockResolvedValue(true)
    
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /login/i })

    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'TestPassword123!')
    await user.click(submitButton)

    await waitFor(() => {
      expect(mockResetRateLimit).toHaveBeenCalledWith('login:test@example.com')
    })
  })
})

