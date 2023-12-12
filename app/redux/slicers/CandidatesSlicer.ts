import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  candidates: [],
}

const CandidateData = createSlice({
  name: 'newCandidate',
  initialState,
  reducers: {
    AddNewCandidate(state:any, action) {
      const newCandidate = action.payload

      if (typeof newCandidate?.length != 'undefined') {
        return {
          ...state,
          candidates: newCandidate,
        }
      } else {
        return {
          ...state,
          candidates: [...state.candidates, newCandidate],
        }
      }

    }
  }
})

export const { AddNewCandidate } = CandidateData.actions
export default CandidateData.reducer