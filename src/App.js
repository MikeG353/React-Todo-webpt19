import React from 'react';

import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

import "./todo.css"

// This is the initial state with mock up of a task
// initialized with completed as false.
const initialState = [
  {
    name: "Create State",
    id: Date.now(),
    completed: false
  }
]

class App extends React.Component {
  // constructor with state

  constructor() {
    super();
    // this.state = {
    //   todoList: JSON.parse(window.localStorage.getItem('myTodo'))
    // };
    // if (this.state.todoList.length === 0) {
    //   this.setState(initialState)
    // }
    if (JSON.parse(window.localStorage.getItem('myTodo')) === null) {
      this.state = {
        todoList: initialState
      }
    }
    else {
      this.state = {
        todoList: JSON.parse(window.localStorage.getItem('myTodo'))
      }
    }
  }

  // Methods to handle state changes.
  toggleComplete = (todoId) => {
    this.setState({
      todoList: this.state.todoList.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    })
    // window.localStorage.setItem('myTodo', JSON.stringify(this.state.todoList))
  }

  clearComplete = () => {
    this.setState({
      todoList: this.state.todoList.filter((todo) => {
        return !todo.completed;
      })
    })
    // window.localStorage.setItem('myTodo', JSON.stringify(this.state.todoList))
  }

  addTodo = (todoName) => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        { name: todoName, id: Date.now(), completed: false}
      ]
    });
    // window.localStorage.setItem('myTodo', JSON.stringify(this.state.todoList))
  };

  saveTodo = () => {
    window.localStorage.setItem('myTodo', JSON.stringify(this.state.todoList))
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>My Todo List for today:</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList 
          todoList={this.state.todoList}
          toggleComplete={this.toggleComplete}
          clearComplete={this.clearComplete} 
        />
        <button onClick={this.saveTodo} >Save</button>     
      </div>
    );
  }
}

export default App;
