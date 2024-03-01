import { useEffect, useState } from "react";
import { TodoProvider } from "./todoContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, todo } : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <h1>Todo App</h1>
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </TodoProvider>
  );
}
