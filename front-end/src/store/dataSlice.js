import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userDetails: {},
  wishList: []
};

const dataSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setLogIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    addUniversity(state, action) {
      const { id } = action.payload;
      const obj = state.wishList.find((each) => each.id === id);
      if (!obj) state.wishList.push(action.payload);
    },
    removeUniversity(state, action) {
      const id = action.payload;
      const list = state.wishList.filter((obj) => obj.id !== id);
      state.wishList = list;
    },
    setUserData(state, action) {
      state.userDetails = action.payload;
    }
  }
});

export const dataSliceReducer = dataSlice.reducer;
export const { setLogIn, addUniversity, setUserData, removeUniversity } = dataSlice.actions;
