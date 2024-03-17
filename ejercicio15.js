//Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.


const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];
/*function swap(array, item1, item2) {
  const index1 = array.indexOf(item1);
  const index2 = array.indexOf(item2);
    // Intercambiar elementos usando la asignación directa
    [array[index1], array[index2]] = [array[index2], array[index1]];
  
}

swap(fantasticFour, "La antorcha humana", "Mr. Fantástico");
console.log(fantasticFour);*/

function swap(array, posicion1, posicion2) {
  // Intercambiar elementos usando la asignación directa
    let variableApoyo = array[posicion1];

    array[posicion1] = array[posicion2];
    array[posicion2] = variableApoyo;
}

swap(fantasticFour, 1, 3);
console.log(fantasticFour);