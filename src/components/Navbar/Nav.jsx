import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  return (
    <nav  className='navbar navbar-dark bg-dark navbar-expand-lg'>
    <Link to={'/'} className='navbar-brand flex' ><h1 className='title'>Fitness.dev</h1></Link>
      <div className='navbar-collapse links'>
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to="/" className='nav-link'>Home</Link>
          </li>
          <li className='navbar-item'>
            <Link to="/blog" className='nav-link'>Blog</Link>
          </li>
          <li className='navbar-item'>
            <Link to="/videos" className='nav-link'>Videos</Link>
          </li>
          <li className='navbar-item'>
            <Link to="/contact" className='nav-link'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
