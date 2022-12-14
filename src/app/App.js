import React, { useEffect } from 'react';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';

// action creator to set the stored todos
import { setStoredTodos } from '../features/todos/todoSlice';

// components
import { Filters } from '../features/filter/Filters';
import { TodoInput } from '../components/TodoInput';
import { TodosContainer } from '../features/todos/TodosContainer';
import { CreatedBy } from '../components/CreatedBy';

const selectTodo = state => state.todos;

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);

  // this code is to first get any stored todos, and if there was none, it would still work as normal, and this happens only when the app is first initialized
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('todos'));
    if (data === undefined || data === null) return;
    dispatch(setStoredTodos(data));
  }, []);
  // this code is to store the todos every time something in them changes, to make sure that all todos are always saved, and each time it is stored it over-rides the previes stored todos, so storing todos each time is enough
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <h1 className="todo--title">#todo</h1>
      <Filters />
      <TodoInput />
      <TodosContainer />
      <CreatedBy />
    </div>
  );
}

export default App;
