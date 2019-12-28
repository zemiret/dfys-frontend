export const API_PREFIX = 'api';

export const Endpoints = {
  SKILLS: `${API_PREFIX}/skills`,

  CATEGORIES: `${API_PREFIX}/categories`,

  ACTIVITIES: `${API_PREFIX}/activities`,
  RECENT_ACTIVITIES: `${API_PREFIX}/activities/recent`,

  ENTRIES: 'entries', // usually appended to activities with an id

  LOGIN: `${API_PREFIX}/auth/login`,
  LOGOUT: `${API_PREFIX}/auth/logout`,
  REGISTER: `${API_PREFIX}/auth/register`,
};
