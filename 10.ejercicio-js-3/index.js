/* 
# Ejercicio 3

Crea un programa que reciba un número en decimal o binario y devuelva la conversión:

-   Si le pasamos un nº en decimal debe retornar la conversión a binario.

-   Si le pasamos un nº en binario deberá devolver su equivalente decimal.

Para ello la función deberá recibir un segundo parámetro que indique la base: 10 (decimal) o 2 (binario).

No se permite utilizar el método parseInt().
*/

'use strict';
//let num = '';
// let base = 10;

transformNum(
  prompt('Ingrese el numero a convertir'),
  prompt('A que base desea transformarla?')
);

function transformNum(num, base) {
  let bin = [];
  let result = '';
  let decimal = 0;

  if (base === '2') {
    while (num >= 2) {
      bin.push(num % 2);
      num = Math.floor(num / 2);
    }
    if (num === 1) {
      bin.push(num);
    }
    bin.reverse();
    for (const num of bin) {
      result += num;
    }
    alert(result);
  } else {
    bin = num.split('').reverse();

    for (let i = 0; i < bin.length; i++) {
      decimal += bin[i] * 2 ** i;
    }

    alert(decimal);
  }
}
