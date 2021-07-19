import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';



test('renders Reset button', () => {
  render(<App />);
  expect(screen.queryByTitle('button'))
});

test('renders Reset button', () => {
  render(<App />);
  expect(screen.queryAllByText('Timer App'))
});


test('renders Reset button', () => {
  render(<App />);
  expect(screen.queryByTestId('Stop'))
});

test('renders Reset button', () => {
  render(<App />);
  expect(screen.queryByTestId('Rename'))
});


test('renders Reset button', () => {
  render(<App />);
  expect(screen.queryByTestId('Play'))
});

test('renders Reset button', () => {
  render(<App />);
  expect(screen.queryByTestId('time'))
});






