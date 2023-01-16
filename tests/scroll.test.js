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
        "name": "Portátil - 90NX02M4-M00420 ASUS, 11,6 \", HD, Mediatek M8173C (4 núcleos, 1MB Caché, hasta 2.1 GHz, 64 bit), 4 GB, 32 GB, Intel UHD Graphics integrada, Android Azul",
        "url": "https://www.mediamarkt.es/es/product/_porttil-90nx02m4-m00420-asus-116--mediate-95724012.html",
        "imageurl": "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_98443836/fee_786_587_png",
        "brand": "ASUS",
        "specifications": [
          {
            "key": "Tamaño pantalla (cm/pulg):",
            "value": "33.78 cm / 13.3"
          },
          {
            "key": "Resolución",
            "value": "2560 x 1600 píxeles"
          }
        ],
        "deliveryTime": "1",
        "price": "200.52",
        "availability": "Disponible online"
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