function fiboNacci(n){
        var array1=[];
        if (n===1){
            array1 =[0];
            
        }
        else if (n === 2){
            array1=[0,1]
            
        }
        else {
            array1=[0,1];
            for(var i=2;i<n;i++){
                array1.push(array1[array1.length-2] +
                     array1[array1.length-1]);
             }
        }
        return array1;
}
array1=fiboNacci(10);
console.log(array1);




// var pushing=array1.push(0,1,2,3,4,5);
//         console.log(array1);

//         if (array1[array1-1] + array1[array1 -2]){
//             console.log(array1);
//         }
//         else{
//             console.log("not")
//         }
//         }arrayBuilding();