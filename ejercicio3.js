//3.1 Dado el siguiente array, crea una copia usando spread operators.
const numberList = [32, 54, 21, 64, 75, 43]
const copia = [...numberList]
console.log(copia)

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const juguete = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copiaJuguete = {...juguete}
console.log(copiaJuguete)

//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];
const totalPoints = [...pointsList, ...pointsLis2]
console.log(totalPoints)

//3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const finalToy = {...toy, ...toyUpdate}
console.log(finalToy)

//3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const deletecolor = [...colors]
deletecolor.shift(2, 0)
console.log(deletecolor)
console.log(colors)