import { useTodoContext } from '../../../context/TodoContext';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';
import Button from '../../Button/Button';

const TodoList = () => {
  const { filteredTodos, clearTodoList } = useTodoContext();

  return (
    <>
      <ul className='todo-list'>
        {filteredTodos.map((item) => {
          return <TodoItem {...item} key={item.id} />;
        })}
      </ul>
      <Button version='danger' onClick={clearTodoList}>
        CLEAR LIST
      </Button>
    </>
  );
};

export default TodoList;
