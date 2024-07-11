function main(){
    move();
    turnleft();
    move();
}

function move(){
    move();
    move();
    move();
    move();
    
}

function second(){
    putbeeper();
    moveDiagonal();
    moveDiagonal();
    moveDiagonal();
    moveDiagonal();

}
function moveDiagonal(){
    move();
    moveleft();
    putbeeper();
    move();

}

function third(){
    chessBoardPatern();
    turnleft();
    chessBoardPattern2();
    turnright();
    chessBoardPatern();
    turnleft();
    chessBoardPattern2();
    turnright();
    chessBoardPatern();



}

function chessBoardPatern(){
    putbeeper();
    move();
    putbeeper();
    move();
    putbeeper();
    move();

}

function chessBoardPattern2(){
    move();
    putbeeper();
    move();
    putbeeper();
    move();
}