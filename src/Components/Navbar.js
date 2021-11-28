import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'assets/Stolewski.png';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand navbar-light bg-light'>
      <div className='container-fluid'>
        <a
          className='navbar-brand'
          target='_blank'
          rel='noreferrer'
          href='https://instagram.com/stolewski'
        >
          <img src={logo} alt={logo} />
        </a>
        <div>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/todolist'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/about'>
                Info
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
