import React from 'react';
import './ComponentsCss/Navigation.css';
import Link from './Link';

const Header = () => {
  return (
    <nav className='navigation'>
      <h1 className='font-mono left-title'>Kesington Car Park</h1>
      <ul>
        
        <li><a><Link to="/accounts">Account</Link></a>
   </li>
   <li><a><Link to="/bookings">Bookings</Link></a>
   </li>
      </ul>
    </nav>
  );
};

export default Header;
