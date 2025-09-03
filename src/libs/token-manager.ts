import { API_ENDPOINTS } from "../constants/api";

class TokenManager {
  private static instance: TokenManager;
  private refreshPromise: Promise<any> | null = null;

  static getInstance(): TokenManager {
    if (!TokenManager.instance) {
      TokenManager.instance = new TokenManager();
    }
    return TokenManager.instance;
  }

  async refreshTokenCSR(): Promise<void> {
  
    if (this.refreshPromise) {
      return this.refreshPromise;
    }

    this.refreshPromise = this.performRefreshCSR();
    try {
      await this.refreshPromise;
    } finally {
      this.refreshPromise = null;
    }
  }

  private async performRefreshCSR(): Promise<void> {
    try {
      const response = await fetch(API_ENDPOINTS.AUTH.REFRESH_TOKEN, {
        method: 'POST',
        credentials: 'include', 
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Refresh failed');
      }

    } catch (error) {
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
      throw error;
    }
  }

  async refreshTokenSSR(url: string, cookies: string): Promise<string | null> {

    if (this.refreshPromise) {
      return this.refreshPromise;
    }

    this.refreshPromise = this.performRefreshSSR(url, cookies);
    try {
      return await this.refreshPromise;
    } finally {
      this.refreshPromise = null;
    }
  }

  private async performRefreshSSR(url: string, cookies: string): Promise<string | null> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': cookies,
        },
      });

      if (!response.ok) {
        return null;
      }

      // Trả về cookies mới từ response headers
      const setCookieHeader = response.headers.get('set-cookie');
      return setCookieHeader;
    } catch (error) {
      console.error('SSR refresh failed:', error);
      return null;
    }
  }
}

export const tokenManager = TokenManager.getInstance();