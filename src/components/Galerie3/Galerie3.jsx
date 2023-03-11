import React, { useEffect } from 'react'
import '../../../node_modules/reveal.js/dist/reveal.css';
import '../../../node_modules/reveal.js/dist/theme/blood.css';
import '../../../node_modules/reveal.js/plugin/highlight/monokai.css';
import Reveal from '../../../node_modules/reveal.js/dist/reveal.js';
import '../../../node_modules/reveal.js/plugin/highlight/highlight.js';
import './galerie3.css';
import { data2 } from '../../data/data'

const Galerie3 = () => {

    if (document.body.style.overflow = 'overlay'){
        document.body.style.overflow = 'hidden';
       }

    useEffect(() => {
        Reveal.initialize({
            width: 1360,
            history: false,
            hash: false,
            mouseWheel: true,
        });
    }, [data2]);
    

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
