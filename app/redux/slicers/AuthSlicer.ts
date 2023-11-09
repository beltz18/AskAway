import { createSlice } from '@reduxjs/toolkit'
import { userInfo }    from '@t/common'

const initialState: userInfo = {
  first_name: '',
  company_name: '',
  email: '',
  country: '',
  state: '',
  status: '',
}

export const UserInfo = createSlice({
  name: 'UserData',
  initialState,
  reducers: {
    SaveUserData: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
    EraseUserData: (state) => {
      return initialState
    },
  },
})

export const { SaveUserData, EraseUserData, } = UserInfo.actions
export default UserInfo.reducer