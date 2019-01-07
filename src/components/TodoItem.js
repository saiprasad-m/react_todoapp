import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            backgroundColor: 'lightgrey',
            padding: '10px',
            borderBottom: '1px red dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

  render() {
    const {id , title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={
            this.props.markComplete.bind(this, id)
          }/> {'   '}
          {title}
          <button style={btnStyle} onClick={
            this.props.deleteTodo.bind(this,id)
          }>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }

const btnStyle = {
  background: 'red',
  color: 'white',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '55%',
  cursor: 'pointer',
  float: 'right'
}  
export default TodoItem;
