import { useState } from "react"



const ItemCount = ({max, counter, setCounter, agregar}) => {

    const handleRestar = () => {
        counter > 1 && setCounter(counter - 1)
    }

    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }


    return (
        <div>
            <div className="detalle__cantidad">
                <button onClick={handleRestar}>-</button>
                <span>{counter}</span>
                <button onClick={handleSumar}>+</button>
            </div>

            <button onClick={agregar} className='detalle__btn'>Agregar</button>
        </div>
    )
}

export default ItemCount