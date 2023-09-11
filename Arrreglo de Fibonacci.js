function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    // tu código aquí
    //Supongo que se cuentan las dos posiciones base fibArr.
    var count = 2;
    while(count !== n){
      fibArr.push(fibArr[fibArr.length-2] + fibArr[fibArr.length-1]);
      count++;
    }

    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
