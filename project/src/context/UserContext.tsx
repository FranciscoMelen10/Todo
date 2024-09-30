"use client"
import { User } from "@/utils/types";
import { createContext, useState } from "react";

interface UserContextType {
  user: User | undefined;
  addUser: (user: User) => void;
  removeUser: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const addUser = (user:User) => {
    setUser(user);
  }

  const removeUser = () => {
    setUser(undefined);
  }

  return (
    <UserContext.Provider value={{ user, addUser, removeUser }}>{children}</UserContext.Provider>
  );
};
