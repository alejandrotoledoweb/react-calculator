import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

it('test the render of the Quote page', () => {
  const quote = renderer
    .create(<Quote />)
    .toJSON();
  expect(quote).toMatchSnapshot();
});
