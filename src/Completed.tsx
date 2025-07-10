import type { FC } from "react";
import type { Props } from "./All";
import { TaskList } from "./TaskList";

export const Completed: FC<Props> = ({ tasks, setTasks }) => {
  const filteredTasks = tasks.filter((t) => t.status === "completed");

  return (
    <>
      <div>
        <TaskList tasks={filteredTasks} setTasks={setTasks} />
      </div>
    </>
  );
};
