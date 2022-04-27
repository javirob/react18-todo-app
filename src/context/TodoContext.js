import { useEffect } from 'react';
import { createContext, useState, useContext } from 'react';

const TodoContext = createContext();

const getTodosLS = () => {
  let list = localStorage.getItem('todos');
  return list ? JSON.parse(list) : [];
};

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(getTodosLS());

  const [selectedStatus, setSelectedStatus] = useState('all');

  const [modal, setModal] = useState({
    show: false,
    text: '',
    action: () => {},
  });

  const [alert, setAlert] = useState({
    show: false,
    text: '',
    type: '',
  });

  const pendingTodos = todoList.reduce((total, todo) => {
    return !todo.completed ? total + 1 : 0;
  }, 0);

  const completedTodos = todoList.length - pendingTodos;

  const showAlert = (show = false, text = '', type = '') => {
    setAlert({ show, text, type });
  };

  useEffect(() => {
    window.document.title = `(${pendingTodos}) Todos`;
  }, [pendingTodos]);

  const filteredTodos = todoList.filter((item) => {
    if (selectedStatus === 'completed') {
      return item.completed;
    } else if (selectedStatus === 'pending') {
      return !item.completed;
    } else {
      return item;
    }
  });

  const addTodo = (todoText) => {
    const newTodo = {
      id: new Date().getTime().toString(),
      text: todoText,
      completed: false,
    };

    setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = (id) => {
    setModal({
      show: true,
      text: 'Delete item?',
      action: () => {
        setTodoList(todoList.filter((item) => item.id !== id));
        showAlert(true, 'Item deleted', 'danger');
      },
    });
  };

  const clearTodoList = () => {
    setModal({
      show: true,
      text: 'Delete List?',
      action: () => {
        setTodoList([]);
        showAlert(true, 'List cleared', 'danger');
      },
    });
  };

  const toggleComplete = (id) => {
    setTodoList(
      todoList.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  };

  const editText = (id, text) => {
    setTodoList(todoList.map((item) => (item.id === id ? { ...item, text: text } : item)));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoContext.Provider
      value={{
        todoList,
        filteredTodos,
        selectedStatus,
        modal,
        alert,
        pendingTodos,
        completedTodos,
        showAlert,
        setModal,
        addTodo,
        deleteTodo,
        clearTodoList,
        toggleComplete,
        editText,
        setSelectedStatus,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const useTodoContext = () => {
  return useContext(TodoContext);
};

export { TodoContext, TodoProvider, useTodoContext };
