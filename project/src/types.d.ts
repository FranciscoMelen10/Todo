export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  handleTheme: () => void;
};

export type InputProps = {
  name: string;
  type: string;
  id: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
};

export interface Todo {
  id: number;
  task: string;
  description: string;
  completed: "completed" | "in progress" | "not completed" | "canceled";
  date: string;
}

export interface User {
  user_id: number;
  email: string;
  password: string;
  todos: Todo[];
}
