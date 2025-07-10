import type { FC } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export type Task = {
  id: string | number;
  text: string;
  status: "active" | "completed";
};

export const TodoInput: FC<{ onAddTask: (task: Task) => void }> = ({
  onAddTask,
}) => {
  const [newTask, setNewTask] = useState("");

  return (
    <>
      <input
        className="rounded text-2xl placeholder-white px-3 py-1.5 bg-[#10172a]/20 border border-[#10172a] focus:border-white outline-none focus:ring-1 focus:ring-white
        "
        type="text"
        value={newTask}
        placeholder="What needs to be done?"
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (newTask.trim() === "") return;
            onAddTask({
              id: uuidv4(),
              text: newTask,
              status: "active",
            });
            setNewTask("");
          }
        }}
      />
    </>
  );
};
