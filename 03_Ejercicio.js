/* Ejercicio 3
 Cree una función llamada contarOcurrencias que:
 - Reciba un array de elementos (strings, números, etc.).
 - Retorne un objeto donde las claves sean los elementos del array y los valores sean la
   cantidad de veces que aparecen. */

const contarOcurrencias = (elementos) => {

    //* Contador que almacenará la cantidad de veces que se repiten los elementos
    let cont = 0

    //* Creación y ordenamiento del Arreglo y el Set que contendrán los elementos únicos que fueron recibidos del arreglo original
    const elementosEnSet = new Set(elementos)
    const elementosUnicos = Array.from(elementosEnSet)
    elementosUnicos.sort()
    
    //* Creación del objeto que será retornado
    const objeto = {}

    //* Ciclo en el que se hará el conteo de los elementos del arreglo 
    for (let i = 0; i < elementosUnicos.length; i++) {
      cont = 0

      for (let j = 0; j < elementos.length; j++) {
        if ( elementosUnicos[i] == elementos[j] ) {
          cont++
        } 
      }
      
      objeto[`${elementosUnicos[i]}`] = cont
    }
    
    //* Retorno del objeto con los elementos contados
    return objeto

}

const elementos = ["a", "b", "a", "c", "b", "e", "f", "a", "b", "a", "c", "b", "e", "f", "d", "g", "d" ]; 
const elementos2 = ["a", "b", "a", "c", "b"];

console.log(elementos)
console.log(contarOcurrencias(elementos))
console.log("****************************************")
console.log(elementos2)
console.log(contarOcurrencias(elementos2))