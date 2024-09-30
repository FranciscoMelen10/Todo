// Shadcn Components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Components
import Input from "@/components/Input";
import Logo from "@/components/Logo";

// Types
import { TodoAction, Todo } from "@/utils/types";

// Libraries
import { useFormik } from "formik";
import { validateTodo } from "@/utils/validations";

type CreateTodoProps = Omit<TodoAction, "task" | "state" | "description" | "date" | "id">;

export const CreateTodo = ({
  isModalOpen,
  onClose,
  actions,
}: CreateTodoProps) => {
  const today = new Date();

  //Format date to yyyy-mm-dd
  const currentDate = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const formik = useFormik<Todo>({
    initialValues: {
      task: "",
      description: "",
      date: currentDate,
      state: "in progress",
      id: 0,
    },
    onSubmit: (values) => {
      if (validateTodo(values)) {
        actions(values);

        // Clear form
        values.task = "";
        values.description = "";
      }
    },
  });

  return (
    <Dialog open={isModalOpen} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-[500px] dark:text-white gap-5">
        <DialogHeader className="flex justify-center items-center gap-2">
          <Logo />
          <DialogTitle>Create a new Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <Input
              name="Task"
              id="task"
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.task}
            />
            <Input
              name="Description"
              id="description"
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              inputType="textarea"
            />
            <Button type="submit">Create task</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
