import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddDispatch, RootState} from '../../store';
import {titlePost} from '../TodoList/todoSplice';
import {fetchTodoList, postTodoList} from '../TodoList/todoThunks';

const TodoForm = () => {
  const todoTitle = useSelector((state: RootState) => state.todo.title);
  const dispatch: AddDispatch = useDispatch();

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;

    dispatch(titlePost(value));
  };

  const formSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await dispatch(postTodoList());
    await dispatch(fetchTodoList());

    dispatch(titlePost(''));
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input value={todoTitle} onChange={inputChange} />
        <button className="btn btn-success ms-1" type="submit">add</button>
      </form>
    </div>
  );
};

export default TodoForm;