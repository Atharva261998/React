function findArray(){
    var guest = ["sonu","monu","golu","molu"];
    var input = prompt("what is your name");

    if(guest.includes(input)){
        var alert1=alert("welcome");
    }
    else{
        var alert2=("go home");
    }

}findArray();


// push pop
var push = [1,2,3,4,5]
push.pop();
console.log(push);

let numbers = [];
let count =1;

function addNo(){
    numbers.push(count);
    console.log(numbers);

   
}addNo();
