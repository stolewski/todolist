import React, { useEffect, useState } from 'react';
import './App.css';
import ToDoItem from './toDo/ToDoItem/ToDoItem';
import todosData from './toDo/todosData';

const App = () => {
  const dataList = JSON.parse(localStorage.getItem('list')) || todosData;
  const [todoItems, setTodoItems] = useState(dataList);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(todoItems));
  }, [todoItems]);

  const listChange = id => {
    const index = todoItems.map(el => el.id).indexOf(id);
    let newList = [...todoItems];
    newList[index].completed
      ? (newList[index].completed = false)
      : (newList[index].completed = true);
    setTodoItems(newList);
  };
  const inputHandler = e => {
    let inputValue = e.target.value;
    setNewTask(inputValue);
  };
  const newId = array => {
    if (array.length) {
      let i = array.length;
      let max = 0;
      while (i) {
        if (array[i - 1].id > max) max = array[i - 1].id;
        i--;
      }
      return max + 1;
    } else return 1;
  };

  const addNewTask = () => {
    if (newTask) {
      const objTask = {
        id: newId(todoItems),
        text: newTask,
        completed: false,
      };
      let updList = [...todoItems, objTask];
      setNewTask('');
      setTodoItems(updList);
    }
  };

  const removeHandler = id => {
    const index = todoItems.map(el => el.id).indexOf(id);
    const newArray = [...todoItems];
    const result = newArray.filter((el, ind) => ind !== index);
    setTodoItems(result);
  };

  const activeTasks = todoItems.filter(task => task.completed === false);
  const completedTasks = todoItems.filter(task => task.completed === true);
  const finalTasks = [...activeTasks, ...completedTasks].map(it => {
    return (
      <ToDoItem
        key={it.id}
        description={it.text}
        completed={it.completed}
        handleChange={() => listChange(it.id)}
        removeItem={() => removeHandler(it.id)}
      />
    );
  });

  return (
    <div className='App'>
      <h1>My To-Do List</h1>
      <div className='input_wrapper'>
        <input
          className='input_item'
          onChange={inputHandler}
          value={newTask}
          type='text'
          placeholder='Enter your task here'
        />
        <input
          className='input_btn'
          type='submit'
          onClick={addNewTask}
          value='Add'
        />
      </div>
      {finalTasks}
    </div>
  );
};

export default App;
