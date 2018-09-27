export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const addpersonHandler = payload => ({
  type: ADD,
  payload,
});
export const deletePersonHandler = payload => ({
  type: DELETE,
  payload,
});
