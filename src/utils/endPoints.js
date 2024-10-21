export const BASE_URL = {
  BASE_URL: 'https://lastfewwords-backend.vercel.app/api/'                  // Hobby-Plan Server
  // BASE_URL: 'http://localhost:8000/api/'                                // Local Server
};

export const ENDPOINTS = {
  // Auth Endpoints
  USER_LOGIN: 'auth/login',
  USER_SIGNUP: 'auth/signup',
  USER_FORGOT_PASSWORD: 'auth/forgot-password',
  USER_RESET_PASSWORD: 'auth/reset-password',
  USER_CHANGE_PASSWORD: 'auth/change-password',
  USER_UPDATE_INFO: 'auth/update-info',

  // Content Endpoints
  USER_FETCH_FILES: 'content/files',
  USER_UPLOAD_FILE: 'content/upload',
};
