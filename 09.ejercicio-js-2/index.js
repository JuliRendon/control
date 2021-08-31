'use strict';

/* 
# Ejercicio 2

Crea un programa que imprima cada 5 segundos el tiempo desde la ejecución del mismo. 
Formatea el tiempo para que se muestren los segundos, los minutos, las horas y los días desde la ejecución.
*/

let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

setInterval(() => {
  if (hours === 23 && minutes === 59 && seconds === 55) {
    days += 1;
  }
  if (minutes === 59 && seconds === 55) {
    minutes = -1;
    hours += 1;
  }
  if (seconds === 55) {
    seconds = 0;
    minutes += 1;
  } else {
    seconds += 5;
  }

  console.log(
    'Dias:' +
      days +
      ' Horas:' +
      hours +
      ' Minutos:' +
      minutes +
      ' Segundos:' +
      seconds
  );
}, 5000);
