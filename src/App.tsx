import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddDispatch, RootState} from './store';
import TodoForm from './components/TodoForm/TodoForm';
import {deleteTodo, fetchTodoList} from './components/TodoList/todoThunks';
import './App.css';
import {removeTodo, toggleStatus} from './components/TodoList/todoSplice';

function App() {
  const todoList = useSelector((state: RootState) => state.list);
  const dispatch: AddDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  const handleCheckboxChange = (index: number) => {
    dispatch(toggleStatus(index));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
    dispatch(removeTodo(id));
  };

  return (
    <>
      <TodoForm />
      <div className="d-flex flex-column align-items-center">
        {todoList.todoList.map((elem, index) => (
          <div className="border border-dark mt-3 text-start p-3 w-75 position-relative rounded-1" key={Math.random()}>
            {elem.title}
            <input
              type="checkbox"
              className="position-absolute check"
              checked={elem.status}
              onChange={() => handleCheckboxChange(index)}
            />
            <button
              className="btn btn-light btnPos position-absolute"
              onClick={() => handleDelete(elem.id)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
