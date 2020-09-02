import React from "react"

class TodoForm extends React.Component {

   
    constructor () {
        super();
        // state for the text box
        this.state = {
            todo: ""
        }
    };

    // methods for form management
    handleChanges = (e) => {
        this.setState({
            todo: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.todo)
    }
}