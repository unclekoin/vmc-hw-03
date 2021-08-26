import React, { useState } from 'react';
import Counters from './counters';
import NavBar from './nav-bar';

const App = () => {
  const initialState = [
    { id: 1, value: 0, name: 'Spoon' },
    { id: 2, value: 0, name: 'Fork' },
    { id: 3, value: 0, name: 'Plate' },
    { id: 4, value: 0, name: 'Knife' },
    { id: 5, value: 0, name: 'Glass' },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  const handleReset = () => setCounters(initialState);

  const handleIncrement = (counterId) => {
    const newCounters = [...counters];
    const index = counters.findIndex((counter) => counter.id === counterId);
    newCounters[index].value += 1;

    setCounters(newCounters);
  };

  const handleDecrement = (counterId) => {
    const newCounters = [...counters];
    const index = counters.findIndex((counter) => counter.id === counterId);
    newCounters[index].value -= 1;

    setCounters(newCounters);
  };
  return (
    <div className="col-lg-8 mx-auto py-md-5">
      <NavBar
        totalItems={counters.reduce((acc, counter) => acc + counter.value, 0)}
      />
      <main>
        <Counters
          counters={counters}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onReset={handleReset}
        />
      </main>
    </div>
  );
};

export default App;
