import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

class App extends Component {

  state = {
    todos: [
      {
        id:1,
        title: 'Get Groceris',
        completed: false
      },
      {
        id:2,
        title: 'Meet Tech guru',
        completed: true
      },
      {
        id:3,
        title: 'Take out the trash',
        completed: false
      }

    ]
  }

  markComplete = (id) => {
    console.log('app markcomplete');
    this.setState(  {
        todos: this.state.todos.map( todo =>  {
          if(todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
    } ) 
  }

  deleteTodo = (id) => {
    console.log(id)
    this.setState( {
        todos: [
                ...this.state.todos.filter(
                    todo => todo.id !== id
                    )
                ]
    })
  }

  addTodo = (title) => {
    const newTodo = { 
      id: 4,
      title,
      conpleted: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo addTodo={this.addTodo}/>
          <Todos 
              todos={this.state.todos} 
              markComplete={this.markComplete} 
              deleteTodo={this.deleteTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
