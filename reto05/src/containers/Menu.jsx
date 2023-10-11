import { Link } from "react-router-dom"
import { useProducts } from "../hooks/useProducts"
import { useEffect, useState } from "react"
import "../assets/css/Menu.css"

export default function Menu() {
    const { menu, loading } = useProducts()
    const [menuFiltered, setMenuFiltered] = useState([])
 
    useEffect(() => {
        if (menu.length === 0) return

        // creo un nuevo array con los elementos que cumplen la condición (weight > 17)
        const filteredMenu = menu.filter((item) => item.weight > 17)
        // guardo el nuevo array en el estado
        setMenuFiltered(filteredMenu)
    }, [menu])

    return ( 
        
        <div className="products-container">
        <div className="header-menu">
            <h5>¡Disfrútalos!</h5>
            <h3>Conoce nuestras bebidas y alimentos de temporada</h3>
        </div>
        {loading && <p>Cargando...</p>}

        {/* Itero el nuevo array para mostrar los elementos en el DOM */}
        {menuFiltered.map((item) => (
        <div key={item.id}>
            <h3 className="category-heading">{item.title}</h3>
            <ul className="products">
            {/* Ahora filtro e itero todos los elementos cuyo parentName sea igual al titulo del elemento actual */}
            {menu
                .filter((subitem) => subitem.parentName === item.title)
                .map((item) => (
                <li key={item.id}>
                    <Link to={item.url}>
                    <img src={`${item.image.url}?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop`} alt="" />
                    <h4>{item.title}</h4>
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    ))}
    </div>
    
    )
}
