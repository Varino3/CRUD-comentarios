// src/components/CommentList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comment from './Comment';
import { editComment, deleteComment } from '../reducers/commentSlice';

const CommentList = () => {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments);

    const handleEdit = (id) => {
        const newText = prompt('Editar comentario:');
        if (newText) {
            dispatch(editComment({ id, text: newText }));
        }
    };

    const handleDelete = (id) => {
        dispatch(deleteComment(id));
    };

    return (
        <div>
            {comments.map((comment) => (
                <Comment
                    key={comment.id}
                    id={comment.id}
                    text={comment.text}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default CommentList;
