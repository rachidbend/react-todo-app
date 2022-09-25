import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo, removeAll } from '../features/todos/todoSlice';
import { IconContext } from 'react-icons';
import { MdDone, MdDeleteOutline } from 'react-icons/md';

const selectTodos = state => state.todos;

export const ShowCompleted = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleChange = event => {
    const idEl = +event.target.parentElement.id;
    dispatch(toggleTodo({ id: idEl }));
  };

  const handleDelete = event => {
    const idEl = +event.target.parentElement.parentElement.id;
    console.log(idEl);
    dispatch(
      removeTodo({
        id: idEl,
      })
    );
  };

  const handleDeleteAll = () => {
    dispatch(removeAll());
  };

  return (
    <ul className="todos-container">
      {todos
        .filter(todo => todo.completed)
        .map(todo => {
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
                  <IconContext.Provider
                    value={{ className: 'react-icon--done' }}
                  >
                    <MdDone />
                  </IconContext.Provider>
                </span>
              </label>
              {todo.todo}

              <a onClick={handleDelete} href="#" className="delete-todo">
                <IconContext.Provider
                  value={{ className: 'react-icon--delete-todo' }}
                >
                  <MdDeleteOutline />
                </IconContext.Provider>
              </a>
            </li>
          );
        })}
      <button className="btn btn--delete-all" onClick={handleDeleteAll}>
        <IconContext.Provider value={{ className: 'react-icon--delete-all' }}>
          <MdDeleteOutline />
        </IconContext.Provider>
        Delete All
      </button>
    </ul>
  );
};