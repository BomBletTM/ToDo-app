import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { TaskList } from "../TaskList";
import type { Task } from "../TodoInput";

describe("TaskList", () => {
  const sampleTasks: Task[] = [
    { id: 1, text: "Learn React", status: "active" },
    { id: 2, text: "Write tests", status: "completed" },
  ];

  it("displays a list of tasks", () => {
    render(<TaskList tasks={sampleTasks} setTasks={() => {}} />);

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  it("marks a task as completed when clicked", () => {
    const mockSetTasks = vi.fn();

    render(<TaskList tasks={[sampleTasks[0]]} setTasks={mockSetTasks} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(mockSetTasks).toHaveBeenCalled();
  });
});
