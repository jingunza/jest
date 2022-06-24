// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14,9);
    
    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

/*-----------------------tarea-------------------------------*/
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});

test("10 Dollars should be 1065.83 Yens", function(){
    const { fromDollarToYen } = require('./app.js');
    expect(fromDollarToYen(10)).toBe(1065.83);
});

test("1000 Yens should be 6.25 Pounds", function(){
    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound(1000)).toBe(6.25);
});