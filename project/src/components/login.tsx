"use client";

// React and Next
import * as React from "react";

// Components
import Input from "./Input";
import Register from "./register";

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

// Libraries
import { useFormik } from "formik";
import { useTransitionRouter } from "next-view-transitions";

// Types
import { UserValidation } from "@/utils/types";

// Utils
import validateEmailAndPassword from "@/utils/validations";
export default function Login() {
  const router = useTransitionRouter();

  const formik = useFormik<UserValidation>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      if (validateEmailAndPassword(values)) {
        console.log(values);
        router.push("/Home");
      }
    },
  });

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
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
              <Register>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="bg-blue-600 dark:bg-blue-600 text-white dark:text-white hover:bg-blue-500">
                    Create a user
                  </Button>
                </DialogTrigger>
              </Register>
              <Button type="submit">Confirm</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
