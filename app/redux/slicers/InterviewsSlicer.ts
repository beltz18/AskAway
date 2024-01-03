import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  interviews: []
}

const InterviewsData = createSlice({
  name: 'InterviewsData',
  initialState,
  reducers: {
    SetInterviews: (state: any, action) => {
      return {
        ...state,
        interviews: [...action.payload]
      }
    },
    AddNewInterview: (state: any, action) => {
      return {
        ...state,
        interviews: [...state.interviews, action.payload]
      }
    }
  }
})

export const { SetInterviews, AddNewInterview } = InterviewsData.actions
export default InterviewsData.reducer