import { useParams, useNavigate } from "react-router-dom"
import { useProducts } from "../hooks/useProducts"
import { useEffect, useState } from "react"
import "../assets/css/Product.css"

export default function Producto() {
    const { products, loading } = useProducts()
    const [product, setProduct] = useState(null)
    const { url } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getProduct = () => {
        if (products.length === 0) return

        const product = products.find((item) => item.url === `/producto/${url}`)
        setProduct(product)
        }
        getProduct()
    }, [products])

    if (loading) return <p>Cargando...</p>
    return (
        <div className="product">
        {product && (
            <>
            <h2>{product.title}</h2>
            <img src={`${product.image.url}?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop`} className="imgproduct"/>
            <p>{product.body}</p>
            <p>&nbsp;</p>
            <button onClick={() => navigate(-1)}>Volver</button>
            </>
        )}
        </div>
    )
}
