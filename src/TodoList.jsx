// src/TodoList.jsx
import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "./contexts/TodoContext";

function TodoList() {
  // 🔽 ไม่ต้องรับ props แล้ว
  const { todos } = useContext(TodoContext); // 🔽 ดึง state มาจาก context

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
