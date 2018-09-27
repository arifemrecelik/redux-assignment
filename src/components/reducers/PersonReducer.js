import { ADD, DELETE } from '../actions/PersonActions';

const initialState = {
  persons: [],
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        persons: state.persons.concat({
          id: action.payload.id,
          name: action.payload.name,
          age: action.payload.age,
        }),
      };
    case DELETE:
      const updatedArray = state.persons.filter(
        result => result.id !== action.id,
      );
      return {
        ...state,
        results: updatedArray,
      };

    default:
      return state;
  }
};

export default personReducer;
