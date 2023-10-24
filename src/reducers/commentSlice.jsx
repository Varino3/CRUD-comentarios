// src/reducers/commentSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const commentSlice = createSlice({
    name: 'comments',
    initialState: [],
    reducers: {
        addComment: (state, action) => {
            const newComment = {
                id: uuidv4(),
                text: action.payload.text,
            };
            state.push(newComment);
        },
        editComment: (state, action) => {
            const { id, text } = action.payload;
            const comment = state.find((comment) => comment.id === id);
            if (comment) {
                comment.text = text;
            }
        },
        deleteComment: (state, action) => {
            return state.filter((comment) => comment.id !== action.payload);
        },
    },
});

export const { addComment, editComment, deleteComment } = commentSlice.actions;

export default commentSlice.reducer;
