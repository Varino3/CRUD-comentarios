// src/App.js
import React from 'react';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, editComment, deleteComment } from './reducers/commentSlice';

function App() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);

  const handleSubmit = (text) => {
    dispatch(addComment({ text }));
  };

  return (
    <div>
      <h1>Comentarios</h1>
      <CommentForm onSubmit={handleSubmit} />
      <CommentList comments={comments} />
    </div>
  );
}

export default App;
