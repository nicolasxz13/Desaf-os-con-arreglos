function reverse(arr) {
    // tu código aquí
    var temp = [];
    for(var i = arr.length - 1;i >= 0; i--){
      temp.push(arr[i]);
    }
    arr = temp;
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]
