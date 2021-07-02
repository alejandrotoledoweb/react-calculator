/* eslint-disable arrow-parens */
import React, { useState } from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logic/calculate';
import '../styles/app.css';

import '../index.css';

const App = () => {
  const [calculation, setCalculation] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    const result = calculate(calculation, buttonName);
    setCalculation({ ...result });
  };

  const result = calculation;

  return (
    <>
      <div className="app">
        <Display result={result} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
};

export default App;
