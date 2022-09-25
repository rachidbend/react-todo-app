import React from 'react';
import './App.css';

import { TodoInput } from '../components/TodoInput';
import { Todo } from '../features/todos/Todo';
import { Filters } from '../features/filter/Filters';

function App() {
  return (
    <div className="App">
      <h1 className="todo--title">#todo</h1>
      <Filters />
      <TodoInput />
      <Todo />
    </div>
  );
}

export default App;
