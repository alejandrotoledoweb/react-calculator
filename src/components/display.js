/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';

import '../styles/display.css';
import '../index.css';

const Display = ({ result }) => {
  const { total, next, operation } = result;
  let nextD;
  if (total == null) {
    if (next == null) {
      nextD = '0';
    } else {
      nextD = next;
    }
  } else if (next == null) {
    nextD = '';
  } else {
    nextD = next;
  }
  const display = `${total == null ? '' : total}
    ${operation == null ? '' : operation}
    ${nextD}`;
  return (
    <div className="display"><strong>{display}</strong></div>
  );
};

Display.propTypes = {
  result: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    next: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    operation: PropTypes.string,
  }).isRequired,
};

export default Display;
