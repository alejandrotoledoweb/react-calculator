import React from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

import '../index.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calculation: 0,
    };
  }

  render() {
    const { calculation } = this.state;

    return (
      <>
        <section className="app">
          <Display result={calculation} />
          <ButtonPanel />
        </section>
      </>
    );
  }
}
