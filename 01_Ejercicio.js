const aplicarImpuestos = (productos) => {
     
    //agregando impuesto del 10%
    const productosConImpuesto = productos.map((item) => {
        if(item.precio > 50){
            item.precio += (item.precio * 0.1)
            return item
        } }
    )
    
    return productosConImpuesto.filter((producto) => producto != undefined)
}

const listaDeProductos = [ 
    { nombre: "Camisa", precio: 45 },
    { nombre: "Zapatos", precio: 80 }, 
    { nombre: "Pantalones", precio: 60 },
    { nombre: "Gorra", precio: 20 },
    { nombre: "Corbata", precio: 15 }
]

console.log(listaDeProductos)
console.log(aplicarImpuestos(listaDeProductos))