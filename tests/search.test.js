import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Search from "../components/Search";

describe("Search", () => {
    it("renders a Search", () => {
      render(<Search />);
      // check if all components are rendered
      expect(screen.getByTestId("form-search")).toBeInTheDocument();
    });
    it("enter input", async () => {
        render(<Search />);
        // check if adds properly
        const searchinput = screen.getByTestId("search-dropdown");
        const addButton = screen.getByTestId("button-dropdown");
        fireEvent.change(searchinput, { target: { value: "asus" } });
        await act(() => {
                addButton.click();
            }
        )
        expect(screen.getByTestId("dropdownsearch")).toBeInTheDocument();
    });
});