import { useEffect, useState } from "react"
import { pedirDatos } from "../Helpers/pedirDatos"



export const useProductos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then(res => setProductos(res))
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return { productos, loading }
}