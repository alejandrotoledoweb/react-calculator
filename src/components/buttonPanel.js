/* eslint-disable arrow-parens */
import React from 'react';
import Button from './button';

import '../index.css';

const ButtonPanel = () => {
  const group = [['AC', '+/-', '%', '÷'], [7, 8, 9, 'X'], [4, 5, 6, '-'], [1, 2, 3, '+'], [0, '.', '=']];

  return (
    <>
      {group.map((elem) => (
        <div className="btn" key={elem.id}>
          {elem.map((btn) => (
            <Button key={btn.id} name={btn} />
          ))}
        </div>
      ))}
    </>
  );
};

export default ButtonPanel;
