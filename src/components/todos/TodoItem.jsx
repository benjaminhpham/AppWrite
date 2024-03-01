import { useState } from "react";
import { useTodo } from "./todoContext";

export default function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState("");

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const edit = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const completed = () => {
    toggleComplete(todo.id);
  };

  return (
    <div style={{ textDecoration: todo.completed ? "underline" : "none" }}>
      <input type="check" checked={todo.completed} onChange={completed} />
      <input
        type="text"
        value={todoMsg}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button
        onClick={() => {
          if (todo.completed) return;
          else if (isTodoEditable) {
            edit();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "Save" : "Edit"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}
