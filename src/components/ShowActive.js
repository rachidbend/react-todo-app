import React from 'react';
import { useSelector } from 'react-redux';

import { Todo } from '../features/todos/Todo';

const selectTodos = state => state.todos;

export const ShowActive = () => {
  const todos = useSelector(selectTodos);

  return (
    <ul>
      {todos
        .filter(todo => !todo.completed)
        .map(todo => {
          return <Todo todo={todo} key={todo.id} addDelete={false} />;
        })}
    </ul>
  );
};
