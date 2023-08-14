//Con un saludito primero para ser amables.

let entrada = prompt("Buenos días ¿Como te llamas? Ingresa tu nombre");
let salida = entrada + " " + ", que gusto conocerte. \n Procedamos a calcular el promedio de edades ingresadas.";
alert(salida);

//Algoritmo para calcular el promedio de edades ingresadas. 

const cantidadpersonas = prompt("Ingrese la cantidad de personas (en números)");
let sumaedades = 0;

if (cantidadpersonas <= 0) {
    alert("Cantidad de personas NO válida.");
} else {
    for (let i = 0; i < cantidadpersonas; i++) {
        const edades = prompt(`Ingrese la edad de la persona (en números) ${i + 1}:`);
        sumaedades += +edades; 
    }

    const promedioedades = sumaedades / cantidadpersonas;
    alert(`La edad promedio de las personas ingresadas es: ${promedioedades.toFixed(2)}`);
}
