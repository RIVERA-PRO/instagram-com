import React from 'react'
import './Registrate.css'
import { Link as Anchor } from "react-router-dom";
export default function Registrate() {
    return (
        <div className='Registrate'>
            <p>¿No tienes una cuenta? </p>
            <Anchor >Regístrate</Anchor>
        </div>
    )
}
