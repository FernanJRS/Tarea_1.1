/*    Ejercicio 2:
Cree una función llamada actualizarStock que:
- Reciba un array de productos (objetos con id, nombre, y stock), un id, y un nuevoStock.
- Busque el producto con el id especificado.
- Si existe, actualice su propiedad stock con el nuevoStock.
- Retorne el array modificado. Si el producto no existe, retorna null. */

const actualizarStock = function ( productos, id, nuevoStock) {
    
    //* Variable que verificará si el id recibido existe en la lista productos 
    let encontrado = false

    //* Ciclo el cual modificará el tamaño del stock antes de la modificación
    for (let index = 0; index < productos.length; index++) {
        if (productos[index]["id"] === id) {
            productos[index]["stock"] = nuevoStock
            encontrado = true
            break
        }
    }

    //* Evaluacion de la variable encontrado para determinar que va a devolver la función
    if (encontrado) {
        return productos
    } else {
        return null
    }

}

const productos = [ 
    { id: 1, nombre: "Lápiz", stock: 10 }, 
    { id: 2, nombre: "Cuaderno", stock: 5 },
    { id: 3, nombre: "Cartucheras", stock: 8}, 
    { id: 4, nombre: "Sacapuntas", stock: 12}, 
  ];

console.log(actualizarStock(productos, 2, 20))
