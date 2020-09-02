import React from "react"

const TodoList = (props) => {

    return (
        <div className="todo-list">
            {props.todoList.map((todo) => (
                <Todo 
                    key={todo.id}
                    todo={todo}
                    toggleComplete={props.toggleComplete}
                />
            ))}
            <button
                className="clr-btn"
                onClick={props.clearComplete}
            >
                Clear Completed
            </button>
        </div>
    )
}