import React from 'react'
import './home.css'
import img from '../../images/100.png'
import { Link } from 'react-router-dom'

const Home = () => {
    
  return (
    <div className='home'>
        <h1 className='title'>Galerie d'<span>Images</span> Abstrait</h1>
        <Link to='/galerie-1'><img src={img} alt="tableau abstrait" /></Link>
    </div>
  )
}

export default Home
