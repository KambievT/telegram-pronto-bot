export const API_BASE_URL = "https://tg-pronto-backend.onrender.com";

export const API_ENDPOINTS = {
  GET_PROFILE: `${API_BASE_URL}/auth/get-profile`,
  GET_MENU: `${API_BASE_URL}/menu/get-menu`,
} as const;
