import { useContext } from 'react'
import { InnerContext } from './DispatchContext'

export const useDispatchContext = () => {
  return useContext(InnerContext)
}
