import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddDispatch, RootState} from '../../store';
import {titlePost} from '../TodoList/todoSplice';

const TodoForm = () => {
  const todoTitle = useSelector((state: RootState) => state.todo.title);
  const dispatch: AddDispatch = useDispatch();

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;

    dispatch(titlePost(value));
  }

  const formSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  }

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