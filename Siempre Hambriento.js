function siempreHambriento(arr) {
  var conhambre = false;
  for(var i = 0;i < arr.length; i++){
    if(arr[i] === "comida"){
      conhambre = true;
      console.log("delicioso");
    }
  }
  if(conhambre){
    console.log("Tengo hambre");
  }
}
   
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"
