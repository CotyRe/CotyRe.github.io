import logo from '../assets/statics/logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../containers/Home"
import Layout from "../components/Layout";
import Cafe from '../containers/Cafe';
import ExperienciaStarbucks from '../containers/ExperienciaStarbucks';
import Menu from "../containers/Menu"
import { ProductsProvider } from '../context/Context';
import Producto from "../containers/Producto"
import Categoria from "../containers/Categoria"
//import UsarContexto from "../context/UsarContexto";

function App() {
  return (
    <>
    <ProductsProvider>
      <BrowserRouter>

          <Layout>
            <Routes >
              <Route path="/" element={<Home/>}/>
              <Route path="/menu" element={<Menu/>}/>
              <Route path="/menu/:cat/:subcat" element={<Categoria/>}/>
              <Route path="/producto/:url" element={<Producto/>}/>
              <Route path="/cafe" element={<Cafe/>}/>
              <Route path="/experiencia-starbucks" element={<ExperienciaStarbucks/>}/>
            </Routes>
          </Layout>

      </BrowserRouter>
    </ProductsProvider>
    
    </>
  );
}

export default App;
