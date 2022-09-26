import React from 'react';
import { useSelector } from 'react-redux';

import { Todo } from '../features/todos/Todo';

const selectTodos = state => state.todos;

export const ShowAll = () => {
  const todos = useSelector(selectTodos);

  return (
    <ul>
      {todos.map(todo => {
        return <Todo todo={todo} key={todo.id} addDelete={false} />;
      })}
    </ul>
  );
};

{
  /* <li
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
          </li> */
}
