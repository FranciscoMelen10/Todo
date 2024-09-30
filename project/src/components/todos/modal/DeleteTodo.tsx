// Shadcn Components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

// Types
import { TodoAction } from "@/utils/types";

type TodoActionDelete = Omit<TodoAction, "task" | "description" | "date" | "state"> & {
  id: number; 
  actions: (id: number) => void; 
}

export const DeleteTodo = ({
  isModalOpen,
  onClose,
  actions,
  id,
}: TodoActionDelete) => {
  return (
    <Dialog open={isModalOpen} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-[400px] dark:text-white flex justify-center items-center flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Do you want to delete this task?
          </DialogTitle>
        </DialogHeader>
        <div className="flex gap-4">
          <Button
            variant="destructive"
            onClick={() => {
              actions(id); // Aquí llamamos a actions con el id
              onClose();
              toast({
                title: "Removing task",
                variant: "destructive",
                duration: 2000,
              });
            }}
          >
            Delete
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
