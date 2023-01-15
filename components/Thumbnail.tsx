import Image from 'next/legacy/image'
import { useRecoilState } from 'recoil'
import { modalState, cardState } from '../atoms/modalAtom.'
import { Card } from '../contexts/GlobalCards'

interface Props {
  card: Card
}

function Thumbnail({ card }: Props) {
  const [currentCard, setCurrentCard] = useRecoilState(cardState)
  const [showModal, setShowModal] = useRecoilState(modalState)

  return (
    <div
      className={`relative thumbnailToclick h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
      onClick={() => {
        setCurrentCard(card)
        setShowModal(true)
      }}
    >
      <Image
        src={card.imageurl}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt=''
      />
    </div>
  )
}

export default Thumbnail
