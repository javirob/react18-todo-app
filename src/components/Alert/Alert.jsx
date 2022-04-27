import './Alert.css';
import { useTodoContext } from '../../context/TodoContext';
import { useEffect } from 'react';

const Alert = () => {
  const { alert, showAlert } = useTodoContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      showAlert();
    }, 2500);

    return () => clearTimeout(timer);
  });

  return (
    <div className={`alert alert-${alert.type}`}>
      <p>{alert.text}</p>
    </div>
  );
};

export default Alert;
