import React from 'react';
import { useDispatch } from 'react-redux';

import { IconContext } from 'react-icons';
import { MdDone, MdDeleteOutline } from 'react-icons/md';
import { toggleTodo, removeTodo } from './todoSlice';

export const Todo = props => {
  const todo = props.todo;
  const addDelete = props.addDelete;
  const dispatch = useDispatch();

  const handleChange = event => {
    const idEl = +event.target.parentElement.parentElement.id;
    dispatch(toggleTodo({ id: idEl }));
  };

  const handleDelete = event => {
    const idEl = +event.target.parentElement.parentElement.id;
    dispatch(
      removeTodo({
        id: idEl,
      })
    );
  };

  return (
    <li
      key={todo.id}
      id={todo.id}
      className={todo.completed ? 'todo todo-completed' : 'todo'}
    >
      <label>
        <input
          onChange={handleChange}
          type="checkbox"
          name=""
          id={'checkbox-' + todo.id}
          className="todo-checkbox"
          checked={todo.completed ? true : false}
        />
        <span className="checkmark">
          {' '}
          <IconContext.Provider value={{ className: 'react-icon--done' }}>
            <MdDone />
          </IconContext.Provider>
        </span>
      </label>

      {todo.todo}

      {addDelete && (
        <a onClick={handleDelete} href="#" className="delete-todo">
          <IconContext.Provider
            value={{ className: 'react-icon--delete-todo' }}
          >
            <MdDeleteOutline />
          </IconContext.Provider>
        </a>
      )}
    </li>
  );
};
