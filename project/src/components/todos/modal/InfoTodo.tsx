// React
import { useState } from "react";

// Shadcn Components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Components
import { TodoAction } from "@/utils/types";
import { getStatusIcon } from "@/components/getIcon";
import Logo from "@/components/Logo";
import { EditTodo } from "./EditTodo";
import { DeleteTodo } from "./DeleteTodo";

// Libraries
import { Calendar } from "lucide-react";

// Custom Hooks
import { useTodo } from "@/hooks/useTodo";
import { toast } from "@/hooks/use-toast";

export const InfoTodo = ({
  task,
  state,
  description,
  date,
  id,
  isModalOpen,
  onClose,
}: TodoAction) => {
  const [isEdit, setEdit] = useState<boolean>(false);
  const [isDeleted, setisDeleted] = useState<boolean>(false);
  const { editTodo, removeTodo } = useTodo();

  return (
    <Dialog open={isModalOpen} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-[500px] dark:text-white overflow-auto">
        <DialogHeader className="flex items-center max-w-[500px] ">
          <Logo />
          <DialogTitle className="text-2xl break-words max-w-[450px] text-center">
            {task}
          </DialogTitle>
        </DialogHeader>
        <div>
          <section className="flex items-center justify-between">
            <label className="flex items-center gap-1">
              <Calendar className="size-[18px] text-gray-600" />
              <p>{date}</p>
            </label>
            <label className="flex items-center gap-1">
              {getStatusIcon(state)}
              <p>{state}</p>
            </label>
          </section>
          <p className="break-words whitespace-normal min-h-[100px] max-w-[450px] my-4">
            {description}
          </p>
        </div>

        <div className="flex justify-end gap-2">
          <Button
            onClick={() => {
              setEdit(true);
            }}
          >
            Edit
          </Button>

          <Button
            variant="destructive"
            onClick={() => {
              setisDeleted(true);
            }}
          >
            Delete
          </Button>
        </div>

        <EditTodo
          task={task}
          date={date}
          description={description}
          id={id}
          state={state}
          isModalOpen={isEdit}
          onClose={() => setEdit(false)}
          actions={(todo) => {
            editTodo(todo);
            setEdit(false);
            toast({
              title: "Success editing task",
              variant: "default",
              duration: 2000,
              className: "bg-green-500 text-white",
            });
          }}
        />

        <DeleteTodo
          id={id}
          isModalOpen={isDeleted}
          onClose={() => setisDeleted(false)}
          actions={(todo_id) => {
            removeTodo(todo_id);
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
