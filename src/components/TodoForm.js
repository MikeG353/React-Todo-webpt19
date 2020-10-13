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

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input 
                    type="text"
                    name="todo"
                    value={this.state.todo}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;