import React, { Component } from 'react';
import './App.css';
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

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
