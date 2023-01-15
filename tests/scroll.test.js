import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { RecoilRoot } from "recoil";
import Row from "../components/Row";
import { AuthProvider } from "../contexts/GlobalCards";
import img1 from "../images/1.jpg";


describe("scroll", () => {  
    const list = [
        {
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
    ];

    it("renders a Row", () => {
      render(
          <RecoilRoot>
            <AuthProvider>
                <Row itle="My List" cards={list} />
            </AuthProvider>
        </RecoilRoot>
      );
      // check if all components are rendered
      expect(screen.getByTestId("leftIcon")).toBeInTheDocument();
      expect(screen.getByTestId("Thumbnails")).toBeInTheDocument();
      expect(screen.getByTestId("rightIcon")).toBeInTheDocument();
    });
    it("click leftIcon", async () => {
      render(
        <RecoilRoot>
          <AuthProvider>
              <Row itle="My List" cards={list} />
          </AuthProvider>
        </RecoilRoot>
      );
        // // check if adds properly
        window.HTMLElement.prototype.scrollTo = function() {};
        const leftIconB = screen.getByTestId("leftIcon")
        await act(() => {
              leftIconB.click();
            }
        )
    });
    it("click rightIcon", async () => {
      render(
        <RecoilRoot>
          <AuthProvider>
              <Row itle="My List" cards={list} />
          </AuthProvider>
        </RecoilRoot>
      );
        // // check if adds properly
        window.HTMLElement.prototype.scrollTo = function() {};
        const rightIconB = screen.getByTestId("rightIcon")
        await act(() => {
              rightIconB.click();
            }
        )
    });
});