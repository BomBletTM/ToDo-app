import type { FC } from "react";
import type { Props } from "./All";
import { TaskList } from "./TaskList";

export const Active: FC<Props> = ({ tasks, setTasks }) => {
  const filteredTasks = tasks.filter((t) => t.status === "active");

  return (
    <div>
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
};
