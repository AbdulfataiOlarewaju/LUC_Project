/**
 * Central API configuration
 * 
 * Uses VITE_BACKEND_URL from environment variables.
 * In development, requests are proxied through Vite (set in vite.config.js)
 * In production, requests go directly to the backend URL.
 * 
 * Set VITE_BACKEND_URL in your environment variables
 * - For Vercel: Project Settings > Environment Variables
 * - For Render: Site Settings > Environment Variables
 */

// Get backend URL from environment variable, fallback to production URL
const getBackendUrl = () => {
  // Check if VITE_BACKEND_URL is set
  if (import.meta.env.VITE_BACKEND_URL) {
    return import.meta.env.VITE_BACKEND_URL;
  }
  
  // Fallback for development without VITE_BACKEND_URL set
  // Vite proxy will handle this in development mode
  return '';
};

// Backend API base URL
export const API_BASE_URL = getBackendUrl();

// Check if we're in development mode
export const isDev = import.meta.env.DEV;

// Build API URL based on environment
export const getApiUrl = (endpoint) => {
  // In development, use proxy (no base URL needed)
  if (isDev || !API_BASE_URL) {
    return endpoint;
  }
  
  // In production, prepend the backend URL
  return `${API_BASE_URL}${endpoint}`;
};
