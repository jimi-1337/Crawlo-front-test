import { atom } from 'recoil'
import { Card } from '../contexts/GlobalCards'

export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const cardState = atom<Card | null>({
  key: 'cardState',
  default: null,
})

export const cardList = atom<Card[] | null>({
  key: 'cardList',
  default: null,
})

export const category = atom<string[]>({
  key: 'category',
  default: [],
})

export const selectedCat = atom<String[]>({
  key: 'selectedCat',
  default: [],
})

export const Categories = atom<any>({
  key: 'Categories',
  default: null,
})

export const Token = atom<string | null>({
  key: 'Token',
  default: null,
})
