import React from 'react'
import { Link as Anchor } from "react-router-dom";
import './Links.css'
export default function Links() {
    return (
        <div className='LinksContainer'>
            <div className='links'>
                <Anchor>Meta</Anchor>
                <Anchor>Información</Anchor>
                <Anchor>Blog</Anchor>
                <Anchor>Empleo</Anchor>
                <Anchor>Ayuda</Anchor>
                <Anchor>API</Anchor>
                <Anchor>Privacidad</Anchor>
                <Anchor>Condiciones</Anchor>
                <Anchor>Ubicaciones</Anchor>
                <Anchor>Instagram Lite</Anchor>
                <Anchor>Threads</Anchor>
                <Anchor>Subir contactos y personas no usuarias</Anchor>
                <Anchor>Meta Verified</Anchor>
            </div>
            <div className='deFlexIdiomas'>
                <select id="idioma" name="idioma">
                    <option value="es">Español (España)
                    </option>
                    <option value="en">Inglés</option>
                    <option value="fr">Francés</option>
                    <option value="de">Alemán</option>
                    <option value="it">Italiano</option>
                    <option value="pt">Portugués</option>
                    <option value="ru">Ruso</option>
                    <option value="zh">Chino</option>
                    <option value="ja">Japonés</option>
                    <option value="ko">Coreano</option>

                </select>

                <p>© 2023 Instagram from Meta</p>
            </div>
        </div>
    )
}
