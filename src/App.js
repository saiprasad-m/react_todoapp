import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import uuid from 'uuid';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Get Groceris',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meet Tech guru',
        completed: true
      },
      {
        id: uuid.v4(),
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
      id: uuid.v4(),
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
