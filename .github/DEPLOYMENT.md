# GitHub Actions Deployment Guide

This project uses GitHub Actions for automated builds and deployments with secure environment variable handling.

## Setup Instructions

### 1. Configure GitHub Secrets

To use environment variables in your GitHub Actions workflows, you need to add them as secrets:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:

   - **Name:** `VITE_SUPABASE_URL`
     - **Value:** Your Supabase project URL (e.g., `https://your-project.supabase.co`)

   - **Name:** `VITE_SUPABASE_ANON_KEY`
     - **Value:** Your Supabase anonymous key (found in your Supabase dashboard)

### 2. How It Works

The GitHub Actions workflow (`deploy.yml`) references these secrets like this:

```yaml
env:
  VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
  VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
```

These environment variables are:
- ✅ **Never exposed** in your repository
- ✅ **Only available** during the GitHub Actions build process
- ✅ **Injected** into the build at build time
- ✅ **Embedded** in the built application (as they're VITE_ prefixed)

### 3. Accessing Environment Variables in Code

In your Vite project, access these variables using:

```typescript
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
```

### 4. Local Development

For local development, create a `.env.local` file in the root directory:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

**Important:** `.env.local` is already in `.gitignore` and will never be committed.

### 5. Workflow Triggers

The deployment workflow runs automatically:
- On push to `main` branch
- On pull requests to `main` branch
- Manually via `workflow_dispatch`

### 6. Deployment

The workflow:
1. Builds your project with environment variables injected
2. Uploads build artifacts
3. Deploys to GitHub Pages (on push to main)

## Security Notes

- ⚠️ **Never commit** `.env.local` or any file containing real keys
- ✅ **Always use** GitHub Secrets for sensitive values
- ✅ **VITE_ prefixed** variables are exposed to the client (safe for public keys)
- ⚠️ **Never use** VITE_ prefix for truly secret keys (use server-side only)

## Troubleshooting

### Build fails with "undefined" environment variables

- Check that secrets are set in GitHub repository settings
- Verify secret names match exactly (case-sensitive)
- Ensure secrets are added to the correct repository

### Environment variables not available in code

- Ensure variables are prefixed with `VITE_`
- Restart the dev server after creating `.env.local`
- Check that `import.meta.env` is used (not `process.env`)

