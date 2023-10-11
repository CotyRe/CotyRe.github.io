import React from 'react'
import "../assets/css/Header.css"
import logo from "../assets/statics/logo.svg"
import { Link } from 'react-router-dom'

export default function Header() {
    
    return (
        <>
        <header>
            <nav>
                <Link className='link' to="/">
                <img src={logo} alt="" className="logo-encabezado"/>
                </Link>
                <Link className='link' to="/menu">
                    <p>MENU</p>
                </Link>
                <Link className='link' to="/cafe">
                    <p>CAFE</p>
                </Link>
                
                <Link className='link' to="/experiencia-starbucks">
                    <p>EXPERIENCIA STARBUCKS</p>
                </Link>
            </nav>
            
            <p><i class="fa-solid fa-location-dot" ></i>LOCALIZAR TIENDA</p>
        </header>
        </>
    )
}
