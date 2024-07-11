function BMI(weight,height){
    var meter=3.24;
    var calcheight=height* meter; 
    var calcBmi= weight / calcheight;
    console.log("BMI is " + calcBmi);

}

// function Height(height){
//     var meter=100/1000;
//     var calc= (height * height)* (meter * meter);
//     return calc;

// }


BMI(700,3.24);






// Advance BMI
function adBMI(){
    var weight= 70;
    let height =3.24;
    let calculateBMI = Math.floor(weight/height);
    if (calculateBMI <17){
       
        alert("your BMI is "+calculateBMI+" your under weight");
    }
    else if(calculateBMI > 18 && calculateBMI <= 25){
        alert("your BMi is "+calculateBMI +" very good progress");
    }
    else{
        alert("start working on yourself otherwise it will be late")

    }
console.log(calculateBMI);


}
adBMI();