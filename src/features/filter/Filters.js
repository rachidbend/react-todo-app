import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAll, showActive, showCompleted } from './filterSlice';
import './Filters.css';

// selecting the filters

const selectFilter = state => state.filter;

export const Filters = props => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const allEl = useRef(null);
  const activeEl = useRef(null);
  const completedEl = useRef(null);

  useEffect(() => {
    filter === 'ALL'
      ? allEl.current.classList?.add('active')
      : allEl.current.classList?.remove('active');

    filter === 'ACTIVE'
      ? activeEl.current.classList?.add('active')
      : activeEl.current.classList?.remove('active');

    filter === 'COMPLETED'
      ? completedEl.current.classList?.add('active')
      : completedEl.current.classList?.remove('active');
  }, [filter]);

  return (
    <div className="filter-container">
      <a
        href="#"
        onClick={() => {
          dispatch(showAll());
        }}
        className="filter filter-all"
        ref={allEl}
      >
        All
      </a>
      <a
        href="#"
        onClick={() => {
          dispatch(showActive());
        }}
        className="filter filter-active"
        ref={activeEl}
      >
        Active
      </a>
      <a
        href="#"
        onClick={() => {
          dispatch(showCompleted());
        }}
        className="filter filter-completed"
        ref={completedEl}
      >
        Completed
      </a>
    </div>
  );
};
