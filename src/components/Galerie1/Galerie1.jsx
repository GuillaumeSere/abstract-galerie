import React from 'react'
import './galerie1.css'
import { data1 } from '../../data/data'
import Modal from '../Modal/Modal'

const Galerie1 = () => {

    if (document.body.style.overflow = 'hidden'){
        document.body.style.overflow = 'overlay';
       }

    return (
        <div className='container-galerie-1'>
            {data1.sort(() => Math.random() - 0.5).map(({ id, image }) => {
                return (
                    <>
                        <div className='card-galerie-1' key={id}>
                            <div className="card-img-galerie-1">
                            <Modal image={image} openWindow={true} />
                            </div>
                        </div>
                      
                    </>
                )
            })
            }
        </div>
    )
}

export default Galerie1
