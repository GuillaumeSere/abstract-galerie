import React from 'react'
import './galerie2.css'
import { data2 } from '../../data/data'

const Galerie2 = () => {

    if (document.body.style.overflow = 'hidden') {
        document.body.style.overflow = 'overlay';
    }

    return (
        <div className='container-galerie-2'>
            {data2.sort(() => Math.random() - 0.5).map(({ id, image }) => {
                return (
                    <>
                        <div className='card-galerie-2 responsive' key={id}>
                            <div className="card-img-galerie-2">
                                <img src={image} alt="" onClick={() => window.open(image, '_blank')} />
                            </div>
                        </div>
                    </>
                )
            })
            }
        </div>
    )
}

export default Galerie2
