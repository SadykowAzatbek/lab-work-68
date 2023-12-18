import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import {RootState} from '../../store';
import {add, clear, todoList, todoState} from './todoSplice';

export const postTodoList = createAsyncThunk<void, void, {state: RootState}>(
  'todo/post',
  async (_, thunkAPI) => {
    const info = thunkAPI.getState().todo;
    await axiosApi.post('todo.json', info);
  });

export const fetchTodoList = createAsyncThunk(
  'todo/fetch',
  async (_, { dispatch }) => {
    const responseData = await axiosApi.get<todoList>('todo.json');
    const obj = Object.keys(responseData.data);

    const promise = obj.map(async (elem) => {
      const response = await axiosApi.get<todoState>('todo/' + elem + '.json');
      return response.data ?? 'not found';
    });

    dispatch(clear());

    const data = await Promise.all(promise);
    data.forEach((item) => {
      dispatch(add(item));
    });
  }
);