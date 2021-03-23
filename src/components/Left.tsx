import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
import { useDispatchContext } from '../DispatchContext/useDispatchContext'

export const Left = () => {
  const [state, dispatch] = useDispatchContext()

  return (
    <div className="Left">
      <FormGroup>
        <Label for="color">Color</Label>
        <Input
          id="color"
          type="text"
          autoFocus
          value={state.color}
          onChange={(e) =>
            dispatch({ field: 'color', value: e.currentTarget.value })
          }
        />
      </FormGroup>
    </div>
  )
}
