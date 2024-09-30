"use client";
import { useState } from "react";
import { Search } from "lucide-react";

interface SearchProps {
  placeholder: string;
}

function SearchComponent({ placeholder }: SearchProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Buscando: " + inputValue);
    // Aquí puedes manejar la lógica de envío si es necesario
  };

  return (
    <form
      className="flex items-center py-2 px-2 border-black text-color_100 bg-[#17191A] w-full rounded-md gap-2 text-white"
      onSubmit={handleSubmit}
    >
      <button className="size-auto" type="submit">
        <Search className="stroke-orange-50" width={20} height={20} />
      </button>
      <input
        placeholder={placeholder}
        className="text-sm focus:outline-none bg-[#17191A] w-full"
        name="search"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default SearchComponent;
