// Javascript Objects
var HouseKeeper ={
    Name : "lina",
    age:"20",
    salary:"25k",
    hobbies:["singing","dancing","reading",]
}

//Constructor function
//create a function and first letter of the function has to be captalised
//Creation of construction function
function HouseKeeper(name,age,hobbies){
    this.name=name;
    this.age=age;
    this.hobbies=hobbies;
}
//initialisation of constructor function
var houseKeeper1= new HouseKeeper("jack","60",["dancing","singing"]);
var houseKeeper2= new HouseKeeper("mack","50",["dancing","singing"]);

function crickter(batsman,bowler,allrounder){
    this.batsman=batsman;
    this.bowler=bowler;
    this.allrounder=allrounder;
}

var opener= new crickter("rohit","shami","ashwin");

//constructor function
function BellBoy(name,surname,school){
    this.name=name;
    this.surname=surname;
    this.school=school;
}
//initilise object
var bellBoy1= new BellBoy("atharva","kulkarni","bvb");
var bellboy2 =new BellBoy("ram","tekale","aided");



//Methods

function cleanTheArea() {
    alert("Cleaning in progress")

}

//Adding object to this method using constructor function

function houseKeeper(name,surname,age){
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.cleanTheArea=function (){
        alert("Cleaning in progress")
    }

}
 
//initilised object
var houseKeeper1=new houseKeeper("romeo","desuza","23")
houseKeeper1.cleanTheArea();


//constructor function

function chips(type,color){
    this.type=type;
    this.color=color;
    this.fry=function(){
        alert("chips are ready to fry")
    }

}

var salted = new chips("potato","red")
salted.fry();


function batting(){
    alert("nice batting")
}


//constructor function
function play(type,record){
    this.type=type;
    this.record=record;
    this.player=function(){
        alert("player is playing ")
    }
}

//initilised object
var player1 = new play("right handed","very good record");
player1.player();

//Callback

function callBack (to){
    console.log("hello" +  to)
}

callBack("atharva");