import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState, type FC } from "react";
import { All } from "./All";
import { Active } from "./Active";
import { Completed } from "./Completed";
import type { Task } from "./TodoInput";

const NavigationBar: FC = () => {
  const baseClasses =
    "pb-1 px-2 border-b-2 transition-colors duration-200 text-[#163F55]/90";
  const activeClasses = "border-gray-700 text-black font-semibold";
  const inactiveClasses = "border-transparent";

  return (
    <nav className="flex justify-center gap-10 text-lg">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
        }
      >
        All
      </NavLink>
      <NavLink
        to="/active"
        className={({ isActive }) =>
          `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
        }
      >
        Active
      </NavLink>
      <NavLink
        to="/completed"
        className={({ isActive }) =>
          `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
        }
      >
        Completed
      </NavLink>
    </nav>
  );
};

export const App: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const ClearCompleted = (): void => {
    setTasks(tasks.filter((task) => task.status !== "completed"));
  };

  const TaskCounter = () =>
    tasks.filter((task) => task.status === "active").length;

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-radial to-[#10172a] from-cyan-400">
      <div
        className="relative max-w-md w-full backdrop-blur-sm bg-white/30 border border-white/20
 rounded-xl shadow-xl hover:shadow transition-shadow duration-500 flex flex-col max-h-[70vh] overflow-hidden"
      >
        <h1 className="flex text-7xl font-semibold text-neutral-100 justify-center mt-4 mb-2">
          To Do
        </h1>

        <NavigationBar />
        <div className="flex-1 overflow-y-auto pb-24">
          <div className="flex flex-col items-center gap-4 px-4 max-w-md mx-auto">
            <Routes>
              <Route
                path="/"
                element={<All tasks={tasks} setTasks={setTasks} />}
              />
              <Route
                path="/active"
                element={<Active tasks={tasks} setTasks={setTasks} />}
              />
              <Route
                path="/completed"
                element={<Completed tasks={tasks} setTasks={setTasks} />}
              />
            </Routes>
          </div>
        </div>
        <div className="absolute bottom-0 rounded-b-xl left-0 right-0 flex justify-between items-center p-4 bg-white">
          <span className="text-[#10172a]">{TaskCounter()} tasks left</span>
          {tasks.some((task) => task.status === "completed") && (
            <button
              className="bg-cyan-400/60 py-1 px-2 rounded-4xl hover:bg-[#163F55]/90 hover:text-white transition-colors duration-300 shadow-xl"
              onClick={ClearCompleted}
            >
              Clear completed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
