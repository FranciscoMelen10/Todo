import { State, Todo } from "@/utils/types";
import { CheckCircle, Circle, XCircle } from "lucide-react";
import { useState } from "react";
import { InfoTodo } from "./modal/InfoTodo";
import { getStatusIcon } from "../getIcon";

export default function TodoItem({ task, state, description, date, id }: Todo) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <li
        className="w-full h-[50px] border-2 rounded-lg border-black hover:cursor-pointer dark:border-white dark:text-white"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <div className="flex justify-between items-center h-full px-4">
          <section className="flex gap-2">
            {getStatusIcon(state)}
            <p className="text-black dark:text-slate-100 text-sm text-ellipsis whitespace-nowrap overflow-hidden">
              {task}
            </p>
          </section>
          <p className="w-fit">{state}</p>
        </div>
      </li>

      <InfoTodo
        task={task}
        date={date}
        description={description}
        id={id}
        state={state}
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        actions={() => {}}
      />
    </>
  );
}
