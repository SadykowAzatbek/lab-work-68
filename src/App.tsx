import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddDispatch, RootState} from './store';
import TodoForm from './components/TodoForm/TodoForm';
import {fetchTodoList} from './components/TodoList/todoThunks';
import './App.css';

function App() {
  const todoList = useSelector((state: RootState) => state.list);
  const dispatch: AddDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  return (
    <>
      <TodoForm />
      <div className="d-flex flex-column align-items-center">
        {todoList.todoList.map((elem) => (
          <div className="border border-dark mt-3 text-start p-3 w-75 position-relative rounded-1" key={Math.random()}>
            {elem.title}
            <input type={"checkbox"} className="position-absolute check" />
            <button className="btn btn-light btnPos position-absolute">delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
