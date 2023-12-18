import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface todoState {
  title: string;
  status: boolean;
}

const initialState: todoState = {
  title: '',
  status: false,
};

export const todoSplice = createSlice({
  name: 'todo list',
  initialState,
  reducers: {
    titlePost: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  }
});

export const todoListReducer = todoSplice.reducer;
export const {titlePost} = todoSplice.actions;