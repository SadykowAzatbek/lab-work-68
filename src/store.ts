import {configureStore} from '@reduxjs/toolkit';
import {ListReducer, todoListReducer} from './components/TodoList/todoSplice';

export const store = configureStore({
  reducer: {
    todo: todoListReducer,
    list: ListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;