import React, { useState, useRef, useCallback } from "react";
import TodoMain from "./components/TodoMain";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "방울이랑 놀아주기",
      checked: false,
    },
    {
      id: 2,
      text: "교수님과 즐겁고 행복하게 졸업작품 만들기",
      checked: true,
    },
    {
      id: 3,
      text: "로또 1등 당첨되기",
      checked: false,
    },
  ]);

  /*props로 받아 온 todos 배열을 배열 내장 함수 map을 통해 
  TodoListItem으로 이루어진 배열로 변환하여 렌더링해 주었습니다.
  */

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback((id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  });

  return (
    <TodoMain>
      <TodoInsert />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoMain>
  );
};

export default App;
