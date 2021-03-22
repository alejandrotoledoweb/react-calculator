import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  constructor(props) {
    super(props);

    Display.defaultProps = {
      result: 0,
    };
  }

  render() {
    return (
      <div className="display">
        {result}
      </div>
    );
  }
}
