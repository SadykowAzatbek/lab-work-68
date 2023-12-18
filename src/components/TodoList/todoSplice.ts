import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface todoState {
  title: string;
  status: boolean;
}

const initialState: todoState = {
  title: '',
  status: false,
};

export interface todoList {
  todoList: todoState[];
}

const listGet: todoList = {
  todoList: [],
}

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

export const todoListSlice = createSlice({
  name: 'todo',
  initialState: listGet,
  reducers: {
    add: (state, action: PayloadAction<todoState>) => {
      state.todoList.push(action.payload);
    },
    clear: (state) => {
      state.todoList = [];
    },
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
    },
    toggleStatus: (state, action: PayloadAction<number>) => {
      state.todoList[action.payload].status = !state.todoList[action.payload].status;
    },
  }
});

export const ListReducer = todoListSlice.reducer;
export const {add, clear,removeTodo, toggleStatus} = todoListSlice.actions;