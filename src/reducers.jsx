import { combineReducers } from 'redux';

const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, action.payload];
    case 'EDIT_COMMENT':
      return state.map(comment => {
        if (comment.id === action.payload.id) {
          return { ...comment, text: action.payload.text };
        }
        return comment;
      });
    case 'DELETE_COMMENT':
      return state.filter(comment => comment.id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  comments,
});

export default rootReducer;
