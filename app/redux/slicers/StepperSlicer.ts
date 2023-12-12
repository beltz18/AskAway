import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  step: 1,
}

export const Stepper = createSlice({
  name: 'step',
  initialState,
  reducers: {
    SetStep(state, action) {
      return {
        ...state,
        ...action.payload
      }
    }
  }
})

export const { SetStep } = Stepper.actions
export default Stepper.reducer