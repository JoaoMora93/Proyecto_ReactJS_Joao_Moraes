import { useEffect, useState } from "react"
import { pedirDatos } from "../../Helpers/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"




const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)

    const { itemId } = useParams()

    console.log(itemId)
    console.log(item)

    useEffect(() => {

        pedirDatos()
        .then(res => {
            setItem( res.find(prod => prod.id === Number(itemId) ))
        })
    }, [])

    return (
        <div>
            {
                <ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer