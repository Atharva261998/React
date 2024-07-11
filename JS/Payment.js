var names=["sonu","monu","golu","bablu"]
function whosPaying(){
   var arrayLength=names.length;
   var whosGonnaPay=Math.floor(Math.random()* arrayLength);
   var picupPerson= names[whosGonnaPay];
   
   return picupPerson + "is going to pay";


}whosPaying();

