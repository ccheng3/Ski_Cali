import React from 'react';
import { Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import logo from '../../images/skiing.png';
import './Header.css'

export default function Header() {
   const handleLinkStyle = ({ isActive }) => {
      return {
         textDecoration: isActive ? 'none' : 'underline',
         fontWeight: isActive ? 'bold' : 'normal',
      }
   }

   return (
      <Toolbar className='main-nav'>
         <span>
            <NavLink className='main-navlink' to='/'>
               <img className='logo'
                  src={logo}
               />
            </NavLink>
            <span className='title'>Ski California</span>
            <Menu>
               <NavLink style={handleLinkStyle} className='main-navlink' to='/about'>About</NavLink>
               <NavLink style={handleLinkStyle} className='main-navlink' to='/resorts'>Resorts</NavLink>
               <NavLink style={handleLinkStyle} className='main-navlink' to='/traffic'>Highway Conditions</NavLink>
               <NavLink style={handleLinkStyle} className='main-navlink' to='/safety'>Snow Safety </NavLink>
            </Menu>
         </span>
      </Toolbar >

   );
}