import React from 'react';
import { connect } from 'react-redux';
import { editComment, deleteComment } from '../store/actions';

const CommentList = ({ comments, editComment, deleteComment }) => {
  const handleEdit = (comment) => {
    const editedText = prompt('Editar comentario:', comment.text);
    if (editedText !== null) {
      editComment(comment.id, editedText);
    }
  };

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <button onClick={() => handleEdit(comment)}>Editar</button>
          <button onClick={() => deleteComment(comment.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  comments: state.comments,
});

export default connect(mapStateToProps, { editComment, deleteComment })(CommentList);
