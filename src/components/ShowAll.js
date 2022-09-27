import React from 'react';
import { useSelector } from 'react-redux';

// Todo component is the one that return each component to make sure they work properly
import { Todo } from '../features/todos/Todo';

// selecting the todos
const selectTodos = state => state.todos;

export const ShowAll = () => {
  const todos = useSelector(selectTodos);

  // showing all of the todos by maping through all of them
  return (
    <ul className="todos-container">
      {todos.map(todo => {
        return <Todo todo={todo} key={todo.id} addDelete={false} />;
      })}
    </ul>
  );
};
