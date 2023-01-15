import { SearchIcon } from "@heroicons/react/outline";
import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/GlobalCards";



const Search = () => {
    const { handleSubmit, register } = useForm({mode: 'onChange'});
    const refOne = useRef<HTMLFormElement>(null);
    const refTwo = useRef(null);
    const [selectedItemList, setSelectedItemList] = useState<String[] | null>();
    // const [selectedItemList, setSelectedItemList] = useState<String[]>();
    const { cards, setCards } = useAuth();
    const handleClickOutside = (e : any) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
          setSelectedItemList(null);
        }
    }
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
    }, [])

    const handleRegistration = (data: any) => {
        let tmp: string[] = [];
        cards.map((result) => {
          if (data.Card) {
            if (result.name.toLowerCase().includes(data.Card.toLowerCase())) {
              tmp.push(result.name);
            }
          }
        })
        if(tmp.length == 0)
        {
          tmp.push("No Result ...");
        }
        setSelectedItemList(tmp);
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleRegistration)} className="relative w-full" data-testid="form-search" ref={refOne}>
                <input {...register('Card')} type="text" id="search-dropdown" data-testid="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-transparent rounded-r-lg border-l-transparent border-l-2 border border-transparent focus:border-transparent dark:bg-transparent dark:border-l-transparent  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search ..." required/>
                <button data-testid="button-dropdown" type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white rounded-r-lg focus:ring-4 focus:outline-none">
                    <SearchIcon className="sm hidden w-5 h-5 sm:inline" />
                </button>
            </form>
            {
                selectedItemList 
                
                &&
                  <>
                    <div  id="dropdownsearch" data-testid="dropdownsearch"  className="z-10 bg-white divide-y divide-gray-100 rounded shadow w-48 dark:bg-transparent bg-transparent" style={{position: "absolute", margin: "2.5rem 0px 0px 0px", right: '2.6rem', height: '12rem', overflowY: 'scroll'}}>
                      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 bg-transparent w-48">
                        {
                          selectedItemList.map((result, index) => {
                              return (
                                  <li key={index} className="w-full px-4 py-2 dark:hover:bg-red-500 dark:hover:text-white bg-transparent">{result}</li>
                              )
                          })
                        }
                      </ul>
                    </div>
                  </>

              }
        </>
    )
}

export default Search;