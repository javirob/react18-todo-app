import './HomePage.css';
import TodoForm from '../../components/TodoApp/TodoForm/TodoForm';
import TodoDashboard from '../../components/TodoApp/TodoDashboard/TodoDashboard';
import TodoList from '../../components/TodoApp/TodoList/TodoList';

import { useTodoContext } from '../../context/TodoContext';

const HomePage = () => {
  const { todoList } = useTodoContext();
  return (
    <main className='homepage'>
      <section className='container'>
        <TodoForm />
        {todoList.length > 0 && (
          <>
            {' '}
            <TodoDashboard />
            <TodoList />
          </>
        )}
      </section>
    </main>
  );
};

export default HomePage;
