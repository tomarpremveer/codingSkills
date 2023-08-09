import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const handleTextChange = (event) => {
    setTodoText(event.target.value);
  };
  const handleSubmitClick = (e) => {
    e.preventDefault();
    const todo = {
      title: todoText,
      id: Math.floor(Math.random() * 4),
      status: "todo"
    };
    setTodos((prevState) => [...prevState, todo]);
    setTodoText("");
  };
  const toggleStatus = (todoId) => {
    const allTodos = [...todos];
    const todoIndex = allTodos.findIndex((todo) => todo.id === todoId);
    const todo = allTodos[todoIndex];
    const modifiedTodo = {
      ...todo,
      status: todo.status === "done" ? "todo" : "done"
    };

    allTodos.splice(todoIndex, 1, modifiedTodo);
    setTodos([...allTodos]);
  };
  return (
    <div className="App">
      <form>
        <input
          type="text"
          data-testid="todoText"
          placeholder="What next?"
          value={todoText}
          onChange={handleTextChange}
        />
        <button
          type="submit"
          data-testid="submitBtn"
          onClick={handleSubmitClick}
        >
          Submit
        </button>
      </form>
      <div data-testid="todos">
        {todos.length > 0
          ? todos.map((todo) => (
              <div className="todo">
                <div className="text">
                  <span>{todo.title}</span>
                </div>
                <div className="actions">
                  <label className="label">
                    <input
                      type="checkbox"
                      checked={todo.status === "done"}
                      onChange={() => toggleStatus(todo.id)}
                    />
                    {todo.status === "todo" ? "Mark as done" : "Completed"}
                  </label>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
