import { v4 as uuidv4 } from 'uuid';

export const addComment = (text) => ({
  type: 'ADD_COMMENT',
  payload: {
    id: uuidv4(),
    text,
  },
});

export const editComment = (id, text) => ({
  type: 'EDIT_COMMENT',
  payload: {
    id,
    text,
  },
});

export const deleteComment = (id) => ({
  type: 'DELETE_COMMENT',
  payload: id,
});
