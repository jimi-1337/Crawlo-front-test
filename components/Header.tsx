import Image from 'next/legacy/image'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
// import useAuth from '../hooks/useAuth'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import BasicMenu from './BasicMenu'
import { useRecoilState } from 'recoil'
import { category, cardState, selectedCat } from '../atoms/modalAtom.'
import { useForm } from 'react-hook-form'
import { useAuth } from '../contexts/GlobalCards'
import Search from './Search'
import DropDown from './dropDown'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [dropDown, setdropDown] = useState(false);
  const [Category, setCategory] = useRecoilState(category)
  const [selectedcat, setselectedCat] = useRecoilState(selectedCat)
  const refTwo = useRef(null);


  const SDropDown = () => {
    setdropDown(!dropDown);
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = event.currentTarget.selectedOptions;

    const newColors = [];
    for (let i = 0; i < selectedOptions.length; i++) {
      newColors.push(selectedOptions[i].value);
    }
    setselectedCat(newColors);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <div
          className="cursor-pointer object-contain text-2xl text-primary"
        >Crawlo</div>

        <BasicMenu />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink text-xl cursor-default font-semibold text-white hover:text-white">
            Home
          </li>
          {/* <li className="headerLink">TV Shows</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li> */}
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">



      <section>
          <div className="flex">
              <DropDown />
              <Search />
          </div>
      </section>



        {/* <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link> */}
      </div>
    </header>
  )
}

export default Header
