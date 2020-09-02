import React from "react"

const Todo = (props) => {

    return (
        <div 
            className={`todo${props.todo.complete ? " completed" : ""}`}
            onClick={() => props.toggleComplete(props.todo.id)}
        >
            <p>{props.todo.name}</p>
        </div>
    )
}

export default Todo;