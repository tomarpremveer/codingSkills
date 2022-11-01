import React from 'react';
import {  render, screen } from '@testing-library/react';
import App from './App';
import CounterContainer from './components/CounterContainer';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('initially value of count is equal to the value provided', async () => {
  const count = 0;
  render(<CounterContainer count={count} />)
  const counterElement = await screen.findByTestId("count")
  expect(counterElement.textContent).toBe(String(count));
})
test('value increase when clicked on increase button', async () => {
  render(<App />)
  const increaseButton = await screen.findByText("Increase")
  increaseButton.click();
  const counterElement = await screen.findByTestId("count")
  expect(counterElement.textContent).toBe("1");
})

test('value decrease when clicked on decrease button but does not go below zero', async () => {
  render(<App />)
  const decreaseButton = await screen.findByText("Decrease")
  decreaseButton.click();
  decreaseButton.click();
  const counterElement = await screen.findByTestId("count")
  expect(counterElement.textContent).toBe("0");
})
test('value reset to zero, on click of reset button', async () => {
  render(<App />)
  const resetButton = await screen.findByText("Reset")
  resetButton.click();
  const counterElement = await screen.findByTestId("count")
  expect(counterElement.textContent).toBe("0");
})