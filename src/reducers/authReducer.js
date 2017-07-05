import types from 'actions/types';
const { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAIL } = types;

const INITIAL_STATE = {
  isAuthenticating: false,
  isAuth: false,
  errors: null,
};

export default function authReducer(state = INITIAL_STATE, action) {
  if (action.type === SIGN_IN) {
    return { ...state, isAuthenticating: true };
  }

  if (action.type === SIGN_IN_SUCCESS) {
    return { isAuthenticating: false, isAuth: true, ...action.data };
  }

  if (action.type === SIGN_IN_FAIL) {
    return { ...state, isAuthenticating: false, errors: action.errors.join() };
  }

  return state;
}
