import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../features/todos/todoSlice';
import './TodoInput.css';

const selectFilter = state => state.filter;

export const TodoInput = props => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  // using ref to get the input
  const inputEl = useRef(null);
  const inputContainer = useRef(null);

  const handleClick = e => {
    e.preventDefault();
    // make an id using time stamp
    const id = String(Date.now()).slice(-6);
    // get the value of the input
    const text = inputEl.current.value;
    if (text === '') return;

    // create the todo
    const todo = {
      todo: text,
      id: +id,
      completed: false,
    };
    // dispatch an action to add a new todo
    dispatch(addTodo(todo));

    // clearing the input field
    inputEl.current.value = '';
    // focus on field after its cleared to quickly add another todo
    inputEl.current.focus();
  };

  useEffect(() => {
    // Hide the todo input if the selected filter is 'Completed'
    if (filter === 'COMPLETED') {
      inputContainer.current.classList?.add('input-container--hidden');
    }
    // and show the todo input every other time (when filter is 'All' or 'Active')
    else {
      inputContainer.current.classList?.remove('input-container--hidden');
    }
  }, [filter]);

  return (
    <div className="input-container" ref={inputContainer}>
      <form onSubmit={handleClick} className="input-form">
        <input
          ref={inputEl}
          className="todo-input"
          type="text"
          placeholder="add details"
        />
        <button type="submit" onClick={handleClick} className="todo-add">
          Add
        </button>
      </form>
    </div>
  );
};
