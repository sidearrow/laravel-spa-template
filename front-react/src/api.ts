import { config } from './config'

function getUrl(path: string): string {
  return config.apiBaseUrl + path;
}

const API_BASE_URL = config.apiBaseUrl;

const FETCH_REQUEST_OPTIONS: RequestInit = {
  headers: { 'Content-Type': 'application/json' },
  mode: 'cors',
  credentials: 'include',
}

async function postLogin(userId: string, password: string) {
  const body = JSON.stringify({ userId: userId, password: password });
  const res = await fetch(
    `${API_BASE_URL}/login`,
    { ...FETCH_REQUEST_OPTIONS, method: 'POST', body: body }
  );

  return res.json();
}

type ApiResponseCheckLogin = {
  isLogin: boolean;
};

async function checkLogin(): Promise<ApiResponseCheckLogin> {
  const res = await fetch(`${API_BASE_URL}/login-check`, { ...FETCH_REQUEST_OPTIONS })

  return res.json();
}

export const api = {
  postLogin: postLogin,
  checkLogin: checkLogin,
};
