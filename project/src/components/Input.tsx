"use client";
import { InputProps } from "@/utils/types";
import { useState } from "react";

export default function Input({
  name = "",
  handleChange,
  value = "",
  id = "",
  onBlur,
  inputType = "text",
}: InputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <span className="text-sm">{name}</span>
      <label className="flex justify-between gap-1 border-[1px] dark:border-white rounded-md p-1">
        {inputType === "textarea" ? (
          <textarea
            className="bg-transparent border-none w-full dark:text-white focus:outline-none h-[100px]"
            id={id}
            onChange={handleChange}
            value={value}
            onBlur={onBlur}
          />
        ) : (
          <input
            className="bg-transparent border-none w-full dark:text-white focus:outline-none"
            id={id}
            type={
              inputType === "password" && showPassword ? "password" : "text"
            }
            onChange={handleChange}
            value={value}
            onBlur={onBlur}
          />
        )}

        {inputType === "password" &&
          (!showPassword ? (
            <svg
              onClick={togglePassword}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-eye stroke-black dark:stroke-white"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
            </svg>
          ) : (
            <svg
              onClick={togglePassword}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-eye-off stroke-black dark:stroke-white"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
              <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
              <path d="M3 3l18 18" />
            </svg>
          ))}
      </label>
    </div>
  );
}
