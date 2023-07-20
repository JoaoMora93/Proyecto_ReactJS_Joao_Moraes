import { Header } from "./components/Header/Header"
import './App.css'
import './index.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {


  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
        <Route path="*" element={ <Navigate to="/"/> }></Route>
        
      </Routes>
      
    </BrowserRouter>
  )
}

export default App