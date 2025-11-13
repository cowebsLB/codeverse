# Testing Guide

This document provides information about the testing setup and how to run tests for the Codeverse application.

## Test Framework

The project uses:
- **Vitest** - Fast unit test framework powered by Vite
- **React Testing Library** - Simple and complete React DOM testing utilities
- **jsdom** - DOM implementation for Node.js (for browser environment simulation)

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in watch mode (auto-rerun on file changes)
```bash
npm run test:watch
```

### Run tests once (CI mode)
```bash
npm run test:run
```

### Run tests with UI (interactive test runner)
```bash
npm run test:ui
```

### Run tests with coverage report
```bash
npm run test:coverage
```

## Test Structure

Tests are organized to mirror the source code structure:

```
src/
├── components/
│   ├── auth/
│   │   └── __tests__/
│   │       ├── Login.test.tsx
│   │       └── Register.test.tsx
│   ├── pages/
│   │   └── __tests__/
│   │       └── Home.test.tsx
│   └── lessons/
│       └── __tests__/
│           └── codeValidation.test.ts
├── store/
│   └── __tests__/
│       ├── authStore.test.ts
│       └── gamificationStore.test.ts
├── utils/
│   └── __tests__/
│       ├── password.test.ts
│       └── rateLimiter.test.ts
└── test/
    ├── setup.ts          # Test setup and global mocks
    └── utils.tsx         # Test utilities and helpers
```

## Test Coverage

The test suite covers:

### ✅ Authentication
- User login flow
- User registration flow
- Password validation
- Rate limiting
- Session management

### ✅ Utilities
- Password hashing and verification
- Password strength validation
- Rate limiting logic
- Time formatting

### ✅ Code Validation
- ES6 module transformation
- JavaScript code execution
- HTML structure validation
- CSS validation
- Python-like structure validation

### ✅ Gamification
- Achievement unlocking
- Streak tracking
- Coin management
- Daily challenges
- Streak multipliers

### ✅ Components
- Home page rendering
- Login form interactions
- Registration form validation
- Navigation and routing

## Writing Tests

### Example: Testing a Component

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import MyComponent from '../MyComponent'

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <MyComponent />
      </BrowserRouter>
    )
    
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
```

### Example: Testing a Store

```typescript
import { describe, it, expect, beforeEach } from 'vitest'
import { useMyStore } from '../myStore'

describe('MyStore', () => {
  beforeEach(() => {
    // Reset store state
    useMyStore.setState({ value: 0 })
  })

  it('should update value', () => {
    useMyStore.getState().setValue(10)
    expect(useMyStore.getState().value).toBe(10)
  })
})
```

### Example: Testing Utilities

```typescript
import { describe, it, expect } from 'vitest'
import { myUtility } from '../myUtility'

describe('myUtility', () => {
  it('should process input correctly', () => {
    const result = myUtility('input')
    expect(result).toBe('expected output')
  })
})
```

## Mocking

### Mocking Stores

```typescript
import * as authStore from '../../../store/authStore'

vi.mock('../../../store/authStore')

beforeEach(() => {
  vi.spyOn(authStore, 'useAuthStore').mockReturnValue({
    user: { id: '1', email: 'test@example.com' },
    isAuthenticated: true,
  } as any)
})
```

### Mocking Database

```typescript
import * as database from '../../db/database'

vi.mock('../../db/database')

beforeEach(() => {
  vi.spyOn(database, 'initDatabase').mockResolvedValue(undefined)
})
```

## Best Practices

1. **Test Behavior, Not Implementation**: Focus on what the component/function does, not how it does it.

2. **Use Descriptive Test Names**: Test names should clearly describe what is being tested.

3. **Arrange-Act-Assert Pattern**: Structure tests with clear sections for setup, execution, and verification.

4. **Keep Tests Isolated**: Each test should be independent and not rely on other tests.

5. **Mock External Dependencies**: Mock database calls, API requests, and other external services.

6. **Test Edge Cases**: Don't just test the happy path - test error cases, boundary conditions, and edge cases.

7. **Clean Up After Tests**: Use `beforeEach` and `afterEach` to reset state and clean up mocks.

## Continuous Integration

Tests are automatically run in CI/CD pipelines. Make sure all tests pass before pushing code.

## Troubleshooting

### Tests failing with "Cannot find module"
- Make sure all dependencies are installed: `npm install`
- Check that file paths in imports are correct

### Tests timing out
- Check for infinite loops or unresolved promises
- Use `vi.useFakeTimers()` for time-dependent tests

### Mock not working
- Ensure mocks are set up in `beforeEach` or at the top level
- Check that the module path in `vi.mock()` matches the import path

## Additional Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library Documentation](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

