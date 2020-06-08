import React, {useState, useReducer} from 'react';
import './App.css';
import './components/todo.css'

import Todo from './components/Todo'
import {initialState, reducer} from './reducers/todoReducer'


function App() {
  const [newTodoText, setNewTodoText]= useState(" ")
  const[state, dispatch]= useReducer(reducer, initialState)
  console.log(state)
  const handleChanges = e => {
    setNewTodoText(e.target.value)
  }

  const addTodo = e => {e.preventDefault();
    dispatch({type: "UPDATE_TODOLIST", payload: newTodoText})
    setNewTodoText('')
  }

  
  return(
    <div className="App">
      <h2>To Do:</h2>
      <form >
        <input 
          type='text'
          name='todo'
          value={newTodoText}
          onChange={handleChanges}
        />
        <button onClick={addTodo}>
          Add Task
        </button>
      </form>
      <div className='tasks-list'>
        {state.map(task => (
          <Todo key={task.id} task={task.item} />
        ))}
      </div>

    </div>
  )

}

export default App;
