import { Header } from "./components/Header/Header"
import './App.css'
import './index.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        
      </Routes>
      
    </BrowserRouter>
  )
}

export default App