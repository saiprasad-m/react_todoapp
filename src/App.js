import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';
import Header from './components/layout/Header';
import About from './components/pages/About';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import axios from 'axios';

class App extends Component {

  state = {
    todos: [
    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=6')
      .then(res => this.setState({ todos: res.data}))
      .catch(err => console.log(err));
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => 
          this.setState( {
            todos: [
                    ...this.state.todos.filter(
                        todo => todo.id !== id
                        )
                    ]
          })        
        )
    
  }

  addTodo = (title) => {

    axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed : false
    })
      .then(res => this.setState({
        todos: [...this.state.todos, res.data]
      }))
      .catch(err => console.log(err));

    
  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
        
          <Header/>
          <Route exact path='/' render={ props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos 
                  todos={this.state.todos} 
                  markComplete={this.markComplete} 
                  deleteTodo={this.deleteTodo}/>
            </React.Fragment>
          )} />
        <Route exact path='/about' component={About} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
