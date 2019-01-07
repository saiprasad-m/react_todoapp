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

    markComplete = (e) => {
      console.log(this.props)
    }

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.markComplete}/> {' '}
          {this.props.todo.title}
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }
export default TodoItem;
