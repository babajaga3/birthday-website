import { useContext } from 'react'
import { BirthdayContext } from '../contexts'


export function useBirthday() {
  const context = useContext(BirthdayContext)
  if (!context) throw new Error('The useBirthday() hook was used outside of the BirthdayContextProvider.')
  return context
}