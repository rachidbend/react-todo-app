import React from 'react';
import { useSelector } from 'react-redux';
import './Todo.css';

// components to show diffrent todos depending on the filter selected
import { ShowAll } from '../../components/ShowAll';
import { ShowActive } from '../../components/ShowActive';
import { ShowCompleted } from '../../components/ShowCompleted';

// selecting the filter
const selectFilter = state => state.filter;

export const TodosContainer = () => {
  const filter = useSelector(selectFilter);
  // render diffrent components depending on which filter is selected (default filter is 'ALL')
  // render when filter is 'ALL'
  if (filter === 'ALL') {
    return (
      <div>
        <ShowAll />
      </div>
    );
  }
  // render when filter is 'ACTIVE'
  else if (filter === 'ACTIVE') {
    return (
      <div>
        <ShowActive />
      </div>
    );
  }
  // render when filter is 'COMPLETED'
  else if (filter === 'COMPLETED') {
    return (
      <div>
        <ShowCompleted />
      </div>
    );
  }
};
