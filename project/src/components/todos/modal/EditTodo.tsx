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

// Formik
import { useFormik } from "formik";

// Types
import { TodoAction } from "@/utils/types";
import { validateEditTodo } from "@/utils/validations";

export const EditTodo = ({
  task,
  state,
  description,
  date,
  id,
  isModalOpen,
  onClose,
  actions,
}: TodoAction) => {
  const formik = useFormik({
    initialValues: {
      task: task,
      description: description,
      state: state,
      date: date,
      id: id,
    },
    onSubmit: (values) => {
      if (validateEditTodo(values)) {
        actions(values);
      }
    },
  });

  return (
    <Dialog open={isModalOpen} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-[500px] dark:text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl">Edit Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-4 text-sm">
            <Input
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.task}
              id="task"
              name="Task"
            />

            <Input
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              id="description"
              name="Description"
              inputType="textarea"
            />

            <label>
              Date
              <input
                id="date"
                name="date"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date}
                className="w-full border p-2 rounded"
              />
            </label>

            <label>
              State
              <input
                id="state"
                name="state"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.state}
                className="w-full border p-2 rounded"
              />
            </label>

            <div className="flex justify-end">
              <Button type="submit">Save</Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
