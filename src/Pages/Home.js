import { AlertContext } from 'context/alert/alertContext';
import React, { useContext, useEffect, useState } from 'react';
import ToDoItem from 'Components/toDo/ToDoItem/ToDoItem';
import todosData from 'Components/toDo/todosData';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Home = () => {
  const dataList = JSON.parse(localStorage.getItem('list')) || todosData;
  const [todoItems, setTodoItems] = useState(dataList);
  const [newTask, setNewTask] = useState('');
  const alert = useContext(AlertContext);

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

  const addNewTask = e => {
    e.preventDefault();
    if (newTask) {
      const objTask = {
        id: newId(todoItems),
        text: newTask,
        completed: false,
      };
      let updList = [...todoItems, objTask];
      setNewTask('');
      setTodoItems(updList);
      alert.show('Your task was added', 'success');
      setTimeout(() => {
        alert.hide();
      }, 5000);
    } else {
      alert.show('Type your task, please');
      setTimeout(() => {
        alert.hide();
      }, 5000);
    }
  };

  const removeHandler = id => {
    const index = todoItems.map(el => el.id).indexOf(id);
    const newArray = [...todoItems];
    const result = newArray.filter((el, ind) => ind !== index);
    setTodoItems(result);
    alert.show('Task was deleted', 'danger');
    setTimeout(() => {
      alert.hide();
    }, 5000);
  };

  const activeTasks = todoItems.filter(task => task.completed === false);
  const completedTasks = todoItems.filter(task => task.completed === true);
  const finalTasks = [...activeTasks, ...completedTasks].map(it => {
    return (
      <CSSTransition key={it.id} classNames={'anime'} timeout={800}>
        <ToDoItem
          description={it.text}
          completed={it.completed}
          handleChange={() => listChange(it.id)}
          removeItem={() => removeHandler(it.id)}
        />
      </CSSTransition>
    );
  });

  return (
    <div className='App'>
      <h1>My To-Do List</h1>
      <form onSubmit={addNewTask} className='input_wrapper'>
        <input
          className='input_item'
          onChange={inputHandler}
          value={newTask}
          type='text'
          placeholder='Enter your task here'
        />
        <input className='input_btn' type='submit' value='Add' />
      </form>
      {!finalTasks.length ? (
        <h3>You have no tasks to do! :)</h3>
      ) : (
        <TransitionGroup component='ul'>{finalTasks}</TransitionGroup>
      )}
    </div>
  );
};

export default Home;
