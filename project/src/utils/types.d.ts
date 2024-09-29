export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  handleTheme: () => void;
};

export type InputProps = {
  name: string;
  id: string;
  value: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  inputType?: "text" | "password" | "textarea";
};

export type State = "completed" | "in progress" | "canceled";

export interface Todo {
  id: number;
  task: string;
  description: string;
  state: State;
  date: string;
}

export interface TodoAction extends Todo {
  isModalOpen: boolean;
  onClose: () => void;
  actions: (todo: any) => void | undefined;
}

export interface User {
  user_id: number;
  email: string;
  password: string;
  todos: Todo[];
}

export type UserValidation = Pick<User, "email" | "password">;
