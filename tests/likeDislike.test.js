import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { modalState, cardState } from "../atoms/modalAtom.";
import Modal from "../components/Modal";
import { AuthProvider } from "../contexts/GlobalCards";
import img1 from "../images/1.jpg";


describe("Like Dislike", () => {
    it("renders a Modal", async () => {
        const initializeState = async ({ set }) => {
            set(modalState, true);
            set(cardState, {
                id: '1',
                title: 'Oceans 8',
                category: 'Comedy',
                thumbnail: img1,
                likes: 4,
                dislikes: 1,
                trailer: 'MFWF9dU5Zc0',
                liked: false,
                disliked: false,
                }
                );
        };
        render(
            <RecoilRoot initializeState={initializeState}>
                <AuthProvider>
                    <Modal />
                </AuthProvider>
            </RecoilRoot>
        );
        // check if all components are rendered
        expect(screen.getByTestId("Like")).toBeInTheDocument();
        expect(screen.getByTestId("Dislike")).toBeInTheDocument();
        const searchButton = screen.getByTestId("Like");
        // await act(() => {
        //     searchButton.click();
        // })
    });
});