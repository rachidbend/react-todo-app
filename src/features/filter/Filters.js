import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Filters.css';

// action creators to select which filter is selected, 'ALL', 'AVTIVE' or 'COMPLETED'
import { showAll, showActive, showCompleted } from './filterSlice';

// selecting the filters
const selectFilter = state => state.filter;

export const Filters = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  // selecting the filter buttons
  const allEl = useRef(null);
  const activeEl = useRef(null);
  const completedEl = useRef(null);

  // when ever the filter changes, change which filter in the UI is displayed as selected
  useEffect(() => {
    // this code is for the Simple vertion of the toggle
    // filter === 'ALL'
    //   ? allEl.current.classList?.add('active')
    //   : allEl.current.classList?.remove('active');

    // filter === 'ACTIVE'
    //   ? activeEl.current.classList?.add('active')
    //   : activeEl.current.classList?.remove('active');

    // filter === 'COMPLETED'
    //   ? completedEl.current.classList?.add('active')
    //   : completedEl.current.classList?.remove('active');

    // this code is for the Animated vertion of the toggle
    if (filter === 'ALL') {
      allEl.current.classList?.add('active');
      allEl.current.parentElement.classList?.add('active--all');
    } else {
      allEl.current.classList?.remove('active');
      allEl.current.parentElement.classList?.remove('active--all');
    }

    if (filter === 'ACTIVE') {
      activeEl.current.classList?.add('active');
      allEl.current.parentElement.classList?.add('active--active');
    } else {
      activeEl.current.classList?.remove('active');
      allEl.current.parentElement.classList?.remove('active--active');
    }

    if (filter === 'COMPLETED') {
      completedEl.current.classList?.add('active');
      allEl.current.parentElement.classList?.add('active--completed');
    } else {
      completedEl.current.classList?.remove('active');
      allEl.current.parentElement.classList?.remove('active--completed');
    }
  }, [filter]);

  return (
    <div className="filter-container">
      <a
        href="#"
        onClick={() => {
          dispatch(showAll());
        }}
        className="filter filter-all filter-activated"
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
