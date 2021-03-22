import React from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';

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
      <section className="app">
        <Display result={calculation} />
        <ButtonPanel />
      </section>
    );
  }
}
