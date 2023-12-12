import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  panel: [],
}

const PanelMemberData = createSlice({
  name: 'newPanelMember',
  initialState,
  reducers: {
    AddNewPanelMember(state:any, action) {
      const newPanelMember = action.payload

      if (typeof newPanelMember?.length != 'undefined') {
        return {
          ...state,
          panel: newPanelMember,
        }
      } else {
        return {
          ...state,
          panel: [...state.panel, newPanelMember],
        }
      }
    }
  }
})

export const { AddNewPanelMember } = PanelMemberData.actions
export default PanelMemberData.reducer