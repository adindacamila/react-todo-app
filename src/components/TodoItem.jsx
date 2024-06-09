import React, { useState } from 'react';

const TodoItem = ({ todo, toggleCompleted, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const getTodoTitleStyle = () => {
    return todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    saveTodo();
  };

  const saveTodo = () => {
    editTodo(todo.id, newTitle);
    setIsEditing(false);
  };

  return (
    <div style={styles.todoItem}>
      <input
        type="checkbox"
        style={styles.checkbox}
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={styles.editInput}
        />
      ) : (
        <p style={getTodoTitleStyle()}>{todo.title}</p>
      )}
      <div style={styles.buttonGroup}>
        {isEditing ? (
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfiL6LlPodEG7mPMB11KlLj_aj-H7q9dT6-tCVmGCv9zct_6MadVCqS4qCF6fupKusUZMJbED5Z82dM5VO0B9NGm-GgTSB3kPxb1KAsWoKY0uVJWu4r0ZYcoBsIJycx19_I_N2TUF5MjPvKKDVLdkbmfZx6OiY0iqx5mzNXqipWvaT0xsNRpWdlWUSp1Yy/s512/diskette.png" alt="Save" style={styles.button} onClick={handleSaveClick} />
        ) : (
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqCFcRJ6Suf2YJXRqqM9Em1eTFj5EVk-ei35Uan4ZGeoPgXKITWjVHa-CCnSK9PdetzgF7a0pNWUH_bhEJgAnhNF1Oo8JGvqYaeRnEMCjDBNgKTiDUwzNjKWz6EuQeKr4uvvKaAmXFwwiU0sQYOvFJIZn8D_GIlK1hogZLY-LfgELCXqXvm8KnMwYXP3tI/s512/edit.png" alt="Edit" style={styles.button} onClick={handleEditClick} />
        )}
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiqyY2vWowCtAzaqFJXK4BHX6nFdu92ryL_0dv8c-tLfReIJqZdfZ6o0FLsFJGZk4DM7MCRz6RvLPw4b8IKtf1T0BoVinDfR1TKG5CN1gWmyn4hLtXthRaZpcPP8AoTwIhgqw8JQEBlviXab2hF6IFwDf5peWRK0Blc_zfwYHnfzk2CdZ5hgMJ8a2R90qvb/s512/delete-icon.png.png" alt="Delete" style={styles.button} onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};

const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '16px',
    fontFamily: 'Times New Roman', 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    marginBottom: '10px',
    backgroundColor: '#FFFF'
  },
  checkbox: { height: '18px', width: '18px' },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    backgroundColor: '#F6EEC9', // Mengubah warna latar belakang untuk tombol edit
    color: '#fff',
    height: '20px',
    width: '20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontFamily: 'Times New Roman', 
  },
  editInput: {
    fontSize: '16px',
    fontFamily: 'Times New Roman', 
    padding: '5px',
    width: '70%',
  },
};

export default TodoItem;