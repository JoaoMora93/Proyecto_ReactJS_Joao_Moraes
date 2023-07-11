import { Header } from "./components/Header/Header"
import './App.css'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {


  return (
    <div>
      <Header />
      <ItemListContainer bienvenida={"Bienvenidos/as a Amaris"}/>
    </div>
  )
}

export default App