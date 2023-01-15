import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { RecoilRoot } from "recoil";
import { category } from "../atoms/modalAtom.";
import DropDown from "../components/dropDown";
import { AuthProvider } from "../contexts/GlobalCards";

describe("DropDown", () => {
    it("check Component", async () => {
        const initializeState = async ({ set }) => {
            set(category, [
                "Comedy",
                "Animation"
            ]
            );
        };
        render(
            <RecoilRoot initializeState={initializeState}>
                <AuthProvider>
                    <DropDown />
                </AuthProvider>
            </RecoilRoot>
        );
        // check if all components are rendered
        expect(screen.getByTestId("dropdown-button")).toBeInTheDocument();
    });
    it("check DropDown", async () => {
        const initializeState = async ({ set }) => {
            set(category, [
                "Comedy",
                "Animation"
            ]
            );
        };
        render(
            <RecoilRoot initializeState={initializeState}>
                <AuthProvider>
                    <DropDown />
                </AuthProvider>
            </RecoilRoot>
        );
        // check if all components are rendered
        expect(screen.getByTestId("dropdown-button")).toBeInTheDocument();
        const button = screen.getByTestId("dropdown-button");
        await act(async () => {
            button.click();
        })
        expect(screen.getByTestId("dropdown")).toBeInTheDocument();
    });
});