import React from 'react';
import { useSelector } from 'react-redux';

// Todo component is the one that return each component to make sure they work properly
import { Todo } from '../features/todos/Todo';

// selecting the todos
const selectTodos = state => state.todos;

export const ShowActive = () => {
  const todos = useSelector(selectTodos);

  // showing the active todos by first filtering them to get the incompleted todos, then maping through the resulting array
  return (
    <ul className="todos-container">
      {todos
        .filter(todo => !todo.completed)
        .map(todo => {
          return <Todo todo={todo} key={todo.id} addDelete={false} />;
        })}
    </ul>
  );
};
