/* Equivalencias:
    1 Euro = 127.9 Yen
    1 Euro = 1.2 USD
    1 Euro = 0.8 GBP
*/

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = Number((valueInEuro * 1.2).toFixed(2));
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    let valueInYen = Number(((valueInDollar / 1.2) * 127.9).toFixed(2));
    return valueInYen
}
const fromYenToPound = function(valueInYen){
    let valueInPound = Number(((valueInYen / 127.9) * 0.8).toFixed(2));
    return valueInPound
}

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };