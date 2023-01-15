import Head from 'next/head'
import { useEffect } from 'react';
import Banner from '../components/Banner'
import Header from '../components/Header'
import Modal from '../components/Modal'
import { useRecoilState, useRecoilValue } from 'recoil'
import Row from '../components/Row'
import { useAuth } from '../contexts/GlobalCards';
import { Categories, category, modalState, cardList, cardState, selectedCat, Token } from '../atoms/modalAtom.'
import { RotatingLines } from 'react-loader-spinner';
import { Card } from '../contexts/Card';
import axios from 'axios';

const Home = () => {
  const { cards, setCards } = useAuth();
  const showModal = useRecoilValue(modalState);
  const [list, setList] = useRecoilState(cardList)
  const [Category, setCategory] = useRecoilState(category)
  const [selectedcat, setselectedCat] = useRecoilState(selectedCat);
  const [categories, setCategories] = useRecoilState(Categories);
  const [token, setToken] = useRecoilState(Token);



  useEffect(() => {
      if (cards.length == 0) {
        setCards();
      }
      else
      {
        {
          let arr : string[] = [];
          cards.map((result) => {
            if (!arr.includes(result.brand))
              arr.push(result.brand);
          })
          setCategory(arr);
        }
  
        {
          if (selectedcat.length == 0) {
            let obj : any = {}
            for (const k of cards) {
              if (k.brand in obj)
                obj[k.brand as keyof typeof obj].push(k);
              else
              {
                obj[k.brand] = [];
                obj[k.brand].push(k);
              }
            }
            setCategories(obj);
          }
          else {
            let obj : any = {}
            for (const k of cards) {
              if (selectedcat.includes(k.brand)) {
                if (k.brand in obj)
                  obj[k.brand as keyof typeof obj].push(k);
                else
                {
                  obj[k.brand] = [];
                  obj[k.brand].push(k);
                }
              }
            }
            setCategories(obj);          
          }
        }
      }
  } , [cards, selectedcat])


  return (
    // ${
    //   showModal && '!h-screen overflow-hidden'
    // }
    <div
      className={`relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh] `}
    >
      <Head>
        <title>
          Home - Crawlo
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {
        cards.length == 0 ? 
        <div className="grid h-screen place-items-center">
          <RotatingLines
            strokeColor="red"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div> : 
        <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16 ">
        <Banner netflixOriginals={cards} />

        <section className="md:space-y-24">
          {list && list.length > 0 && <Row title="My List" cards={list} />}
          {
            categories 
            
            &&

            Object.keys(categories).map(function(key, index) {
              return <Row title={key} cards={categories[key]} />
            })
          }
        </section>
      </main>
      }
      {showModal && <Modal />}
    </div>
  )
}

export default Home

