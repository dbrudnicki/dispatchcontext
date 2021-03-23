import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
import { useDispatchContext } from '../DispatchContext/useDispatchContext'

export const Right = () => {
  const [state, dispatch] = useDispatchContext()

  return (
    <div className="Right">
      <FormGroup>
        <Label for="hex">Hex Value</Label>
        <Input
          id="hex"
          type="text"
          autoFocus
          value={state.hex}
          onChange={(e) =>
            dispatch({ field: 'hex', value: e.currentTarget.value })
          }
        />
      </FormGroup>
    </div>
  )
}
