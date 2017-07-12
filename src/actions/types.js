function defineActionTypes(types) {
  return types.reduce((types, typeName) => {
    types[typeName] = typeName;
    types[`${typeName}_SUCCESS`] = `${typeName}_SUCCESS`;
    types[`${typeName}_FAIL`] = `${typeName}_FAIL`;
    return types;
  }, {});
}

export default defineActionTypes([
  'REMOVE_SELECTED_GENRE',
  'SIGN_IN',
  'SIGN_UP',
  'GET_MY_PERFORMANCES',
  'GET_ARTISTS',
  'SIGN_OUT',
  'LOGIN_PAGE_FORM_CHANGE',
  'SIGNUP_PAGE_FORM_CHANGE',
  'RESET_NOTIFICATION',
  `POST_OFFER`,
]);
