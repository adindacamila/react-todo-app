import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({ todos, toggleCompleted, deleteTodo, editTodo }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
          editTodo={editTodo}  // Meneruskan fungsi editTodo
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: '40%',
    margin: '0 auto',
  },
};

export default Todos;