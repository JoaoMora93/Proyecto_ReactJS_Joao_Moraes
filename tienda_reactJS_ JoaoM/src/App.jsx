import { Header } from "./components/Header/Header"
import './App.css'
import './index.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./context/CartContext"
import CartView from "./components/CartView/CartView"

function App() {

  return (
    <CartProvider>

      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer /> } />
          <Route path="/cart" element={ <CartView />} />
          <Route path="*" element={ <Navigate to="/"/> } />
          
        </Routes>
        
      </BrowserRouter>

    </CartProvider>
  )
}

export default App