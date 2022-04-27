import './TodoDashboard.css';
import { useTodoContext } from '../../../context/TodoContext';
import Card from '../../Card/Card';

const TodoDashboard = () => {
  const { todoList, selectedStatus, setSelectedStatus, completedTodos, pendingTodos } =
    useTodoContext();

  return (
    <Card className='todo-dashboard alt'>
      <div className='dashboard-stats'>
        <span>({todoList.length}) Todos</span>
        <span>({pendingTodos}) Pending</span>
        <span>({completedTodos}) Completed</span>
      </div>
      <div className='dashboard-select'>
        <select
          id='filter'
          value={selectedStatus}
          onChange={(e) => {
            setSelectedStatus(e.target.value);
          }}
        >
          <option value='all'>All</option>
          <option value='pending'>Pending</option>
          <option value='completed'>Completed</option>
        </select>
      </div>
    </Card>
  );
};

export default TodoDashboard;
