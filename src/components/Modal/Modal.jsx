import './Modal.css';
import Card from '../Card/Card';
import Button from '../Button/Button';
import { FaTimes } from 'react-icons/fa';
import { useTodoContext } from '../../context/TodoContext';

const Modal = () => {
  const { setModal, modal } = useTodoContext();

  const handleCancel = () => {
    setModal({
      show: false,
      text: '',
      action: () => {},
    });
  };

  const handleAction = () => {
    modal.action();
    handleCancel();
  };
  return (
    <div className='backdrop'>
      <Card className='modal'>
        <Button version='danger close-modal' onClick={handleCancel}>
          <FaTimes />
        </Button>
        <h2>{modal.text}</h2>
        <div className='modal-actions'>
          <Button onClick={handleCancel}>cancel</Button>
          <Button version='secondary' onClick={handleAction}>
            confirm
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Modal;
