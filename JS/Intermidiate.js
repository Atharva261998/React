function male(){
    var him= prompt("What is your Name ?")

    function female(){
        var her=prompt("What is her name ?")
    }female();
     function percent(){
        var calc= Math.random() * 100;
        console.log(calc);
       var round= Math.floor(calc);
        console.log(round);
        

        if (round > 50){
            var ans= alert("Percentage is " + round+" % "+" you love each other");

        }
        if(round >20 && round<= 50){
            var ans= alert("Percentage is " + round+" % "+" mid love");

        }
        if(round <20){
            var ans= alert("Percentage is " + round+" % "+" no love");

        }
     }percent();
    }
male();





