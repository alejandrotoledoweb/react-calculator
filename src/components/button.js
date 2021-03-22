import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    Button.propTypes = {
      name: PropTypes.string.isRequired,
    };
  }

  render() {
    const name  = this.propType.name;
    return (
      <div
        className="btn"
      >
        { name }
      </div>
    );
  }
}
