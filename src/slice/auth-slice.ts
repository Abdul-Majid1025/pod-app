import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  value: number;
}

const initialState: AuthState = {
  value: 0,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (state) => {
      console.log("hereee");
      
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    incrementByAmountAsync: (state, action: PayloadAction<number>) => {},
  },
});

export const { increment, decrement, incrementByAmount, incrementByAmountAsync } = authSlice.actions;

export const { actions, reducer: authReducer, name: sliceKey } = authSlice;
export default authSlice.reducer;
