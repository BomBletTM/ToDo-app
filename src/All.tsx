import { type FC } from "react";
import { TodoInput } from "./TodoInput";
import type { Task } from "./TodoInput";
import { TaskList } from "./TaskList";

export type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const All: FC<Props> = ({ tasks, setTasks }) => {
  const handleAddTask = (task: Task): void => {
    setTasks((prev) => [task, ...prev]);
  };

  return (
    <>
      <div className="flex flex-col gap-4 px-4 py-2 overflow-y-auto">
        <div className="w-full">
          <TodoInput onAddTask={handleAddTask} />
        </div>
      </div>
      <div>
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
};
