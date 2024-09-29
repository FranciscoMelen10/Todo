// Shadcn Components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Types
import { TodoAction } from "@/utils/types";

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
  return (
    <Dialog open={isModalOpen} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-[500px] dark:text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl">{task}</DialogTitle>
        </DialogHeader>
        <div>

            <label className="flex items-center gap-1">
                <p>{date}</p>
            </label>
            <label className="flex items-center gap-1">
                <p>{state}</p>
            </label>
            <p className="break-words whitespace-normal min-h-[100px] my-4">
                {description}
            </p>
        </div>
        <div className="flex justify-end">
          <Button
            onClick={() => {
              actions(id); // Aquí llamamos a actions con el id
              onClose();
            }}
          >
            Edit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
