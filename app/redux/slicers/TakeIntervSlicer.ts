import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  question: 0,
  finished: false,
}

const TakeInterviewData = createSlice({
  name: 'TakingInterviewData',
  initialState,
  reducers: {
    NextQuestion: (state: any, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
    FinishInterview: () => {
      return initialState
    }
  }
})

export const { NextQuestion, FinishInterview } = TakeInterviewData.actions
export default TakeInterviewData.reducer