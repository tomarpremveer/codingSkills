import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Todo from './TodoApp';

test('empty input field and a submit button is rendered', async () => {
    render(<Todo />);
    const inputField = await screen.findByTestId('todo');
    expect(inputField).toHaveValue('');
    expect(inputField).toBeInTheDocument();
    const submitButton = await screen.findByTestId('submitButton');
    expect(submitButton).toBeInTheDocument();
});

test('Entering text in input element and clicking submit button creates a todo', async () => {
    render(<Todo />);
    const inputField = await screen.findByTestId('todo');
    userEvent.type(inputField, 'Monty');
    expect(inputField).toHaveValue('Monty');
});
