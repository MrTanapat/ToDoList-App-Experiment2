// src/App.jsx
import React from "react";
import TodoAppContainer from "./containers/TodoAppContainer";
import "./App.css";

function App() {
  // 🔽 ไม่มี state ไม่มี logic มีแค่การเรียกใช้ Container
  return <TodoAppContainer />;
}

export default App;
