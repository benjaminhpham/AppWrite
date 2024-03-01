import { useState } from "react";
import { useTodo } from "./todoContext";

export default function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo;

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add}>
      <input
        type="text"
        placeholder="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
