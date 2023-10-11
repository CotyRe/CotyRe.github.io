import React from 'react'
import "../assets/css/experiencia-starbucks.css"
import experiencia1 from "../assets/statics/experiencia-1.png"
import experiencia2 from "../assets/statics/experiencia-2.png"
import experiencia3 from "../assets/statics/experiencia-3.png"

export default function ExperienciaStarbucks() {
    return (
        <>
            <div className="encabezado">
                <div className="contenedor-encabezado">
                    <h1 className="h1-experiencia">Experiencia Starbucks</h1>
                </div>
                
            </div>

            <div className="contenedor">
                <h2 className="titulo-2">Para cada momento hay una forma de vivir la <br/> Experiencia Starbucks como vos quieras.</h2>

                <div className="bloque">
                    <div className="columna-texto">
                        <h3>In Store</h3>
                        <p>En nuestras tiendas te esperan nuestros baristas capacitados para ofrecerte una bebida muy especial. El ambiente cálido y los detalles de nuestros productos elaborados artesanalmente hacen que la experiencia sea única e inigualable.</p>
                    </div>
                    <div className="columna-imagen">
                        <img src={experiencia1} alt=""/>
                    </div>
                </div>

                <div className="bloque">
                    <div className="columna-imagen">
                        <img src={experiencia2} alt=""/>
                    </div>
                    <div className="columna-texto">
                        <h3>Drive Thru</h3>
                        <p>Retirá tu bebida favorita y viví la Experiencia Starbucks sin bajarte del auto.</p>
                    </div>
                </div>

                <div className="bloque">
                    <div className="columna-imagen">
                        <img src={experiencia3} alt=""/>
                    </div>
                    <div className="columna-texto">
                        <h3>Delivery</h3>
                        <p>Los clientes pueden pedir sus bebidas y productos favoritos donde sea que estén con operadores logísticos al servicio como Pedidos Ya.</p>
                        <a href="https://www.pedidosya.com.ar/cadenas/starbucks" className="btn-cafe-final">Pedí Delivery</a>
                    </div>
                </div>

            </div>
        </>
    )
}
