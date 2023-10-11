
import React from 'react'
import "../assets/css/Footer.css"
import datafiscal from "../assets/statics/datafiscal.jpeg"
import face from "../assets/statics/facebook.svg"
import insta from "../assets/statics/insta.svg"
import linkedin from "../assets/statics/linkedin.svg"
export default function Footer() {
    return (
        <>
        <footer>
        <div className='conatinerfooter'>
            <div className='divdeldivfooter1'>
            <div className='divfooter1'>
            <div className='divcolumnasul'>
            <ul className='ul1 ulflexlista'>
                <li className='liespacio'><h3>Sobre nosotros</h3></li>
                <li className='liespacio'>NUestra historia</li>
                <li className='liespacio'>Nuestra cultura inclusica y valores</li>
                <li className='liespacio'>Nuestro café</li>
                <li className='liespacio'>Historia y novedades</li>
                <li className='liespacio'>Trabajá con nosotros</li>
                <li className='liespacio'>Comunicados oficiales</li>
            </ul>
            <ul className='ul2 ulflexlista'>
            <li className='liespacio'><h3>Impacto social</h3></li>
                <li className='liespacio'>Planeta</li>
                <li className='liespacio'>Personas</li>
                
            </ul>
            <ul className='ul3 ulflexlista'>
            <li className='liespacio'><h3>Atención al cliente</h3></li>
                <li className='liespacio'>Contacto</li>
                <li className='liespacio'>Medios de pago</li>
                <li className='liespacio'>Defensa de las y los consumidores</li>
            </ul>
            <ul className='ul4 ulflexlista'>
            <li className='liespacio'><h3>Experiencia Starbucks</h3></li>
                <li className='liespacio'>Formas de comprar</li>
                <li className='liespacio'>Delivery</li>
                
            </ul>


        </div>
            <div className='divcolumnadatafiscal'>
            <div className='datafiscal'>
                <img src={datafiscal} alt="logo" className='datafiscalimg'/>
            </div>
            
            

            </div>

            </div>
            </div>

            <div className='divfooter2row'>
            <div className='divfooter2hijo'> 
            <div className='diviconos'>
                <a><img src={face} alt="logo" className='iconito'/></a>
                <a><img src={insta} alt="logo" className='iconito'/></a>
                <a><img src={linkedin} alt="logo" className='iconito'/></a>
                </div>

                <div className='divulfooterfinal'>
                <ul className='ulfooterfinal'>
                <li className='ligris'>Accesibilidad web</li><p className='ligris'>|</p>
                <li className='ligris'>Aviso de privacidad</li><p className='ligris'>|</p>
                <li className='ligris'>Condiciones de uso</li><p className='ligris'>|</p>            
                <li className='ligris'>Mapa del sitio</li><p className='ligris'>|</p>
                </ul>
                </div>

                <div className='divpfinal'>
                <p className='pfinal'>Ⓒ 2023. Starbucks Cofee Company. Reservados todos los derechos</p>
                
                </div>
                <div className='divpfinal2'>
                
                <p className='pfinal2'>ar | prod | 44e96568eeacba34ab9b4f72e538133b5877b273 | 01/09/2023-05:08:44:762</p>
                </div>
            </div>
            </div> 







        </div>
        
        </footer>
        </>
    )
}