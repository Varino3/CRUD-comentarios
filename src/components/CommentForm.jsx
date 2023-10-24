import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions';

const CommentForm = ({ addComment }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim() !== '') {
      addComment(text);
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Escriba un comentario"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default connect(null, { addComment })(CommentForm);
