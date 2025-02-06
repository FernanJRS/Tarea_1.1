/*  Ejercicio 1:
 Cree una función llamada aplicarImpuestos que:
 - Reciba un array de objetos (productos con nombre y precio).
 - Filtre los productos con precio mayor a 50.
 - Aumente el precio de los productos filtrados agregando un 10% de impuesto.
 - Retorne el nuevo array modificado. */

const aplicarImpuestos = function (productos) {
    
    // Creando copia de la lista original con los productos con un precio mayor a 50 
    const productosSinImpuesto = productos.map((item) => {
        if(item.precio > 50){
            return {...item}
        } 
     }
    )

    // Filtrando la copia de la lista original sin los elementos undefined
    const productosConImpuesto = productosSinImpuesto.filter( (producto) => {
        return producto != undefined
    })

    // Aplicando impuesto del 10% a todos los productos
    productosConImpuesto.forEach( (producto) => {
        producto.precio += producto.precio * 0.1
    })

    // Retornando los productos con el impuesto aplicado
    return productosConImpuesto
}

const listaDeProductos = [
    { nombre: "Camisa", precio: 45 },
    { nombre: "Zapatos", precio: 80 },
    { nombre: "Pantalones", precio: 60 },
    { nombre: "Gorra", precio: 20 },
    { nombre: "Corbata", precio: 15 }
]

// Lista de productos sin aplicar impuestos
console.log(listaDeProductos)

//Lista de productos con impuestos aplicados
console.log(aplicarImpuestos(listaDeProductos))