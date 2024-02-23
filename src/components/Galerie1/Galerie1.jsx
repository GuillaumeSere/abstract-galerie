import React, { useEffect, useState } from 'react'
import './galerie1.css'
import { data1 } from '../../data/data'
import Modal from '../Modal/Modal'

const Galerie1 = () => {

    const [randomizedData, setRandomizedData] = useState([]);

       useEffect(() => {
        // Générer l'ordre aléatoire une seule fois lors du montage du composant
        const randomOrder = [...data1].sort(() => Math.random() - 0.5);
        setRandomizedData(randomOrder);
    }, []);

    if (document.body.style.overflow = 'hidden'){
        document.body.style.overflow = 'overlay';
       }

    return (
        <div className='container-galerie-1'>
            {randomizedData.map(({ id, image }) => {
                return (
                    <>
                        <div className='card-galerie-1' key={id}>
                            <div className="card-img-galerie-1">
                            <Modal image={image} openWindow={true} key={id} />
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
