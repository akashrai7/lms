export async function useApi(url: string, options: RequestInit = {}) {
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  };

  const res = await fetch(url, {
    ...options,
    headers
  });

  if (res.status === 401) {
    localStorage.removeItem('token');
    window.location.href = '/authentication/login';
    throw new Error('Session expired. Redirecting to login.');
  }

  return res.json();
}
