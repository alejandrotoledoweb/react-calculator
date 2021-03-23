import React, { useState } from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

import '../index.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const { calculation, setCalculation } = useState({
      total: null,
      next: null,
      operation: null,
    });
  }

  render() {
    const handleClick = (buttonName) => {
      const result = calculate(calculation, buttonName);
      setCalculation({ ...result });
    };
    const result = calculation;

    return (
      <>
        <div className="app-1">
          <div className="app">
            <Display result={result} />
            <ButtonPanel clickHandler={handleClick} />
          </div>
        </div>
      </>
    );
  }
};