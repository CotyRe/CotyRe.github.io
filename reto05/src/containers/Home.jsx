import React from 'react'
import "../assets/css/Home.css"
import home1 from "../assets/statics/HOME1.png"
import home2 from "../assets/statics/HOME2.png"

export default function Home() {
    return (
        <>
            <div className='hero1'>
                <img src={home1} className="imghero" alt=""/>
                <div className='bloque'>
                <h1 className='h1hero'>Dulce como un invierno con vos.</h1>
            </div>
            </div>
            
            <div className='hero2'>
                <div className='bloque'>
                    <h1 className='h1bloquehero'>Unite a algo más grande</h1>
                    <p className='pbloquehero'>Revisa las oportunidades que tenemos para vos</p>
                    <a href="" className='abloquehero'>Postular acá</a>
                </div>
                <img src={home2} className="imghero" alt=""/>
            </div>
        </>
    )
}
