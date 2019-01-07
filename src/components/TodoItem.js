import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  render() {
    return (
      <div style={itemStyle}>
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}

const itemStyle = {
    backgroundColor: 'lightgrey'
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }
export default TodoItem;
