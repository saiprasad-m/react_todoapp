import React, { Component } from 'react'


export class AddTodo extends Component {
    state = {
        title: ''
    }

  onChange = (e) => {
      this.setState({
          title: e.target.value
      })
  }  
  render() {
    return (
      <form style={{display: 'flex', padding: '3px'}}>
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

export default AddTodo
