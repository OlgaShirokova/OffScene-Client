import types from 'actions/types';
const { LOGIN_PAGE_FORM_CHANGE, SIGN_IN_FAIL } = types;

export default function loginPage(state, action) {
  if (action.type === LOGIN_PAGE_FORM_CHANGE) {
    return {
      ...state,
      form: { ...state.form, errors: null, ...action.payload },
    };
  }

  if (action.type === SIGN_IN_FAIL) {
    return {
      ...state,
      form: { email: '', password: '', errors: action.errors.join() },
    };
  }

  return state;
}
