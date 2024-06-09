import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('')
  
    const handleSubmit = (event) => {
      event.preventDefault()
      addTodo(title)
      setTitle('') // Reset title-nya
    }
  
    const handleChangeTitle = (event) => {
      setTitle(event.target.value)
    }
  
  // Periksa apakah function "handleChangeTitle" berfungsi
  console.log(title);

  return (
    <div style={styles.container}>
      <form
        onSubmit={(event) => {
          handleSubmit(event)
        }}
      >
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          onChange={(event) => {
            handleChangeTitle(event)
          }}
          value={title} // Atur nilai dari input sesuai dengan state  "title"
        />
        <button style={styles.button}>Add Todo</button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    marginBottom: '20px',
  },
  formInput: {
    height: '40px',
    width: '30%',
    fontSize: '20px',
    fontFamily: 'Times New Roman', 
    padding: '0 16px',
    marginRight:'10px',
  },
  button: {
    height: '42px',
    fontSize: '16px',
    fontFamily: 'Times New Roman', 
    backgroundColor: '#F7B787',
  },
};

export default TodoForm;