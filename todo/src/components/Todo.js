import React from 'react'


const Todo = props => {
    
    return(

        <p onClick={(e)=> props.toggle(e, props.task)}>{props.task.item}</p>
    )
}
export default Todo