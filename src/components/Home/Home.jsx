import React from 'react'
import './home.css'
import img from '../../images/100.png'

const Home = () => {
    
  return (
    <div className='home'>
        <h1 className='title'>Galerie d'<span>Images</span> Abstrait</h1>
        <img src={img} alt="tableau abstrait" />
    </div>
  )
}

export default Home
