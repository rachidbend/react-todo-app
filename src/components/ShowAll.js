import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from '../features/todos/todoSlice';
import { IconContext } from 'react-icons';
import { MdDone } from 'react-icons/md';

const selectTodos = state => state.todos;

export const ShowAll = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const checkboxEl = useRef(null);

  const handleChange = event => {
    const idEl = +event.target.parentElement.parentElement.id;
    // console.log(idEl);
    dispatch(toggleTodo({ id: idEl }));
  };

  return (
    <ul>
      {todos.map(todo => {
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
                  <MdDone className="icon-done" />
                </IconContext.Provider>
              </span>
            </label>

            {todo.todo}
          </li>
        );
      })}
    </ul>
  );
};
