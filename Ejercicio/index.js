function mayorValor(num1, num2) {
    if (num1 > num2) {
        console.log("El primer valor es mayor que el segundo.")
    } else if (num2 > num1) {
        console.log("El segundo valor es mayor que el primero.")
    } else {
        console.log("Ambos números son iguales.")
    }
}

function esMayor() {
    let numero1 = parseInt(prompt("Introduce el primer número a comparar."))
    let numero2 = parseInt(prompt("Introduce el segundo número a comparar."))
    if (numero1 > numero2) {
        console.log("El primer valor es mayor que el segundo.")
    } else if (numero2 > numero1) {
        console.log("El segundo valor es mayor que el primero.")
    } else {
        console.log("Ambos números son iguales.")
    }
}

function calculadora() {
    let cont = 0
    while (cont == 0) {
        let decision = prompt("Bienvenido a la calculadora suprema!!!\nPor favor indica cual función quieres utilizar \n(1) Sumar\n(2) Restar\n(3) Multiplicar\n(4) Dividir\n(5) Raíz cuadrada de un número\n(6) Identificar la longitud de una cadena de texto\n(7) Invertir una cadena de texto\n(8) Repetir el texto de una cadena\n(9) Agregar valores al principio de un array")
        if (decision == 1) {
            let numero1 = parseInt(prompt("Introduce el primer número a sumar."))
            let numero2 = parseInt(prompt("Introduce el segundo número a sumar."))
            alert(numero1 + numero2)
        } else if (decision == 2) {
            let numero1 = parseInt(prompt("Introduce el primer número a restar."))
            let numero2 = parseInt(prompt("Introduce el segundo número a restar."))
            alert(numero1 - numero2)
        } else if (decision == 3) {
            let numero1 = parseInt(prompt("Introduce el primer número a multiplicar."))
            let numero2 = parseInt(prompt("Introduce el segundo número a multiplicar."))
            alert(numero1 * numero2)
        } else if (decision == 4) {
            let numero1 = parseInt(prompt("Introduce el primer número a dividir."))
            let numero2 = parseInt(prompt("Introduce el número por el cual se dividirá."))
            alert(numero1 / numero2)
        } else if (decision == 5) {
            let numero1 = parseInt(prompt("Introduce el número al que quieras conocer la raíz cuadrada."))
            alert("La raíz cuadrada de " + numero1 + " es " + Math.sqrt(numero1))
        } else if (decision == 6) {
            let cadena = prompt("Introduce la cadena de texto de la cual quieras saber su longitud.")
            alert("La longitud de la cadena de texto (" + cadena + ") es " + cadena.length)
        } else if (decision == 7) {
            let cadena = prompt("Introduce la cadena de texto de la cual quieras invertir.")
            var separarCadena = cadena.split("");
            var invertirArreglo = separarCadena.reverse();
            var unirArreglo = invertirArreglo.join("");
            alert("La inversión de la cadena de texto (" + cadena + ") es (" + unirArreglo + ")")
        } else if (decision == 8) {
            let cadena = prompt("Introduce la cadena de texto que quieras repetir.")
            let reps = parseInt(prompt("Introduce la cantidad de veces que quieras repetirlo."))
            alert(cadena.repeat(reps))
        } else if (decision == 9) {
            var arrayOrigin = ["Esta", "calculadora", "es", "genial"]
            alert("El array al cual le vas a agregar algo es " + arrayOrigin)
            let cadena = prompt("Introduce el valor a agregar al principio del array.")
            var superArray;
            for (i = 0; i < arrayOrigin.length + 1; i++){
                if(i==0){superArray.push(cadena)}
                else{superArray.push(arrayOrigin[i-1])}}
            alert("El nuevo array es " + superArray)
        } else if (decision == 10) {
            alert("Entonces que haces aqui?")
            cont = 1
        } else if (decision == 11) {
            alert("Entonces que haces aqui?")
            cont = 1
        } else if (decision == 16) {
            alert("Entonces que haces aqui?")
            cont = 1
        } else {
            alert("Escogiste una decision que no existe, por favor salga de aqui.")
            cont = 1
        }
    }
}