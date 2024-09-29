"use client";

// React
import { useState } from "react";

// Components
import Logo from "@/components/Logo";
import Search from "@/components/todos/search";
import TodoItem from "@/components/todos/TodoItem";
import { CreateTodo } from "@/components/todos/modal/CreateTodo";

// Types
import { Todo } from "@/utils/types";

// Icons
import { Check, Plus } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function Home() {
  const todos: Todo[] = [
    {
      id: 1,
      task: "Complete math homework",
      description: "Solve the problems from chapter 5 in the textbook.",
      state: "completed",
      date: "2024-09-15",
    },
    {
      id: 2,
      task: "Prepare science project",
      description:
        "Order materials and make a model of the solar system for the science fair.",
      state: "in progress",
      date: "2024-09-20",
    },
    {
      id: 3,
      task: "Study for history test",
      description:
        "Review notes on World War II for the upcoming test next week.",
      state: "in progress",
      date: "2024-09-25",
    },
    {
      id: 4,
      task: "Write English essay",
      description: "Write a 500-word essay on 'The Importance of Friendship'.",
      state: "canceled",
      date: "2024-09-30",
    },
    {
      id: 5,
      task: "Finish art project",
      description: "Complete the painting for the art class presentation.",
      state: "canceled",
      date: "2024-08-30",
    },
  ];

  // Todos state
  const [AllTodos, SetAllTodos] = useState<Todo[]>(todos);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-center p-5">
      <div className="w-full flex items-center mx-auto flex-col max-w-[700px] gap-8">
        <Logo />
        <div className="flex justify-center  gap-4 w-full">
          <Search title="Search" placeholder="Search your tasks" />
          <button
            className="h-full w-full max-w-[100px] flex justify-center items-center gap-2 bg-[#0c0c0c] text-white rounded-lg px-3 dark:border-[1px] dark:border-white "
            onClick={() => {
              // Open modal
              setIsModalOpen(true);
            }}
          >
            <Plus />
            <p className="text-[10px]">Add task</p>
          </button>

          <CreateTodo
            isModalOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            actions={(data: Todo): void => {
              // Add new todo to the list
              const newTodo: Todo = {
                id: AllTodos.length + 1,
                task: data.task,
                description: data.description,
                state: data.state,
                date: data.date,
              };
              SetAllTodos([...AllTodos, newTodo]);

              // Close modal
              setIsModalOpen(false);
              toast({
                title: "Success creating task",
                variant: "default",
                duration: 2000,
                className: "bg-green-500 text-white",
              });
            }}
          />
        </div>
        <ul className="flex flex-col w-full  gap-4">
          {AllTodos.map((todo) => {
            return (
              <TodoItem
                date={todo.date}
                description={todo.description}
                state={todo.state}
                task={todo.task}
                id={todo.id}
                key={todo.id}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
