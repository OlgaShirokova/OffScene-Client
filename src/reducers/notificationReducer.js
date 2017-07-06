import types from 'actions/types';
const { SIGN_OUT, RESET_NOTIFICATION } = types;

export default function notificationReducer(state = null, action) {
  if (action.type === SIGN_OUT)
    return `Now you're viewing the page as a visitor`;

  if (action.type === RESET_NOTIFICATION) return null;

  return state;
}
