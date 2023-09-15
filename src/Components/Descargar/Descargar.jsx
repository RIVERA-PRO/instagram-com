import React from 'react'
import './Descargar.css'
import playstore from '../../img/playstore.PNG'
import microsoft from '../../img/microsoft.PNG'
export default function Descargar() {
    return (
        <div className='Descargar'>
            <p>Descarga la aplicación.</p>
            <div className='deFlexImg'>
                <a href="http://" target="_blank" rel="noopener noreferrer">   <img src={playstore} alt="playstore" /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer">    <img src={microsoft} alt="microsoft" /></a>

            </div>
        </div>
    )
}
