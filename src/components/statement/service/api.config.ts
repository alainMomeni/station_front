const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8055';

interface FetchOptions extends RequestInit {
  token?: string;
}

export const fetchApi = async (endpoint: string, options: FetchOptions = {}) => {
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      credentials: 'include',
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors?.[0]?.message || 'Une erreur est survenue');
    }

    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
