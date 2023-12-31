import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions: []
}

const QuestionData = createSlice({
  name: 'newQuestion',
  initialState,
  reducers: {
    AddNewQuestion: (state:any, action) => {
      const newQuestion = action.payload

      if (typeof newQuestion?.length != 'undefined') {
        return {
          ...state,
          questions: newQuestion,
        }
      } else {
        return {
          ...state,
          questions: [...state.questions, newQuestion],
        }
      }
    },
    ClearQuestions: (state: any) => {
      return initialState
    }
  }
})

export const { AddNewQuestion, ClearQuestions } = QuestionData.actions
export default QuestionData.reducer