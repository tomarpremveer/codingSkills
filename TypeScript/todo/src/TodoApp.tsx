import React, { useState, useMemo, useRef } from 'react';
import { debounce } from 'lodash';

interface TodoTypes {
    title: string;
    state: 'done' | 'remaining';
    id: number;
}

function TodoApp(): JSX.Element {
    const [todos, setTodos] = useState<TodoTypes[]>([]);
    const [todoTitle, setTodoTitle] = useState<string>('');
    const inputRef = useRef<HTMLInputElement | null>(null);
    const submitHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        const newTodo: TodoTypes = {
            title: todoTitle,
            state: 'remaining',
            id: Math.floor(Math.random() * 1000),
        };
        console.log('the new todo is', newTodo);

        setTodos((prevState) => [newTodo, ...prevState]);
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };
    const onTitleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target;
        setTodoTitle(value);
    };
    const onCheckBoxClick: React.ChangeEventHandler<HTMLInputElement> = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { dataset } = event.target;
        const index: number = Number(dataset['index']) || 0;
        const todoIndex = todos.findIndex((todo) => todo.id === index);
        const todo = todos[todoIndex];
        if (todo) {
            const updatedTodo: TodoTypes = {
                ...todo,
                state: todo.state === 'done' ? 'remaining' : 'done',
            };
            const _todos = [...todos];
            _todos.splice(todoIndex, 1, updatedTodo);
            setTodos([..._todos]);
        }
    };
    /* Using debounced handlers we can improve the perf of an application */
    const debounceChangeHandler = useMemo(
        () => debounce(onTitleChange, 100),
        []
    );
    return (
        <div
            style={{
                marginTop: '10px',
            }}
        >
            <label htmlFor="todoLabel"></label>
            <input
                id="todoLabel"
                data-testid="todo"
                ref={inputRef}
                onChange={debounceChangeHandler}
            />
            <button onClick={submitHandler} data-testid="submitButton">
                Create Todo
            </button>
            <div id="todoContainer">
                {todos && todos.length > 0
                    ? todos.map((todo) => (
                          <div
                              key={todo.id}
                              style={{
                                  width: '500px',
                                  display: 'flex',
                                  justifyContent: 'space-between',
                              }}
                          >
                              <input
                                  data-index={todo.id}
                                  type="checkbox"
                                  onChange={onCheckBoxClick}
                              />
                              <p>{todo.title}</p>
                              <p>{todo.state}</p>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
}

export default TodoApp;
