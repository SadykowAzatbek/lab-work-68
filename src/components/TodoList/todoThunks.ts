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
  async (_, {dispatch }) => {
    const responseData = await axiosApi.get<todoList>('todo.json');
    const obj = Object.keys(responseData.data);

    const promise = obj.map(async (key) => {
      const response = await axiosApi.get<todoState>('todo/' + key + '.json');

      return {
        ...response.data,
        id: key,
      };

    });

    dispatch(clear());

    const data = await Promise.all(promise);
    data.forEach((item) => {
      dispatch(add(item));
    });
  },
);

export const deleteTodo = createAsyncThunk(
  'todo/delete',
  async (id: string) => {
    await axiosApi.delete('todo/' + id + '.json');
  },
);

export const checkTodo = createAsyncThunk<void, string, {state: RootState}>(
  'todo/put',
  async (arg, thunkAPI) => {
    const info = thunkAPI.getState().todo;
    await axiosApi.put('todo/' + arg + '.json', info.status);
  }
)