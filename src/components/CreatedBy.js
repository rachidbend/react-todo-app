import React from 'react';

// hard coded this component because it does not change
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
