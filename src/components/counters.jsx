import React from 'react';
import Counter from './counter';

const Counters = ({ counters, onReset, ...rest }) => {
  return (
    <>
      {counters.map((counter) => (
        <Counter key={counter.id} {...counter} {...rest} />
      ))}
      <button className="btn btn-primary btn-m mb-3" onClick={onReset}>
        Reset
      </button>
    </>
  );
};

export default Counters;
