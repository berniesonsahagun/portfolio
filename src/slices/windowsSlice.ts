import { createSlice } from "@reduxjs/toolkit";

export type WindowState = {
  value: number;
  /**
   * name:
   * type:
   * isMinimized:
   * isMaximized:
   *
   ***/
};

const initialState: WindowState = {
  value: 0,
};

export const windowSlice = createSlice({
  name: "windows",
  initialState,
  reducers: {
    openWindow: (state: WindowState) => {
      //add a new Window component to the top of the STACK
      //set the new Window component to active
      //set all other Window components to inactive
      state.value += 1;
    },

    closeWindow: (state: WindowState) => {
      //remove the window from the STACK
      state.value -= 1;
    },

    selectWindow: (state: WindowState) => {
      //set the specific Window component to ACTIVE
      //push the specific Window component to the top of the STACK
      //set all other Window components to inactive
      state.value -= 1;
    },
  },
});

export const { openWindow, closeWindow } = windowSlice.actions;
export default windowSlice.reducer;
