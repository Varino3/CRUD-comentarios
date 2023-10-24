// store.js
import { configureStore } from '@reduxjs/toolkit';
import commentReducer from './reducers/commentSlice';

export const store = configureStore({
    reducer: {
        comments: commentReducer,
    },
});
