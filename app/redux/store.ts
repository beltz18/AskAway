import { configureStore } from '@reduxjs/toolkit'
import UserDataReducer    from '@r/slicers/AuthSlicer'
import SetStepReducer     from '@r/slicers/StepperSlicer'
import CandidatesReducer  from '@r/slicers/CandidatesSlicer'
import PanelReducer       from '@r/slicers/PanelSlicer'
import QuestionsReducer   from '@r/slicers/QuestionsSlicer'
import InterviewsReducer  from '@r/slicers/InterviewsSlicer'

export const store = configureStore({
  reducer: {
    UserData:       UserDataReducer,
    Step:           SetStepReducer,
    CandidateData:  CandidatesReducer,
    PanelData:      PanelReducer,
    QuestionsData:  QuestionsReducer,
    InterviewsData: InterviewsReducer,
  },
})

export type RootState   = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch