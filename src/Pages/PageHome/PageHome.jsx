import React from 'react'
import './PageHome.css'
import Register from '../../Components/Register/Register'
import image from '../../img/phone.PNG'

export default function PageHome() {
    return (
        <div className='PageHomeConatin'>
            <div className='imgPhone'>
                <img src={image} alt="phone" />
            </div>
            <Register />

        </div>
    )
}
