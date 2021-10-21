//https://www.w3schools.com/js/js_number_methods.asp

const num1 = 5;
const num2 = 8;
const pi = 3.141516;
const str = "145";

console.log(`suma: 5 + 8`);
//dentro del %{} nos va a hacer la operación!
console.log(`suma: ${5 + 8}`);
console.log(`suma: ${num1 + num2}`);
console.log(`resta: ${num1 - num2}`);
console.log(`multiplicacion: ${num1 * num2}`);
console.log(`division: ${num1 / num2}`);
console.log(`potencia: ${num1 ** num2}`);

//resto:es lo que queda de la division
console.log(`resto: ${num2 % num1}`);

//decidir la cantidad de decimales que queremos:
console.log(`toFixed: ${pi.toFixed(2)}`); //2 suele ser lo que mas se usa porque son los centavos. se puede poner tantos como necesitemos

//a veces cuando fijamos a muchos mas de los decimales que trae... hacemos coasa raras:
console.log(`toFixed: ${pi.toFixed(30)}`);

//para redondear: floor es pio, ceil es techo. Uno va para abajo, otro para arriba
console.log(`toFloor: ${Math.floor(pi)}`);
console.log(`toCeil: ${Math.ceil(pi)}`);

///sacar una raiz cuadrada con Math:
console.log(`sacando raiz: ${Math.sqrt(36)}`);

//sacar numero random entre 0 y 1 y hacer que solo sea de 2 decimelas de largo:
console.log(`numero random: ${Math.random(p).toFixed(2)}`);

//sacar del 1 al 10:
let random = Math.random().toFixed(1);
console.log(parseFloat(random) * 10);

//cambiar el type:
//dos formas principales:
console.log('to number:', Number(str))
console.log('to number:', parseInt(str))
console.log('to number:', typeof Number(str), Number(str))
console.log(typeof str);

///numero a string
console.log("to string:", num1.toString())

