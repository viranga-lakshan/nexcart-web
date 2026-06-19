export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api/v1';

export const APP_NAME = import.meta.env.VITE_APP_NAME || 'NexCart';

/** Backend origin for relative asset paths like /uploads/... */
export function getApiOrigin() {
  if (API_BASE_URL.startsWith('http://') || API_BASE_URL.startsWith('https://')) {
    return new URL(API_BASE_URL).origin;
  }

  return '';
}

export function resolveAssetUrl(path: string | null | undefined) {
  if (!path) return '';

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  if (path.startsWith('/')) {
    const origin = getApiOrigin();
    return origin ? `${origin}${path}` : path;
  }

  return path;
}
