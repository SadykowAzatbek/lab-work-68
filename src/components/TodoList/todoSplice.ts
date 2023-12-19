import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface todoState {
  id: string;
  title: string;
  status: boolean;
}

const initialState: todoState = {
  id: '',
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
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
    },
    toggleState: (state, action: PayloadAction<todoState>) => {
      const {status} = action.payload;
      state.todoList.forEach(todo => {
        todo.status = status;
      });
    },
  }
});

export const ListReducer = todoListSlice.reducer;
export const {
  add,
  clear,
  removeTodo,
  toggleState,
} = todoListSlice.actions;