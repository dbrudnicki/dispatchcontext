import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { DispatchContext } from './DispatchContext'

import './style.scss'

const initialState = { color: '', hex: '' }

function reducer(state, action) {
  return { ...state, [action.field]: action.value }
}

render(
  <DispatchContext reducerFn={reducer} initialState={initialState}>
    <App />
  </DispatchContext>,
  document.getElementById('root')
)
