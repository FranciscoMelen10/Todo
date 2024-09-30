import { toast } from "@/hooks/use-toast";
import { Todo, User } from "./types";

// Validación de email y password
export default function validateEmailAndPassword({ email, password }: User) {
  if (!email && !password) {
    toast({
      title: "Email and Password are required",
      variant: "destructive",
      duration: 2000,
    });
    return false;
  }

  if (!email) {
    toast({
      title: "Email is required",
      variant: "destructive",
      duration: 2000,
    });
    return false;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    toast({
      title: "Invalid email address",
      variant: "destructive",
      duration: 2000,
    });
    return false;
  }

  if (!password) {
    toast({
      title: "Password is required",
      variant: "destructive",
      duration: 2000,
    });
    return false;
  } else if (password.length < 8) {
    toast({
      title: "Password must be at least 8 characters long",
      variant: "destructive",
      duration: 2000,
    });
    return false;
  }

  return true;
}

// Validación de task y description
export function validateTodo({ task, description }: Omit<Todo, "id">) {
  if (!task && !description) {
    toast({
      title: "Task and Description are required",
      variant: "destructive",
      duration: 2000,
    });
    return false;
  }

  if (!task) {
    toast({
      title: "Task is required",
      variant: "destructive",
      duration: 2000,
    });
    return false;
  }

  if (!description) {
    toast({
      title: "Description is required",
      variant: "destructive",
      duration: 2000,
    });
    return false;
  }

  if (task.length > 100) {
    toast({
      title: "Task must be less than 100 characters",
      variant: "destructive",
      duration: 2000,
    });
    return false;
  }

  if (description.length > 500) {
    toast({
      title: "Description must be less than 500 characters",
      variant: "destructive",
      duration: 2000,
    });
    return false;
  }

  return true;
}

// Validación de todo en edición
export function validateEditTodo({ id, task, description, date, state }: Todo) {
  if (!task && !description) {
    toast({
      title: "Task and Description are required",
      variant: "destructive",
      duration: 2000,
    });
    return false;
  }

  if (!task) {
    toast({
      title: "Task is required",
      variant: "destructive",
      duration: 2000,
    });
    return false;
  }

  if (!description) {
    toast({
      title: "Description is required",
      variant: "destructive",
      duration: 2000,
    });
    return false;
  }

  if (task.length > 100) {
    toast({
      title: "Task must be less than 100 characters",
      variant: "destructive",
      duration: 2000,
    });
    return false;
  }

  if (description.length > 500) {
    toast({
      title: "Description must be less than 500 characters",
      variant: "destructive",
      duration: 2000,
    });
    return false;
  }

  if (!date) {
    toast({
      title: "Date is required",
      variant: "destructive",
      duration: 2000,
    });
    return false;
  }

  if (!state) {
    toast({
      title: "State is required",
      variant: "destructive",
      duration: 2000,
    });
    return false;
  }

  return true;
}
