import React, { useReducer } from 'react'

export const InnerContext = React.createContext(null)

interface Props {
  reducerFn: (state: any, action: any) => any
  initialState: any
}

export const DispatchContext: React.FC<Props> = ({
  reducerFn,
  initialState,
  children,
}) => {
  const tuple = useReducer(reducerFn, initialState)
  return <InnerContext.Provider value={tuple}>{children}</InnerContext.Provider>
}
