// React
import { useContext } from "react";

// Context
import { TodoContext } from "@/context/TodoContext";

export function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used in TodoProvider");
  }
  return context;
}
