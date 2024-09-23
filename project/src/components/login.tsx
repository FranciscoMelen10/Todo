"use client";

// React and Next
import * as React from "react";

// Components 
import Input from "./Input";
import Link from "next/link";

// Components Shadcn
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Hooks
import { useRouter } from "next/navigation";

// Libraries
import { useFormik } from "formik";

// Types
import { User } from "@/types";

export default function Login() {
  const { toast } = useToast();
  const router = useRouter();

  type UserValidation = Pick<User, "email" | "password">;

  const formik = useFormik<UserValidation>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // Validación de email
      if (!values.email) {
        toast({
          title: "Email is required",
          variant: "destructive",
          duration: 2000,
        });
        return;
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        toast({
          title: "Invalid email address",
          variant: "destructive",
          duration: 2000,
        });
        return;
      }

      // Validación de password
      if (!values.password) {
        toast({
          title: "Password is required",
          variant: "destructive",
          duration: 2000,
        });
        return;
      } else if (values.password.length < 8) {
        toast({
          title: "Password must be at least 8 characters long",
          variant: "destructive",
          duration: 2000,
        });
        return;
      }
      router.push("/Home");
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
                type="email"
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <Input
                name="Password"
                id="password"
                type="password"
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <Link
                href="/register"
                className="text-sm text-blue-600 dark:text-blue-400"
              >
                Register a user
              </Link>
              <Button type="submit">Deploy</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
