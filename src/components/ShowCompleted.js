import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// action creator to remove all the completed todos
import { removeAll } from '../features/todos/todoSlice';

// Icons
import { IconContext } from 'react-icons';
import { MdDeleteOutline } from 'react-icons/md';

// Todo component is the one that return each component to make sure they work properly
import { Todo } from '../features/todos/Todo';

// selecting the todos
const selectTodos = state => state.todos;

export const ShowCompleted = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  // when the deleteAll button is clicked dispatch the 'removeAll' action
  const handleDeleteAll = () => {
    dispatch(removeAll());
  };

  // showing only the completed todos by firtly filtering them to get only the completed ones, then maping through the resulting array, and adding a button to delete all the completed todos at the end
  return (
    <ul className="todos-container">
      {todos
        .filter(todo => todo.completed)
        .map(todo => {
          return <Todo todo={todo} key={todo.id} addDelete={true} />;
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
