export function getToken() {
  return localStorage.getItem('OFF_STAGE_TOKEN');
}

export function saveToken(token) {
  return localStorage.setItem('OFF_STAGE_TOKEN', token);
}

export function deleteToken() {
  return localStorage.removeItem('OFF_STAGE_TOKEN');
}
