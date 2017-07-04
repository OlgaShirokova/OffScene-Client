function defineActionTypes(types) {
  return types.reduce((types, typeName) => {
    types[typeName] = typeName;
    types[`${typeName}_SUCCESS`] = typeName;
    types[`${typeName}_FAIL`] = typeName;
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
]);
