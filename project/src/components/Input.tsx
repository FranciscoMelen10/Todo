import { InputProps } from "@/types";

export default function Input({
  type = "text",
  name = "",
  handleChange,
  value = "",
  id = "",
  onBlur,
}: InputProps) {
  return (
    <label className="flex flex-col gap-1">
      <span className="font-light">{name}</span>
      <input
        className="bg-transparent border-[1px] dark:border-white rounded-md p-1"
        id={id}
        type={type}
        onChange={handleChange}
        value={value}
        onBlur={onBlur}
      />
    </label>
  );
}
