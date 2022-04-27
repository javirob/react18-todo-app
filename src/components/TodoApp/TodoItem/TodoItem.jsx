import './TodoItem.css';
import Button from '../../Button/Button';
import { FaTimes, FaCheckCircle } from 'react-icons/fa';
import { useTodoContext } from '../../../context/TodoContext';
import { useState } from 'react';

const TodoItem = ({ id, text, completed }) => {
  const [enteredText, setEnteredText] = useState(text);

  const { deleteTodo, toggleComplete, editText } = useTodoContext();

  const handleComplete = () => {
    toggleComplete(id);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  const handleUpdate = (e) => {
    if (enteredText.trim() === '') {
      setEnteredText(text);
    }

    if (enteredText !== text) {
      editText(id, enteredText);
    }
  };

  return (
    <li className={`card todo-item ${completed && 'completed'}`}>
      <span>{completed ? 'Completed' : 'Pending'}</span>
      <input
        type='text'
        value={enteredText}
        onChange={(e) => setEnteredText(e.target.value)}
        onBlur={handleUpdate}
      />

      <div className='todo-item-actions'>
        <Button version='success complete' onClick={handleComplete}>
          <FaCheckCircle />
        </Button>
        <Button version='danger delete' onClick={handleDelete}>
          <FaTimes />
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;
