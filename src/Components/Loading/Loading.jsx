import React from 'react'
import './Loading.css'
import loading from '../../img/loading.png'
import meta from '../../img/meta.PNG'
export default function Loading() {
    return (
        <div className='Loading'>

            <img src={loading} alt="loading" className='logoLoading' />
            <img src={meta} alt="meta" className='meta' />
        </div>
    )
}
