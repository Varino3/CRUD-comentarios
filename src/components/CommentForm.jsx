// src/components/CommentForm.js
import React, { useState } from 'react';

const CommentForm = ({ onSubmit }) => {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        onSubmit(text);
        setText('');
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Escribe tu comentario"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleSubmit}>Enviar Comentario</button>
        </div>
    );
};

export default CommentForm;
