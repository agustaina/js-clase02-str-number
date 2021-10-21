const texto = "este es un texto de prueba, sarasa sarasa";

//vamos a cortar strings:
console.log('usando slice para cortar: ', texto.slice(0, 26))
console.log('usando slice para cortar: ', texto.slice(27, 41))
console.log('usando slice para cortar: ', texto.slice(27))
console.log('usando slice para cortar: ', texto.slice(-6))
console.log('usando slice para cortar: ', texto.slice(-13, -6))

//reemplazar palabras:
console.log("reemplazar la primera ocurrencia: ", texto.replace('sarasa', 'gatitos'))
//g es global (todas las ocurrencias), i es insensitive (mayusc/minusc). Sin la g, reemplaza solo el primero. Sin la i, si hay mayusculas/minusculas no las reemplaza.
console.log("reemplazar todas las ocurrencias: ", texto.replace(/sarasa/gi, 'gatitos'))
console.log("reemplazar todas las ocurrencias: ", texto.replace(/a/gi, 'o'))

//mayusc,minusc
console.log("a minisculas" + texto.toLowerCase())
console.log(`a mayúscula: ${texto.toUpperCase()}`)

//no es lo mas usado, pero el locale tiene en cuenta el idioma del usuario )si les hace cosas raras con los acentos pueden usar esto
console.log(`a mayuscula: texto ${texto.toLocaleUpperCase()}`)

//convertin a array:
console.log('a array:', texto.split (''))
//con esto separa usando los espacios:
console.log('a array:', texto.split (' '))
//con esto va a separar los textos con la coma
console.log('a array:', texto.split (','))
//ahora quiero separar y que me traiga el segundo elemento del array:
console.log('a array:', texto.split (',') [1])

//undefined no es un error! es el estado en que estan las cosas
console.log("a array:", texto.split(",")[5])


