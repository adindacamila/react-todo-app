import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ]);

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  };

  const editTodo = (todoId, newTitle) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.title = newTitle;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Todos 
        todos={todos} 
        toggleCompleted={toggleCompleted} 
        deleteTodo={deleteTodo} 
        editTodo={editTodo}  // Meneruskan fungsi editTodo
      />
    </div>
  );
}

const styles = {
  container: {
    marginTop: '100px',  // Added margin-top
    marginBottom: 'auto', // Added margin-bottom with auto value
    textAlign: 'center',
    padding: '60px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '0 auto',
    minWidth: '320px',  
    maxWidth: '80%',
    background: '#D8EFD3',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.3)',
    backdropFilter: 'blur(3px)',
    WebkitBackdropFilter: 'blur(3px)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    height: 'auto',
  },
  title: {
    fontSize: '36px',
    fontFamily: 'Times New Roman', 
  },
};

export default App;
