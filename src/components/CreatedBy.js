import React from 'react';
import './CreatedBy.css';

// hard coded this component because it does not change
// the expression '&nbsp;' is just a space because i the Prettier extention would remove the space in those place, which are needed for better visibility
export const CreatedBy = () => {
  return (
    <div className="created">
      <p className="created--text">
        created by&nbsp;
        <a
          className="created--link created--link--username"
          href="https://devchallenges.io/portfolio/rachidbend"
          target={'_blank'}
        >
          rachidbend
        </a>
        &nbsp; - &nbsp;
        <a
          className="created--link"
          href="https://devchallenges.io/challenges/hH6PbOHBdPm6otzw2De5"
          target={'_blank'}
        >
          devChallenges.io
        </a>
      </p>
    </div>
  );
};
