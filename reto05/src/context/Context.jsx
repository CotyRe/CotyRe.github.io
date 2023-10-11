import { createContext, useEffect, useReducer } from "react"

export const ProductsContext = createContext()

//const API = "/json/cafe.json"
//const CAFE_HELADO = "/data/cafes-helado.json"
const API_MENU = "/data/menu.json"

const initialState = {
    products: [],
    menu: [],
    loading: true,
    error: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
        return {
            ...state,
            loading: true
        }
        case "SET_MENU":
        return {
            ...state,
            menu: action.payload,
            loading: false
        }
        case "SET_PRODUCTS":
        return {
            ...state,
            products: action.payload,
            loading: false
        }
    }
}

// eslint-disable-next-line react/prop-types
export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchProducts = async (category) => {
        const res = await fetch(`/data/${category}.json`)
        const data = await res.json()
        dispatch({ type: "SET_PRODUCTS", payload: data.products })
    }
    const fetchCategories = async () => {
        const res = await fetch(API_MENU)
        const data = await res.json()
        dispatch({ type: "SET_MENU", payload: data.pageProps.categories })
    }

    useEffect(() => {
        //fetchProducts()
        fetchCategories()
    }, [])

    return (
        <ProductsContext.Provider
        value={{ products: state.products, menu: state.menu, categories: state.categories, loading: state.loading, error: state.error, fetchProducts }}
        >
        {children}
        </ProductsContext.Provider>
    )
}