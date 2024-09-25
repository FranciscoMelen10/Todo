import { toast } from "@/hooks/use-toast";
import { UserValidation } from "./types";

export default function validateEmailAndPassword({
  email,
  password,
}: UserValidation) {
  // Validación de email
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
