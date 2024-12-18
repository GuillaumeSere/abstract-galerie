import React, { useEffect, useState } from 'react'
import '../../../node_modules/reveal.js/dist/reveal.css';
import '../../../node_modules/reveal.js/dist/theme/blood.css';
import '../../../node_modules/reveal.js/plugin/highlight/monokai.css';
import Reveal from '../../../node_modules/reveal.js/dist/reveal.js';
import './galerie3.css';
import { data2 } from '../../data/data'

const Galerie3 = () => {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        if (!isInitialized) {
            Reveal.initialize({
                width: 1360,
                history: false,
                hash: false,
                mouseWheel: true,
            });
            setIsInitialized(true);
        }
    }, [isInitialized]);
    
    return (
        <div className='reveal'>
            <div className="slides">
                {data2.map(({ id, image }) => {
                    return (
                        <section data-transition="zoom" key={id}>
                            <img src={image} alt="" className='fragments' />
                        </section>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Galerie3
