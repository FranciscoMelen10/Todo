"use client";

// React
import { useEffect, useState } from "react";

// Components
import Logo from "@/components/Logo";
import Search from "@/components/todos/search";
import TodoItem from "@/components/todos/TodoItem";
import { CreateTodo } from "@/components/todos/modal/CreateTodo";

// Shadcn Component
import { Button } from "@/components/ui/button";

// Types
import { Todo } from "@/utils/types";

// Icons
import { Plus } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Custom Hooks
import { useUser } from "@/hooks/useUser";
import { useTodo } from "@/hooks/useTodo";

// Libraries
import { useTransitionRouter } from "next-view-transitions";

export default function Home() {
  const { user } = useUser();
  const { setTodos, todos } = useTodo();

  const route = useTransitionRouter();

  const todosData: Todo[] = [
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

  useEffect(() => {
    setTodos(todosData);
  }, [setTodos]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  if (user) {
    return (
      <div className="flex justify-center p-5">
        <div className="w-full flex items-center mx-auto flex-col max-w-[700px] gap-8">
          <Logo />
          <div className="flex justify-center  gap-4 w-full">
            <Search placeholder="Search your tasks" />
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
                  id: todos.length + 1,
                  task: data.task,
                  description: data.description,
                  state: data.state,
                  date: data.date,
                };
                setTodos([...todos, newTodo]);

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
          <ul className="flex flex-col w-full gap-4">
            {todos.length > 0 ? (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  task={todo.task}
                  state={todo.state}
                  description={todo.description}
                  date={todo.date}
                  id={todo.id}
                />
              ))
            ) : (
              <p className="text-black text-xl dark:text-white text-center ">
                No tasks found
              </p>
            )}
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center flex-col gap-6 h-screen">
        <Logo />
        <p className="text-2xl dark:text-white">
          Please sign in to view your tasks.
        </p>
        <Button
          onClick={() => {
            route.push("/");
          }}
        >
          Go to Log In
        </Button>
      </div>
    );
  }
}
