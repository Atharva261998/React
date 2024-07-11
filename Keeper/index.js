const cart=["shoes","pant","shirt"];

//Callback Function
// issue over here is "Inversion Control"
createOrder(cart);
//PROMISES
//Promise is nothing but a empty object having data value in it.
const promise= createOrder(cart);
//Afetr execution of createOrder data get stored in promise object
// then we have to use ".then".
// here we attaching the callback function to the promise.
promise.then(function (orderId){
    proceedToPayment(orderId)});

// Promise State:-It tells you in what state in Promise is
// Promise Result:-what ever data the fetch() method returns going to store in the promise result   

const New_API="shbhdshvscvtfgvxsbvzxbvgcgscgvxbnvgct";
//Promise
const user=fetch(New_API);

console.log(user);

user.then(function(data){
    console.log(data);     // attachment of callback inside promises
})


//Promise chain
createOrder(cart)
.then(function(showSummary){
    return proceedToPayment(showSummary)
})
.then(function(showCofirmation){
    return cancelProduct(showCofirmation)
})

// Using Arrow function
createOrder(cart)
.then(showSummary =>proceedToPayment(showSummary))
.then(showCofirmation =>cancelProduct(showCofirmation));



