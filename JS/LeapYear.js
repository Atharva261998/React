function leapYear(){
    let year=2023;
    function div4(){
        if (year % 4 ==0){
            console.log("leap year");
        }
        else{
            console.log("no leap year")
        }

    }div4();
    function div100(){
        if(year / 100 ==0){
            console.log("no leap year")
        }
        else{
            console.log("leap year")
        }
    }div100;
    function div400(){
        if(year / 400 ==0){
            console.log("leap year")
        }
        else{
            console.log("No leap year")
        }

    }div400;
}
leapYear();