import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import img8 from "../images/8.jpg";
import img9 from "../images/9.jpg";
import { StaticImageData } from "next/legacy/image";


export type Card = {
    id: string,
    title: string,
    category: string,
    thumbnail: StaticImageData,
    likes: number,
    dislikes: number,
    trailer: string,
    liked: boolean,
    disliked: boolean
};

const movies: Card[] = [];

export const values = new Promise<Card[]>(resolve => setTimeout(resolve, 1000, movies))