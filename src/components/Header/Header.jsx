import React from 'react';
import { Toolbar, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';

import logo from '../../images/skiing.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css'

export default function Header() {
   const [toggleMenu, setToggleMenu] = React.useState(false);

   const handleLinkStyle = ({ isActive }) => {
      return {
         textDecoration: isActive ? 'none' : 'underline',
         fontWeight: isActive ? 'bold' : 'normal',
      }
   }

   return (
      <Toolbar className='header-nav'>
         <NavLink className='header-nav-link' to='/'>
            <img className='header-logo'
               src={logo}
            />
         </NavLink>
         <span className='header-title'>Ski California</span>
         <span className='header-nav-span'>
            <NavLink style={handleLinkStyle} className='header-nav-link' to='/about'>About</NavLink>
            <NavLink style={handleLinkStyle} className='header-nav-link' to='/resorts'>Resorts</NavLink>
            <NavLink style={handleLinkStyle} className='header-nav-link' to='/traffic'>Highway Conditions</NavLink>
            <NavLink style={handleLinkStyle} className='header-nav-link' to='/safety'>Snow Safety </NavLink>
         </span>

         <div className='header-small-screen-menu'>
            <MenuIcon onClick={() => { setToggleMenu(true) }} />
            {toggleMenu &&
               <div className='header-small-screen-overlay'>
                  <CloseIcon className='header-small-screen-overlay-close' onClick={() => { setToggleMenu(false) }} />
                  <Stack spacing={2}
                     justifyContent="center"
                     alignItems="center"
                     className='header-small-screen-overlay-stack'>
                     <NavLink style={handleLinkStyle} className='header-nav-link' onClick={() => { setToggleMenu(false) }} to='/about'>About</NavLink>
                     <NavLink style={handleLinkStyle} className='header-nav-link' onClick={() => { setToggleMenu(false) }} to='/resorts'>Resorts</NavLink>
                     <NavLink style={handleLinkStyle} className='header-nav-link' onClick={() => { setToggleMenu(false) }} to='/traffic'>Highway Conditions</NavLink>
                     <NavLink style={handleLinkStyle} className='header-nav-link' onClick={() => { setToggleMenu(false) }} to='/safety'>Snow Safety </NavLink>
                  </Stack>
               </div>}
         </div>
      </Toolbar >

   );
}