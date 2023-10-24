// src/components/Comment.js
import React from 'react';

const Comment = ({ id, text, onEdit, onDelete }) => {
    return (
        <div>
            <p>{text}</p>
            <button onClick={() => onEdit(id)}>Editar</button>
            <button onClick={() => onDelete(id)}>Eliminar</button>
        </div>
    );
};

export default Comment;
