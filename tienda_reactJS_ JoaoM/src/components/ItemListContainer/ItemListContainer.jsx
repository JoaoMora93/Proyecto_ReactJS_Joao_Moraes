import './ItemListConteiner.scss'

const PRODUCTOS_VARIOS = [
    {
        id: 1,
        nombre: 'Producto 1',
        descripción: 'Lorem ipsum...',
        precio: 250,
        img: "../images/_productos/producto-1.jpeg"
    },
    {
        id: 2,
        nombre: 'Producto 2',
        descripción: 'Lorem ipsum...',
        precio: 250,
        img: "../images/_productos/producto-2.jpeg"
    },
    {
        id: 3,
        nombre: 'Producto 3',
        descripción: 'Lorem ipsum...',
        precio: 250,
        img: "../images/_productos/producto-3.jpeg"
    },
    {
        id: 4,
        nombre: 'Producto 4',
        descripción: 'Lorem ipsum...',
        precio: 250,
        img: "../images/_productos/producto-4.jpeg"
    },
    {
        id: 5,
        nombre: 'Producto 5',
        descripción: 'Lorem ipsum...',
        precio: 250,
        img: "../images/_productos/producto-5.jpeg"
    },
    {
        id: 6,
        nombre: 'Producto 6',
        descripción: 'Lorem ipsum...',
        precio: 250,
        img: "../images/_productos/producto-6.jpeg"
    },
]

const ItemListContainer = ({bienvenida}) => {

    const pedirDatos = () => {
        return new Promise((resolve, reject) =>{
            // cuerpo de la promesa
            setTimeout(() => {
                resolve('Promesa resuelta')
            }, 2000)
        })
    }

    pedirDatos()
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })

    return (
        <div>
            <h2>Inicio</h2>
            <hr />
            
            <p>{bienvenida}</p>
            <p>Emprendimiento de sahumadores artesanales y más artículos para la renovación de energía.</p>
            
        </div>
    )

}

export default ItemListContainer