import React from 'react';

const Counter = ({ id, value, name, onDelete, onIncrement, onDecrement }) => {
  const formValue = () => {
    return value ? value : 'Empty';
  };

  const getBadgeClasses = () => {
    let classes = 'badge ms-2 me-2 bg-';
    classes += value ? 'primary' : 'warning';
    return classes;
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-2 p-3">
      <h5 className="col-6">{name}</h5>
      <span className="badge-wrapper">
        <span className={getBadgeClasses()}>{formValue()}</span>
      </span>
      <div className="btn-group">
        <button
          className="btn btn-primary btn-m"
          onClick={() => onIncrement(id)}
        >
          +
        </button>
        <button
          className="btn btn-primary btn-m"
          onClick={() => onDecrement(id)}
          disabled={!value}
        >
          -
        </button>
      </div>
      <button className="btn btn-secondary btn-m" onClick={() => onDelete(id)}>
        <i className="bi bi-trash"></i>
      </button>
    </div>
  );
};

export default Counter;
