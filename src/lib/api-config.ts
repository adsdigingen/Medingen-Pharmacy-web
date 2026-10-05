/**
 * Centralized API Resolver for Medingen Pharmacy ERP Frontend
 * 
 * Guarantees that in production / Vercel browser environments, ALL API calls
 * route strictly through the Next.js / Vercel reverse proxy (/api/...).
 * 
 * Prevents any accidental exposure or direct requests to the AWS EC2 backend IP.
 */

export function resolveApiBase(): string {
  // If running in browser:
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    // Local development (localhost / 127.0.0.1)
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      const customEnv = process.env.NEXT_PUBLIC_API_URL;
      // Disallow any direct EC2 IP overrides even if injected into environment
      if (customEnv && !customEnv.includes('65.0.176.164') && customEnv.startsWith('http')) {
        return customEnv.replace(/\/+$/, '');
      }
      return 'http://localhost:3001';
    }
    // Production / Vercel deployment: ALWAYS return '/api'
    return '/api';
  }

  // Server-side / Build-time environment
  if (process.env.NODE_ENV === 'production' || process.env.VERCEL === '1') {
    return '/api';
  }

  const customEnv = process.env.NEXT_PUBLIC_API_URL;
  if (customEnv && !customEnv.includes('65.0.176.164') && customEnv.startsWith('http')) {
    return customEnv.replace(/\/+$/, '');
  }

  return 'http://localhost:3001';
}

/**
 * Builds a properly formatted, proxy-safe API URL for any backend endpoint.
 * Handles leading slashes cleanly and prevents double /api prefixes.
 */
export function buildApiUrl(endpoint: string): string {
  const base = resolveApiBase();
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  
  if (base === '/api') {
    // Prevent double /api/api
    if (cleanEndpoint.startsWith('/api/')) {
      return cleanEndpoint;
    }
    return `/api${cleanEndpoint}`;
  }

  // When base is full URL like http://localhost:3001
  const cleanBase = base.replace(/\/+$/, '');
  return `${cleanBase}${cleanEndpoint}`;
}

export const API_BASE = resolveApiBase();
