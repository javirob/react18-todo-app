import './TodoForm.css';
import Card from '../../Card/Card';
import Button from '../../Button/Button';

import { useRef, useEffect } from 'react';
import { useTodoContext } from '../../../context/TodoContext';

const TodoForm = () => {
  const todoInputRef = useRef();

  const { addTodo, showAlert } = useTodoContext();

  useEffect(() => {
    todoInputRef.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const currentText = todoInputRef.current.value;
    if (currentText.trim().length < 3) {
      todoInputRef.current.focus();
      showAlert(true, 'Please enter at least 3 characters', 'danger');
    } else {
      addTodo(currentText);
      showAlert(true, 'Item added', 'success');
      todoInputRef.current.value = '';
    }
  };

  return (
    <Card className='todo-form'>
      <h3>Whats the plan for today?</h3>
      <form onSubmit={submitHandler}>
        <input type='text' ref={todoInputRef} placeholder='Enter todo...' />
        <Button type='submit'>add</Button>
      </form>
    </Card>
  );
};

export default TodoForm;
