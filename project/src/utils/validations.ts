import { toast } from "@/hooks/use-toast";
import { Todo, UserValidation } from "./types";

export default function validateEmailAndPassword({
  email,
  password,
}: UserValidation) {
  if (!email && !password) {
    toast({
      title: "Email and Password are required",
      variant: "destructive",
      duration: 2000,
    });
    return;
  }

  if (!email) {
    toast({
      title: "Email is required",
      variant: "destructive",
      duration: 2000,
    });
    return;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    toast({
      title: "Invalid email address",
      variant: "destructive",
      duration: 2000,
    });
    return;
  }

  // Validación de password
  if (!password) {
    toast({
      title: "Password is required",
      variant: "destructive",
      duration: 2000,
    });
    return;
  } else if (password.length < 8) {
    toast({
      title: "Password must be at least 8 characters long",
      variant: "destructive",
      duration: 2000,
    });
    return;
  }
  return true;
}

export function validateCreateTodo({ task, description }: Omit<Todo, "id">) {
  if (!task && !description) {
    toast({
      title: "Task and Description are required",
      variant: "destructive",
      duration: 2000,
    });
    return;
  }

  if (!task) {
    toast({
      title: "Task is required",
      variant: "destructive",
      duration: 2000,
    });
    return;
  }

  if (!description) {
    toast({
      title: "Description is required",
      variant: "destructive",
      duration: 2000,
    });
    return;
  }

  if (task.length > 100) {
    toast({
      title: "Task must be less than 100 characters",
      variant: "destructive",
      duration: 2000,
    });
    return;
  }

  if (description.length > 500) {
    toast({
      title: "Description must be less than 500 characters",
      variant: "destructive",
      duration: 2000,
    });
    return;
  }

  return true;
}
