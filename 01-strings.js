const texto = "este es un texto de prueba, sarasa sarasa";
const num = 145;

console.log(texto.length);       //tiene 41 de largo
console.log(texto.charAt(6));    //pero si el primero es 0, el último es 40
console.log(texto[6]);           //es lo mismo que usar charAt.chorchete sin punto adelante, solo punto al final. Podemos acumular varios metodos, ver el largo,etc, pero sigue siendo el mismo texto al final

//esto no va a funcionar:
console.log(num.length);

