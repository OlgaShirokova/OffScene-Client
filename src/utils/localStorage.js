export function getToken() {
  return localStorage.getItem('OFF_SCENE_TOKEN');
}

export function saveToken(token) {
  return localStorage.setItem('OFF_SCENE_TOKEN', token);
}

export function deleteToken() {
  return localStorage.removeItem('OFF_SCENE_TOKEN');
}
