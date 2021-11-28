import React from 'react';
import './ToDoItem.scss';

const ToDoItem = props => {
  return (
    <li className='todo_item'>
      <input
        type='checkbox'
        onChange={props.handleChange}
        defaultChecked={props.completed}
      />
      <label className={props.completed ? 'desc_checked' : 'description'}>
        {props.description}
      </label>
      <span onClick={props.removeItem}>&times;</span>
    </li>
  );
};

export default ToDoItem;
