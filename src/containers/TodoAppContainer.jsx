// src/containers/TodoAppContainer.jsx
import React, { useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoList from "../TodoList";
import TodoForm from "../TodoForm";

function TodoAppContainer() {
  // 🔽 Logic ทั้งหมดอยู่ที่นี่
  const [todos, setTodos] = useState([
    { id: 1, text: "เรียนรู้ Design Patterns", completed: false },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const todoContextValue = {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
  };

  // 🔽 Container จะ return ส่วนของ UI ที่เกี่ยวข้อง
  return (
    <TodoContext.Provider value={todoContextValue}>
      <div className="app">
        <h1>My To-Do List (Container Pattern)</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}

export default TodoAppContainer;
