// function song(){
//     var numbers= 99;

//     while(numbers>=1){
//         console.log(numbers+" bottels of beer on the wall"+numbers+" bottels of beer"
//                      +"take one down and pass it around"+(numbers -1)+" bottels of beer on the wall")
//     }
//           numbers--; 
                  
// }song();

function song(){
    var no=99;
while(no >=1){
    console.log(no+" bottels of beer on the wall "+no+" bottels of beer ")
    console.log("take one down and pass it around "+(no-1)+" bottels of beer on the wall");
    no--;
}
}song();



// function print(){
//     var num=99;
//     while(num ===1){
//             console.log(no+" bottels of beer on the wall "+no+" bottels of beer ")
//             console.log("take one down and pass it around "+(no-1)+" bottels of beer on the wall");
//         num--;
//     }
// }print();


function forLOop(){
    var numb=99;
    for(numb=99;numb>=0;numb--){
        console.log(numb+" bottels of beer on the wall "+numb+" bottels of beer ")
        console.log("take one down and pass it around "+(numb-1)+" bottels of beer on the wall");

    }
}forLOop();


function fizzBuzz(){

    for(var a=1;a<=99;a++){
        if(a%3===0 && a%5===0){
            console.log("FizzBuzz")
        }
        // else{
        //     console.log(a)
        // }
        else if(a%3===0){
            console.log("Fizz");
        }
        else if(a%5===0){
            console.log("Buzz")
        }
        else{
            console.log(a);
        }
        // else{
        //     console.log(a)
        // }
    }
    
}fizzBuzz();