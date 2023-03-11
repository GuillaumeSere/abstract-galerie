import React, { useState } from 'react'
import './galerie2.css'
import { data2 } from '../../data/data'

const Galerie2 = () => {

    const [show, setShow] = useState(false);

    if (document.body.style.overflow = 'hidden'){
        document.body.style.overflow = 'overlay';
       }

    return (
        <div className='container-galerie-2'>
            {data2.sort(() => Math.random() - 0.5).map(({ id, image }) => {
                       const handleShow = () => {
                        setShow(true);
                        window.open(image, '_blank');
                    };
                return (
                    <>
                        <div className='card-galerie-2' key={id}>
                            <div className="card-img-galerie-2">
                                <img src={image} alt="" onClick={handleShow} />
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
