import { useContext } from "react"
import { ProductsContext } from "../context/Context.jsx"

export function useProducts() {
        const context = useContext(ProductsContext)
        if (!context) {
        throw new Error("useProducts debe estar dentro del proveedor ProductsProvider")
        }
    return context
}