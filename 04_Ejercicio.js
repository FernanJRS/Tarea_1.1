/* Ejercicio 4
 Cree una función llamada combinarUsuarios que:
 - Reciba dos arrays:
   usuarios: array de objetos con id y nombre.
   detalles: array de objetos con id y propiedades adicionales (ej: edad).
 - Combine ambos arrays en uno solo, fusionando los objetos que compartan el mismo id. */

const combinarUsuarios = (usuarios, detalles) => {
    
    //* Array que será retornado
    const usuariosCombinados = []

    //* Ciclo que verifica el id de los objetos de los arreglos recibidos
    for (let i = 0; i < usuarios.length; i++) {
        for (let j = 0; j < detalles.length; j++) {
            if (usuarios[i].id == detalles[j].id) {
                //* Adición del usuario con todos sus datos correspondientes
                usuariosCombinados.push({ id: detalles[j].id, nombre: usuarios[i].nombre, ...detalles[j] })
            }            
        }
    }

    //* Retornando el arreglo con los datos de los usuarios
    return usuariosCombinados
}

const usuarios = [{ id: 1, nombre: "Juan" }, { id: 2, nombre: "Pedro" }]; 
const detalles = [{ id: 1, edad: 25 , estadoCivil: "Casado"}, { id: 2, edad: 30 }]; 

console.log(combinarUsuarios(usuarios,detalles))