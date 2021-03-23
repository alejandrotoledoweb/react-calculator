/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

import '../index.css';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };

  const group = [['AC', '±', '%', '÷'], ['7', '8', '9', '×'], ['4', '5', '6', '−'], ['1', '2', '3', '+'], ['0', '.', '=']];

  return (
    <>
      {group.map((elem) => (
        <div key={elem.toString()} className="btn-panel">
          {elem.map((btn, index) => (
            <Button key={btn} name={btn} num={index} clickHandler={handleClick} />
          ))}
        </div>
      ))}
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
