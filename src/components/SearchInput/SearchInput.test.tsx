import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchInput } from "./SearchInput";

// Mocking API hook from redux service
vi.mock("../../redux/services/searchApi", () => ({
  useGetUsersQuery: (query: string, opts: any) => {
    if (opts.skip) {
      // Skip fetching if query is empty or skipped
      return { data: [], isFetching: false };
    }
    if (query === "john") {
      // Return mock user data when query is "john"
      return {
        data: [{ id: "1", name: "John Doe", email: "john@example.com" }],
        isFetching: false,
      };
    }
    // Return empty data for other queries
    return { data: [], isFetching: false };
  },
}));

// Mocking debounce hook to return value immediately without delay
vi.mock("../../hooks/useDebounce", () => ({
  useDebounce: (value: string) => value,
}));

describe("SearchInput component", () => {
  // Render component before each test
  beforeEach(() => {
    render(<SearchInput />);
  });

  it("renders input with placeholder", () => {
    // Check that input field is rendered with correct placeholder
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("displays user results when typing a valid query", async () => {
    const input = screen.getByPlaceholderText("Search...");

    // Simulate user typing "john"
    await userEvent.type(input, "john");

    // Assert that user name and email are displayed
    expect(await screen.findByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
  });

  it("shows 'Nothing found' message when no users match query", async () => {
    const input = screen.getByPlaceholderText("Search...");

    // Simulate user typing a query that returns no results
    await userEvent.type(input, "noresults");

    // Assert that 'Nothing found' message is displayed
    expect(await screen.findByText("Nothing found")).toBeInTheDocument();
  });
});
