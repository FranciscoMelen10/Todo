"use client";

// React and Next
import * as React from "react";

// Components
import Input from "./Input";
import Register from "./register";
import Logo from "./Logo";

// Components Shadcn
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DialogTrigger } from "./ui/dialog";
import { toast } from "@/hooks/use-toast";

// Libraries
import { useFormik } from "formik";
import { useTransitionRouter } from "next-view-transitions";

// Types
import { User } from "@/utils/types";

// Utils
import validateEmailAndPassword from "@/utils/validations";

// Custom hooks
import { useUser } from "@/hooks/useUser";


export default function Login() {
  const { addUser } = useUser();

  const router = useTransitionRouter();

  const formik = useFormik<User>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      if (validateEmailAndPassword(values)) {
        toast({
          title: "Success login",
          variant: "default",
          duration: 2000,
          className: "bg-green-500 text-white",
        });
        addUser(values);
        router.push("/Home");
      }
    },
  });

  return (
    <div className="min-h-screen w-screen flex items-center justify-center p-5">
      <Card className="w-[350px]">
        <CardHeader className="flex items-center justify-center gap-3">
          <Logo />
          <CardTitle>To-do made by FranciscoMelen10</CardTitle>
          <CardDescription>
            This application is a todo list that allows you to create, edit, and
            delete tasks.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <Input
                name="Email"
                id="email"
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <Input
                name="Password"
                id="password"
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                inputType="password"
              />
              <Button type="submit">Log In</Button>
              <Register>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-auto text-black font-medium dark:text-white hover:underline hover:text-blue-500 hover:bg-transparent dark:hover:text-blue-500 dark:hover:bg-transparent"
                  >
                    Don't have an account? Register
                  </Button>
                </DialogTrigger>
              </Register>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
