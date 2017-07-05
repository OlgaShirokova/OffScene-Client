function defineActionTypes(types) {
  return types.reduce((types, typeName) => {
    types[typeName] = typeName;
    types[`${typeName}_SUCCESS`] = `${typeName}_SUCCESS`;
    types[`${typeName}_FAIL`] = `${typeName}_FAIL`;
    return types;
  }, {});
}

export default defineActionTypes([
  'GET_DJ',
  'DEFAULT_SEARCH',
  'REMOVE_SELECTED_GENRE',
  'GET_EVENTS',
  'SIGN_IN',
  'SIGN_UP',
  'GET_MY_EVENTS',
  'GET_ARTISTS',
  'FILTER_SEARCH',
  'SIGN_OUT',
  'LOGIN_PAGE_FORM_CHANGE',
  'SIGNUP_PAGE_FORM_CHANGE',
]);
