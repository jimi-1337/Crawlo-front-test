import { StaticImageData } from "next/legacy/image";
import { createContext, useContext, ReactNode, useState } from "react";
import { values } from "./Card"


type Cards = {
    cards: Card[];
    setCards: (vals?: Card[]) => void;
};

export type Card = {
  id: string,
  name: string;
  url: string;
  imageurl: string;
  brand: string;
  specifications: specifics[];
  deliveryTime: string;
  price: string;
  availability: string;
};

type specifics = {
  key: string;
  value: string
};

async function example() {
  const result = await Promise.resolve(values);
  return result;
}

const GlobalCards: Cards = {
    cards: [],
    setCards: () => {},
};

const AuthContext = createContext<Cards>(GlobalCards);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

const getCards = async () => {
  const body = {
    "username": "test4@mail.com",
    "password": "test"
  }
  try {
      const res = await fetch(
          `http://localhost:5000/cards`,
          {
            method: 'GET',
          }
      );
      const data = await res.json();
      // console.log(data);
      return data;
  } catch (err) {
      return err;
  }
};

export function AuthProvider({ children }: Props) {
  const [cards, setcards] = useState<Card[]>([]);

  const setCards = (vals: Card[] = []) => {
    
    if(vals.length == 0){
      getCards().then( data => {
        setcards(data);
      }
      );
    }
  };

  const value = {
      cards,
      setCards
  };

  return (
      <>
          <AuthContext.Provider value={value}>
              {children}
          </AuthContext.Provider>
      </>
  );
}


