import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import logo from '../../images/logo.gif'
import { AiOutlineHome } from 'react-icons/ai'
import { RiGalleryLine, RiSlideshow4Line } from 'react-icons/ri'
import { TfiGallery } from 'react-icons/tfi'

const Header = () => {

    function handleRefresh() {
        window.location.load();
      }

    return (
        <div className='header'>
            <div className="header-home">
                <Link className='link' to='/'><AiOutlineHome className='icon' /></Link>
            </div>
            <div className="header-logo">
                <img src={logo} alt="" />
            </div>
            <div className="header-link">
                <Link className='link' to='/galerie-1'><RiGalleryLine className='icon' /></Link>
                <Link className='link' to='/galerie-2'><TfiGallery className='icon' /></Link>
                <Link className='link' to='/galerie-3' onClick={handleRefresh}><RiSlideshow4Line className='icon' /></Link>
            </div>
        </div>
    )
}

export default Header