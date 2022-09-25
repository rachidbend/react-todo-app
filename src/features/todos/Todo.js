import React from 'react';
import { useSelector } from 'react-redux';

// components
import { ShowAll } from '../../components/ShowAll';
import { ShowActive } from '../../components/ShowActive';
import { ShowCompleted } from '../../components/ShowCompleted';

import './Todo.css';

const selectTodos = state => state.todos;
const selectFilter = state => state.filter;

// ///////////////////////////////////////////////////

// /////////////////////////////////////////////////////////////

export const Todo = props => {
  // const dispatch = useDispatch();
  // const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  if (filter === 'ALL') {
    return (
      <div>
        <ShowAll />
      </div>
    );
  } else if (filter === 'ACTIVE') {
    return (
      <div>
        <ShowActive />
      </div>
    );
  } else if (filter === 'COMPLETED') {
    return (
      <div>
        <ShowCompleted />
      </div>
    );
  }
};
