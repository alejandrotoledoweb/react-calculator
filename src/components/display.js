import React from 'react';
import PropTypes from 'prop-types';

import '../index.css';

const Display = (props) => {
  const { result } = props;
  return (
    <>
      <div
        className="display"
      >
        { result }
      </div>
    </>
  );
};

Display.defaultProps = {
  result: 0,
};

Display.propTypes = {
  result: PropTypes.number,
};

export default Display;
