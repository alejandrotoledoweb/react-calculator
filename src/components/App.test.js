import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Calculator snapshot', () => {
  it('Renders the Calculator page', () => {
    const calculator = renderer
      .create(<App />)
      .toJSON();
    expect(calculator).toMatchSnapshot();
  });
});

describe('Calculator methods', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('it test add numbers', async () => {
    userEvent.click(screen.getByText('1'));
    userEvent.click(screen.getByText('5'));
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('0'));
    userEvent.click(screen.getByText('='));
    const display = await screen.findByText('35');
    expect(display).toBeInTheDocument();
  });

  it('it test substract numbers', async () => {
    userEvent.click(screen.getByText('1'));
    userEvent.click(screen.getByText('5'));
    userEvent.click(screen.getByText('−'));
    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('0'));
    userEvent.click(screen.getByText('='));
    const display = await screen.findByText('-5');
    expect(display).toBeInTheDocument();
  });

  it('it test divide numbers', async () => {
    userEvent.click(screen.getByText('5'));
    userEvent.click(screen.getByText('÷'));
    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('='));
    const display = await screen.findByText('2.5');
    expect(display).toBeInTheDocument();
  });

  it('it test multiply numbers', async () => {
    userEvent.click(screen.getByText('5'));
    userEvent.click(screen.getByText('×'));
    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('0'));
    userEvent.click(screen.getByText('='));
    const display = await screen.findByText('100');
    expect(display).toBeInTheDocument();
  });

  it('it converts to a negative numbers', async () => {
    userEvent.click(screen.getByText('5'));
    userEvent.click(screen.getByText('±'));
    const display = await screen.findByText('-5');
    expect(display).toBeInTheDocument();
  });

  it('it converts to a positive numbers', async () => {
    userEvent.click(screen.getByText('−'));
    userEvent.click(screen.getByText('8'));
    userEvent.click(screen.getByText('±'));
    const display = await screen.findByText('8');
    expect(display).toBeInTheDocument();
  });

  it('it converts percentage', async () => {
    userEvent.click(screen.getByText('8'));
    userEvent.click(screen.getByText('%'));
    const display = await screen.findByText('0.08');
    expect(display).toBeInTheDocument();
  });

  it('it clears the display', async () => {
    userEvent.click(screen.getByText('8'));
    userEvent.click(screen.getByText('AC'));
    expect(screen.queryByText('50')).toBeNull();
  });
});
