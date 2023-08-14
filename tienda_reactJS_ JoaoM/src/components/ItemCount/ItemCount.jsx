import { useState } from "react"



const ItemCount = ({max, counter, setCounter}) => {

    const handleRestar = () => {
        counter > 1 && setCounter(counter - 1)
    }

    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }


    return (
        <div>
            <button onClick={handleRestar}>-</button>
            <span>{counter}</span>
            <button onClick={handleSumar}>+</button>
            <br />
            <button className='detalle__btn'>Agregar</button>
        </div>
    )
}

export default ItemCount