# LUC API Integration

This document outlines the comprehensive API integration for the LUC platform with the backend API at `https://luc-m8t9.onrender.com`.

## 📁 API Structure

### Core Files
- `src/lib/api/config.js` - API configuration and endpoint definitions
- `src/lib/api/client.js` - HTTP client with authentication and token management
- `src/lib/api/auth.js` - Authentication service
- `src/lib/api/index.js` - Main API exports

### Service Modules
- `src/lib/api/services/talent.js` - Talent-specific API operations
- `src/lib/api/services/university.js` - University-specific API operations
- `src/lib/api/services/client.js` - Client-specific API operations
- `src/lib/api/services/admin.js` - Admin-specific API operations
- `src/lib/api/services/general.js` - General API operations
- `src/lib/api/services/index.js` - Service exports

### React Hooks
- `src/hooks/useAuth.js` - Authentication context and hooks
- `src/hooks/useApi.js` - Generic API hooks (useApi, useMutation, usePagination, etc.)
- `src/hooks/index.js` - Hook exports

## 🚀 Usage Examples

### Authentication
```jsx
import { useAuth } from '@/hooks'

function LoginComponent() {
  const { login, loading, error } = useAuth()
  
  const handleLogin = async (credentials) => {
    try {
      await login(credentials, 'talent')
      // Navigate to dashboard
    } catch (error) {
      // Handle error
    }
  }
}
```

### API Calls
```jsx
import { useApi, useMutation } from '@/hooks'
import { talentService } from '@/lib/api'

function TalentDashboard() {
  const { data: dashboard, loading, error } = useApi(() => talentService.getDashboard())
  
  const { mutate: updateSkills, loading: updating } = useMutation(talentService.updateSkills)
  
  const handleUpdateSkills = async (skills) => {
    await updateSkills(skills)
  }
}
```

### Direct API Usage
```jsx
import { apiClient, authService } from '@/lib/api'

// Direct API call
const userData = await apiClient.get('/users/profile')

// Auth service
await authService.login({ email, password }, 'talent')
```

## 🔧 Configuration

### Base URL
The API base URL is configured in `src/lib/api/config.js`:
```javascript
export const API_CONFIG = {
  BASE_URL: 'https://luc-m8t9.onrender.com',
  VERSION: '/api/v1',
  ENDPOINTS: {
    // Comprehensive endpoint definitions...
  }
}
```

### Authentication
- JWT tokens are stored in localStorage
- Automatic token refresh on 401 errors
- Token management handled by the API client
- Two-factor authentication support
- Session validation

## 📋 Available Endpoints

### Authentication
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/logout` - User logout
- `POST /api/v1/auth/refresh` - Token refresh
- `POST /api/v1/auth/verify-email` - Email verification
- `POST /api/v1/auth/forgot-password` - Forgot password
- `POST /api/v1/auth/reset-password` - Reset password
- `POST /api/v1/auth/change-password` - Change password
- `POST /api/v1/auth/resend-verification` - Resend verification
- `POST /api/v1/auth/2fa/enable` - Enable 2FA
- `POST /api/v1/auth/2fa/verify` - Verify 2FA
- `POST /api/v1/auth/2fa/disable` - Disable 2FA
- `GET /api/v1/auth/validate` - Validate session

### User Management
- `GET /api/v1/users/profile` - Get user profile
- `PUT /api/v1/users/profile` - Update user profile
- `DELETE /api/v1/users/delete` - Delete account
- `GET /api/v1/users/search` - Search users
- `GET /api/v1/users/settings` - Get user settings
- `PUT /api/v1/users/settings` - Update user settings
- `GET /api/v1/users/notifications` - Get user notifications
- `PUT /api/v1/users/notifications/{id}/read` - Mark notification read
- `GET /api/v1/users/activity` - Get user activity

### Talent Endpoints
- `GET /api/v1/talent/dashboard` - Talent dashboard
- `GET /api/v1/talent/skills` - Get skills
- `PUT /api/v1/talent/skills` - Update skills
- `GET /api/v1/talent/portfolio` - Get portfolio
- `POST /api/v1/talent/portfolio` - Add portfolio item
- `GET /api/v1/talent/applications` - Get applications
- `GET /api/v1/talent/jobs` - Get available jobs
- `POST /api/v1/talent/applications/{jobId}` - Apply for job
- `PUT /api/v1/talent/availability` - Update availability
- `GET /api/v1/talent/analytics` - Get analytics
- `GET /api/v1/talent/earnings` - Get earnings
- `GET /api/v1/talent/reviews` - Get reviews
- `GET /api/v1/talent/messages` - Get messages
- `POST /api/v1/talent/messages` - Send message
- `GET /api/v1/talent/notifications` - Get notifications
- `GET /api/v1/talent/recommendations` - Get recommendations

### University Endpoints
- `GET /api/v1/university/dashboard` - University dashboard
- `GET /api/v1/university/students` - Get students
- `POST /api/v1/university/students` - Add student
- `GET /api/v1/university/programs` - Get programs
- `GET /api/v1/university/events` - Get events
- `GET /api/v1/university/analytics` - Get analytics
- `GET /api/v1/university/profile` - Get university profile
- `PUT /api/v1/university/profile` - Update university profile
- `GET /api/v1/university/notifications` - Get notifications
- `GET /api/v1/university/reports` - Get reports
- `GET /api/v1/university/partnerships` - Get partnerships

### Client Endpoints
- `GET /api/v1/client/dashboard` - Client dashboard
- `GET /api/v1/client/projects` - Get projects
- `POST /api/v1/client/projects` - Create project
- `GET /api/v1/client/postings` - Get job postings
- `POST /api/v1/client/postings` - Create job posting
- `GET /api/v1/client/applications` - Get applications
- `POST /api/v1/client/talent/search` - Search talent
- `GET /api/v1/client/analytics` - Get analytics
- `GET /api/v1/client/billing` - Get billing info
- `GET /api/v1/client/invoices` - Get invoices
- `GET /api/v1/client/team` - Get team members
- `POST /api/v1/client/team/invite` - Invite team member
- `GET /api/v1/client/notifications` - Get notifications
- `GET /api/v1/client/recommendations` - Get recommendations

### Admin Endpoints
- `GET /api/v1/admin/dashboard` - Admin dashboard
- `GET /api/v1/admin/users` - Get all users
- `GET /api/v1/admin/system` - System statistics
- `GET /api/v1/admin/reports` - Get reports
- `GET /api/v1/admin/jobs` - Get all jobs
- `GET /api/v1/admin/applications` - Get all applications
- `GET /api/v1/admin/financial` - Get financial data
- `GET /api/v1/admin/analytics` - Get analytics
- `POST /api/v1/admin/notifications` - Send notifications
- `GET /api/v1/admin/settings` - Get system settings
- `PUT /api/v1/admin/settings` - Update system settings
- `GET /api/v1/admin/audit` - Get audit logs
- `POST /api/v1/admin/backups` - Create backup
- `GET /api/v1/admin/backups` - Get backup history
- `GET /api/v1/admin/export` - Export data

### General Endpoints
- `GET /api/v1/health` - API health check
- `GET /api/v1/version` - API version
- `GET /api/v1/categories` - Get categories
- `GET /api/v1/skills` - Get skills
- `GET /api/v1/locations` - Get locations
- `POST /api/v1/uploads` - Upload file
- `GET /search` - Global search
- `GET /announcements` - Get announcements
- `GET /help` - Get help documentation
- `POST /feedback` - Submit feedback
- `POST /issues` - Report issue
- `POST /support` - Contact support

## 🔄 Token Management

The API client automatically handles:
- Adding Authorization headers to requests
- Token refresh on 401 errors
- Clearing tokens on logout
- Redirecting to login on session expiry

## 🛠 Error Handling

All API calls include built-in error handling:
- Network errors are caught and logged
- API errors are thrown with status and message
- Loading states are managed by hooks
- Error states are available for UI feedback

## 📝 File Uploads

For file uploads, use the dedicated upload method:
```jsx
const uploadPortfolioMedia = async (file, onProgress) => {
  const formData = new FormData()
  formData.append('file', file)
  
  const response = await apiClient.upload('/talent/portfolio/upload', formData, onProgress)
  return response
}
```

## 🔒 Security Features

- JWT token authentication
- Automatic token refresh
- Secure token storage
- Request/response interceptors
- CORS support

## 📊 Pagination

Use the `usePagination` hook for paginated data:
```jsx
const {
  data,
  loading,
  error,
  hasMore,
  loadMore,
  refresh
} = usePagination(talentService.getJobs, { limit: 10 })
```

## 🎯 Next Steps

1. **Update API Endpoints**: Verify and update the actual API endpoints in `config.js` based on the Swagger documentation
2. **Add Error Boundaries**: Implement error boundaries for better error handling
3. **Add Loading States**: Implement loading skeletons and states
4. **Add Caching**: Implement response caching for better performance
5. **Add Testing**: Write unit tests for API services and hooks

## 📞 Support

For API-related issues:
1. Check the browser console for error messages
2. Verify the API endpoints match the backend documentation
3. Ensure the backend API is running and accessible
4. Check network connectivity and CORS settings