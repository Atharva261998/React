function getMilk(money,eachBottleprize) {  
     
    console.log("moveUp");
    console.log("moveRight");
   
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("Buy " + bottelscalc(money, eachBottleprize) + " bottels of milk from the store" );
    console.log("the change wiil be" + calcChange(money,eachBottleprize));

function bottelscalc(rupees,eachBottleprize){
    calc= rupees / eachBottleprize;
     return calc;
}
function calcChange(totalrupee,eachBottleprize ){
     var change =totalrupee % eachBottleprize;
    return change;
}
}
getMilk(6,2);


   

  
  var change=getMilk(5);
  console.log(change);


   
  function life(age){
    var x= 365 * 90;
    var days = (x-age);
    
    var y= 52 * 90;
    var weeks= (y-age);
    
    var z= 12 * 90;
    var months =(z-age);
    
    
    console.log("days ="+ days +" weeks"+ weeks + " months"+ months );
}
life(12);


 
 
  

  