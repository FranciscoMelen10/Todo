"use client";

// Components Shadcn
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Components
import Input from "./Input";

// Libraries
import { useFormik } from "formik";

// Types
import { UserValidation } from "@/utils/types";

// Utils
import validateEmailAndPassword from "@/utils/validations";

export default function Register({ children }: { children: React.ReactNode }) {

  const formik = useFormik<UserValidation>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values: UserValidation) => {
      if (validateEmailAndPassword(values)) {
        console.log(values);
      }
    },
  });

  return (
    <Dialog>
      {children}
      <DialogContent className="sm:max-w-[425px] dark:text-white">
        <DialogHeader>
          <DialogTitle>Create profile</DialogTitle>
          <DialogDescription>
            You can create a new profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <Input
              name="Email"
              id="email"
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              isPassword={false}
            />
            <Input
              name="Password"
              id="password"
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              isPassword={true}
            />
            <Button type="submit">Confirm</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
