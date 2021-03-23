import React from 'react'
import { DispatchContext } from '../DispatchContext'
import { useDispatchContext } from '../DispatchContext/useDispatchContext'
import { Left } from './Left'
import { Right } from './Right'

export const App = () => {
  const [state] = useDispatchContext()

  return (
    <div className="App">
      <Left />
      <Right />
      <code>{JSON.stringify(state)}</code>
    </div>
  )
}
