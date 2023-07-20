import PRODUCTOS_VARIOS from "../data/PRODUCTOS_VARIOS.json"


export const pedirDatos = () => {
    return new Promise((resolve, reject) =>{
        // cuerpo de la promesa
        setTimeout(() => {
            resolve(PRODUCTOS_VARIOS)
        }, 300)
    })
}