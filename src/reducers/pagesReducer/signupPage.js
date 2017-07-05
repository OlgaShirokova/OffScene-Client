import types from 'actions/types';
const {
  SIGNUP_PAGE_FORM_CHANGE,
  SIGN_UP_FAIL,
  SIGN_UP,
  SIGN_UP_SUCCESS,
} = types;

export default function signupPage(state, action) {
  if (action.type === SIGNUP_PAGE_FORM_CHANGE) {
    return {
      ...state,
      form: { ...state.form, errors: null, ...action.payload },
    };
  }

  if (action.type === SIGN_UP) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === SIGN_UP_SUCCESS) {
    return {
      ...state,
      loading: false,
      success: true,
    };
  }

  if (action.type === SIGN_UP_FAIL) {
    return {
      ...state,
      loading: false,
      success: false,
      form: {
        email: '',
        password: '',
        role: 0,
        errors: action.errors.join(),
      },
    };
  }

  return state;
}
