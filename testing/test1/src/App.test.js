import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("input box and submit button is rendered", () => {
  render(<App />);
  const inputElement = screen.getByTestId("todoText");
  expect(inputElement).toBeInTheDocument();
  const submitButton = screen.getByTestId("submitBtn");
  expect(submitButton).toBeInTheDocument();
  /*More things that we can test are, empty input and enabled submit button */
});

test("user is able to enter text in input", async () => {
  render(<App />);
  const user = userEvent.setup();
  const inputElement = screen.getByTestId("todoText");
  await user.clear(inputElement);
  await user.type(inputElement, "Hi there");
  expect(inputElement).toHaveValue("Hi there");
});

test("user is able to create todo on click of submit button", async () => {
  render(<App />);
  const user = userEvent.setup();
  const inputElement = screen.getByTestId("todoText");
  await user.clear(inputElement);
  await user.type(inputElement, "Hi there");
  const submitButton = screen.getByTestId("submitBtn");
  await user.click(submitButton);
  const todos = screen.getAllByTestId("todos");
  expect(todos).toHaveLength(1);
});

test("input is empty after submit button is clicked", async () => {
  render(<App />);
  const user = userEvent.setup();
  const inputElement = screen.getByTestId("todoText");
  await user.type(inputElement, "Hi there");
  const submitButton = screen.getByTestId("submitBtn");
  await user.click(submitButton);
  expect(inputElement).toHaveValue("");
});

test("user is able to toggle the status of todo", async () => {
  render(<App />);
  const user = userEvent.setup();
  const inputElement = screen.getByTestId("todoText");
  await user.type(inputElement, "Hi there");
  const submitButton = screen.getByTestId("submitBtn");
  await user.click(submitButton);
  const todo = screen.getByRole("checkbox");
  await user.click(todo);
  expect(todo).toBeChecked();
  const labelWithTextCompleted = screen.getByLabelText("Completed");
  expect(labelWithTextCompleted).toBeInTheDocument();
  await user.click(todo);
  expect(todo).not.toBeChecked();
  const labelWithMarkasdone = screen.getByLabelText("Mark as done");
  expect(labelWithMarkasdone).toBeInTheDocument();
});
