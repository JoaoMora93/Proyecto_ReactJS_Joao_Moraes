import { Header } from "./components/Header/Header"
import './App.css'
import './index.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { useState } from "react"
import { CartContext } from "./context/CartContext"

function App() {
  const [cart, setCart] = useState([])

  console.log(cart)

  const agregarAlCarrito = (item) => {
    setCart([...cart, item])
  }

  return (
    <CartContext.Provider value={{
      cart,
      agregarAlCarrito
    }}>


      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer /> } />
          <Route path="*" element={ <Navigate to="/"/> }></Route>
          
        </Routes>
        
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App