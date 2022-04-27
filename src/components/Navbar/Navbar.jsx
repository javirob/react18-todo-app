import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';
import { MdPendingActions } from 'react-icons/md';

import { useTodoContext } from '../../context/TodoContext';

const Navbar = () => {
  const { pendingTodos } = useTodoContext();

  return (
    <nav className='navbar'>
      <div className='container'>
        <NavLink to='/' className='logo'>
          Todo App
        </NavLink>
        <span className='todos-pending-icon'>
          <span>{pendingTodos}</span>
          <MdPendingActions />
        </span>
        <NavLink to='/about' className='about-link'>
          <FaInfoCircle /> About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
