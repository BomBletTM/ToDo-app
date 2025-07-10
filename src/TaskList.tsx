import type { FC } from "react";
import type { Props } from "./All";
import { motion } from "framer-motion";

export const TaskList: FC<Props> = ({ tasks, setTasks }) => {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <motion.li
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            key={task.id}
            className="flex items-center gap-4 border-b shadow border-gray-200 bg-white/60 py-3 w-90 max-w-md text-2xl leading-snug rounded-xl"
          >
            <div
              className={`flex items-center gap-4 px-4 w-full flex-shrink-0
    ${
      task.status === "completed" ? "line-through text-black/30" : "text-black"
    } 
  `}
            >
              <label className="relative flex items-center cursor-pointer">
                <input
                  className="sr-only peer"
                  type="checkbox"
                  checked={task.status === "completed"}
                  onChange={() => {
                    setTasks((prevTasks) =>
                      prevTasks.map((t) =>
                        t.id === task.id
                          ? {
                              ...t,
                              status:
                                t.status === "active" ? "completed" : "active",
                            }
                          : t
                      )
                    );
                  }}
                />
                <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center peer-checked:border-black/30 peer-checked:text-green-600 text-transparent transition-colors duration-150 flex-shrink-0">
                  <svg
                    className="w-5 h-h"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </label>

              <span className="break-words whitespace-pre-wrap w-full text-wrap overflow-hidden">
                {task.text}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
};
