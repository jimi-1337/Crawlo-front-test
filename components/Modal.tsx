import {
    CheckIcon,
    PlusIcon,
    ThumbDownIcon,
    ThumbUpIcon,
    TrashIcon,
    VolumeOffIcon,
    VolumeUpIcon,
    XIcon,
  } from '@heroicons/react/outline'
import MuiModal from '@mui/material/Modal'
import { FaPlay } from 'react-icons/fa';
import { useRecoilState } from 'recoil'
import { modalState, cardList, cardState } from '../atoms/modalAtom.'
import ReactPlayer from 'react-player/lazy'
import { useEffect, useState } from 'react';
import { Card, useAuth } from '../contexts/GlobalCards';
import Image from 'next/legacy/image';



function Modal() {
  const { cards, setCards } = useAuth();
  const [card, setCard] = useRecoilState(cardState);
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [list, setList] = useRecoilState(cardList)
  const [muted, setMuted] = useState(true)
  const [addedToList, setAddedToList] = useState(false)

//   const DeleteCard = () => {
//     const index = cards.findIndex((result) => result.id === card?.id);
//     let arr = JSON.parse(JSON.stringify(cards));
//     arr.splice(index, 1);
//     handleClose();
//     removeFromList();
//     setCards(arr);
//   }

  const addToList = () => {
    let arr : Card[] = [];
    if (list)
    {
        arr = JSON.parse(JSON.stringify(list));
        if (card)
            arr.push(card);
        setList(arr);
    }
    else
    {
        if (card)
            arr.push(card)
        setList(arr);
    }
  }

  const removeFromList = () => {
    let index = -1;
    if (list)
    {
        index = list.findIndex((result) => result.id === card?.id);
        let arr = JSON.parse(JSON.stringify(list));
        if (index !== -1)
            arr.splice(index, 1);
        setList(arr);
    }
  }

//   const like = () => {
//     const index = cards.findIndex((result) => result.id === card?.id);
//     let arr = JSON.parse(JSON.stringify(cards));
//     if(arr[index].disliked) {
//         arr[index].dislikes--;
//         arr[index].disliked = false;
//         arr[index].liked = true;
//         arr[index].likes++;
//         setCard(arr[index]);
//         setCards(arr);
//     }
//     else if (!arr[index].liked)
//     {
//         arr[index].likes++;
//         arr[index].liked = true;
//         setCard(arr[index]);
//         setCards(arr);
//     }
//     else {
//         arr[index].likes--;
//         arr[index].liked = false;
//         setCard(arr[index]);
//         setCards(arr);
//     }
//   }

//   const dislike = () => {
//     const index = cards.findIndex((result) => result.id === card?.id);
//     let arr = JSON.parse(JSON.stringify(cards));
//     if (arr[index].liked)
//     {
//         arr[index].dislikes++;
//         arr[index].likes--;
//         arr[index].liked = false;
//         arr[index].disliked = true;
//         setCard(arr[index]);
//         setCards(arr);
//     }
//     else if (arr[index].disliked) {
//         arr[index].dislikes--;
//         arr[index].disliked = false;
//         setCard(arr[index]);
//         setCards(arr);
//     }
//     else {
//         arr[index].dislikes++;
//         arr[index].disliked = true;
//         setCard(arr[index]);
//         setCards(arr);       
//     }
//   }

  const handleClose = () => {
    setShowModal(false)
    setCard(null)
  }

  // Check if the card is already in the user's list
  useEffect(
      () => {
          if (list) {
            setAddedToList(
                list.findIndex((result) => result.id === card?.id) != -1
            )
        }
    },
    [list]
  )

    return (
        <MuiModal
        open={showModal}
        onClose={handleClose}
        className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
        >
            <>
                <button
                    className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
                    onClick={handleClose}
                >
                    <XIcon className="h-6 w-6" />
                </button>
                <div className="relative pt-[56.25%]">
                    {
                        card 
                        && 
                        <Image
                            layout="fill"
                            src={card.imageurl}
                            objectFit="cover"
                            style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                        />
                    }
                    <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
                        <div className="flex space-x-2">
                        <button className="modalButton">
                        {addedToList ? (
                                <CheckIcon className="h-7 w-7" onClick={removeFromList}/>
                            ) : (
                            <PlusIcon className="h-7 w-7" onClick={addToList} />
                        )}
                        </button>
                        </div>
                        <button className="modalButton">
                            <TrashIcon className="h-6 w-6" />
                        </button>
                    </div>
                </div>
                <div className='rounded-b-md bg-[#181818] px-10 py-8'>
                    <div className="flex space-x-16 ">
                        <div className="space-y-6 text-lg">
                            <div className="flex items-center space-x-2 text-sm">
                                <p className="font-semibold text-green-400">
                                    {card?.name}
                                </p>
                                <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                                    {card?.brand}
                                </div>
                            </div>
                            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
                                <p className="w-5/6">{`Price : ${card?.price} $`}</p>
                                <div className="flex flex-col space-y-3 text-sm">

                                    <div className='whitespace-nowrap' >
                                    <span className="text-[gray]">Availability :</span>{' '}
                                    <span id="numlike">{card?.availability}</span>
                                    </div>

                                    <div className='whitespace-nowrap'>
                                    <span className="text-[gray]">Delivery time :</span>{' '}
                                    <span id="numdislike">
                                        {`${card?.deliveryTime} Days`}
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <th className='tableth'>Specifications</th>
                            <th className='tableth'></th>
                        </thead>
                        <tbody>
                            {
                                card?.specifications.map(function(elem) {
                                    return (
                                        <tr>
                                            <td className='tabletd'>{elem.key}</td>
                                            <td className='tabletd'>{elem.value}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </>

        </MuiModal>
    )
}

export default Modal