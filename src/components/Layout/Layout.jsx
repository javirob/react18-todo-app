import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';
import Alert from '../Alert/Alert';

import { useTodoContext } from '../../context/TodoContext';

const Layout = () => {
  const { modal, alert } = useTodoContext();

  return (
    <>
      {modal.show && <Modal />}
      <Navbar />
      {alert.show && <Alert />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
