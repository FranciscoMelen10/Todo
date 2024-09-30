"use client";

// React
import { createContext, useState } from "react";

// Types
import { Todo } from "@/utils/types";

interface TodoContextType {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  filterTodosData: Todo[];
  setFilterTodosData: React.Dispatch<React.SetStateAction<Todo[]>>;
  addTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
  editTodo: (todo: Todo) => void;
  filterTodos: (task: string) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filterTodosData, setFilterTodosData] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (todo: Todo) => {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return todo;
      }
      return t;
    });
    setTodos(updatedTodos);
  };

  const filterTodos = (task: string) => {
    alert(task);
    const filter = todos.filter((todo) => todo.task.includes(task));
    setFilterTodosData(filter);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        removeTodo,
        editTodo,
        filterTodos,
        filterTodosData,
        setFilterTodosData,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
