import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class AddTodo extends Component {
    state = {
        title: ''
    }

  onSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({ title: ''})
  }
  onChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }  
  render() {
    return (
      <form 
        style={{display: 'flex', padding: '3px'}}
        onSubmit={this.onSubmit}
        >
            <input 
                type="text" 
                name="title" 
                placeholder="Add Todo title here..." 
                onChange={this.onChange}
                style={{ flex:'10' }} />
            <input 
                type="submit" 
                value="Add Todo"
                className="btn"
                style={{ flex:'1', padding: '5px' }} />    
        
      </form>
    )
  }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
  }

export default AddTodo
