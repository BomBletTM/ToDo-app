import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { MemoryRouter, useLocation } from "react-router-dom";
import { App } from "../App";

function CurrentPath() {
  const location = useLocation();
  return <div data-testid="current-path">{location.pathname}</div>;
}

describe("App", () => {
  it("displays navigation and task counter", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();

    expect(screen.getByText("0 tasks left")).toBeInTheDocument();

    expect(screen.queryByText("Clear completed")).toBeNull();
  });

  it("shows different content when navigating", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
        <CurrentPath />
      </MemoryRouter>
    );

    await user.click(screen.getByText("Active"));
    expect(screen.getByTestId("current-path")).toHaveTextContent("/active");

    await user.click(screen.getByText("Completed"));
    expect(screen.getByTestId("current-path")).toHaveTextContent("/completed");

    await user.click(screen.getByText("All"));
    expect(screen.getByTestId("current-path")).toHaveTextContent("/");
  });
});
