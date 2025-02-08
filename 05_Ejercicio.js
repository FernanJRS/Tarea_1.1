/*Ejercico 5:
Cree una función llamada generarReporte que:
- Reciba un array de objetos de ventas con producto y monto.
- Retorne un objeto con:
  * totalVentas: suma de todos los montos.
  * promedio: monto promedio por transacción.
  * cantidadTransacciones: número total de ventas. */

const generarReporte = (ventas) => {
    
    //* Variables que almacenaran el valor del total de las ventas y la cantidad de productos en el arreglo recibido
    let totalVentas = 0
    let cantidadProductos = ventas.length

    //* Ciclo que almacena el monto total en una variable
    for (let i = 0; i < ventas.length; i++) {
        totalVentas += ventas[i]["monto"]
    }

    //* Objeto retornado que contiene el total de las ventas, el gasto promedio y las transacciones realizadas
    return {
        totalVentas : totalVentas,
        promedio : totalVentas / cantidadProductos,
        cantidadTransacciones : cantidadProductos
    }

}

const ventas = [ 
    { producto: "TV", monto: 1000 }, 
    { producto: "Radio", monto: 200 },
    { producto: "Auriculares", monto: 500 },
    { producto: "Ventilador", monto: 300 }
 ];
 
 console.log(generarReporte(ventas))
