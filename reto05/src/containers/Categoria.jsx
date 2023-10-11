import { Link, useParams } from "react-router-dom"
import { useProducts } from "../hooks/useProducts"
import { useEffect, useState } from "react"

export default function Categoria() {
    const { menu, products, loading, fetchProducts } = useProducts()
    const [currentCategory, setCurrentCategory] = useState({})
    const [categoryProducts, setCategoryProducts] = useState([])

    let { cat, subcat, subsubcat } = useParams()

    useEffect(() => {
        const getCategory = () => {
        if (menu.length === 0) return
        // obtengo el objeto de menu con la url actual
        const category = menu.find((item) => item.url === `/menu/${cat}/${subcat}`)
        setCurrentCategory(category)

        // creo un nuevo array con los elementos cuyo parent sea igual a category.id
        const filteredProducts = menu.filter((item) => item.parent === category.id)

        setCategoryProducts(filteredProducts)
        }
        // cargo los productos de la subcategoria
        fetchProducts(subcat)
        getCategory()
    }, [menu])

    return (
        <div className="products-container">
        <nav>
            <Link to="/menu">Menú</Link> / <span>{currentCategory.title}</span>
        </nav>
        <h2>{currentCategory.title}</h2>
        {loading && <p>Cargando...</p>}
        <div>
            {categoryProducts.map((item) => (
            <div key={item.id}>
                <h3 className="category-heading" id={item.id}>
                {item.title}
                </h3>
                <ul className="products">
                {products &&
                    products
                    .filter((product) => product.menu.id === item.id)
                    .map((product) => (
                        <li key={product.id}>
                        <Link to={product.url}>
                            <img src={`${product.image.url}?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop`} alt="" />
                            <h4>{product.title}</h4>
                        </Link>
                        </li>
                    ))}
                </ul>
            </div>
            ))}
        </div>
        </div>
    )
}
