// JWT token storage and refresh functionality

interface TokenData {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

// Store tokens in localStorage
export const storeTokens = (accessToken: string, refreshToken: string, expiresIn: number) => {
  const expiresAt = Date.now() + expiresIn * 1000;
  
  const tokenData: TokenData = {
    accessToken,
    refreshToken,
    expiresAt
  };
  
  localStorage.setItem('tokenData', JSON.stringify(tokenData));
  return tokenData;
};

// Get tokens from localStorage
export const getTokens = (): TokenData | null => {
  const tokenDataString = localStorage.getItem('tokenData');
  
  if (!tokenDataString) {
    return null;
  }
  
  return JSON.parse(tokenDataString);
};

// Check if token is expired
export const isTokenExpired = (): boolean => {
  const tokenData = getTokens();
  
  if (!tokenData) {
    return true;
  }
  
  // Add a buffer of 1 minute to make sure we refresh before expiry
  return Date.now() >= tokenData.expiresAt - 60000;
};

// Get access token (with refresh if needed)
export const getAccessToken = async (): Promise<string | null> => {
  const tokenData = getTokens();
  
  if (!tokenData) {
    return null;
  }
  
  // If token is not expired, return it
  if (!isTokenExpired()) {
    return tokenData.accessToken;
  }
  
  // Otherwise, try to refresh
  try {
    const newTokenData = await refreshToken(tokenData.refreshToken);
    return newTokenData.accessToken;
  } catch (error) {
    console.error('Failed to refresh token:', error);
    // Clear invalid tokens
    clearTokens();
    return null;
  }
};

// Refresh token function
export const refreshToken = async (refreshToken: string): Promise<TokenData> => {
  // This would make an API call to your refresh token endpoint
  // For now, we'll use a mock implementation
  
  // Simulated API call
  return new Promise((resolve, reject) => {
    // In a real implementation, this would be an API call
    setTimeout(() => {
      // Mock successful refresh
      const newTokenData = {
        accessToken: `new_access_token_${Date.now()}`,
        refreshToken: refreshToken, // Often the refresh token stays the same
        expiresAt: Date.now() + 3600 * 1000
      };
      
      // Store the new tokens
      localStorage.setItem('tokenData', JSON.stringify(newTokenData));
      
      resolve(newTokenData);
    }, 500);
  });
};

// Clear tokens (for logout)
export const clearTokens = () => {
  localStorage.removeItem('tokenData');
};
