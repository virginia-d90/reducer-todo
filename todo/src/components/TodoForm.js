import React, { useState, useReducer } from 'react'
import {initialState, reducer} from '../reducers/todoReducer'

const TodoForm = (props) => {
    const {handleChanges} =props 
    // const [newTodoText, setNewTodoText] = useState("");
    // const [state, dispatch] = useReducer(reducer, initialState)
    // handleChanges = e => {
    //     setNewTodoText(e.target.value);
    // }

    // //NOT SURE IF I NEED THIS AT THIS POINT(INCOMPLETE)
    // handleSubmit = e => {
    //     e.preventDefault();

    // }

    return(
        //STILL NEED TO BUILD OUT FORM
        <form>
            <input
                type='text'
                name='todo'
                placeholder='Todo Form'
            />
        </form>
    )


}
export default TodoForm