var random1 = Math.floor(Math.random()*6) + 1;
var random2 = Math.floor(Math.random()*6) + 1;

if(random1>random2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else if(random1<random2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else{
    document.querySelector("h1").innerHTML = "It's a Draw!";
}

if(random1===1){
    document.querySelector(".img1").setAttribute("src", "./dice1.png" );
}
if(random1===2){
    document.querySelector(".img1").setAttribute("src", "./dice2.png" );
}
if(random1===3){
    document.querySelector(".img1").setAttribute("src", "./dice3.png" );
}
if(random1===4){
    document.querySelector(".img1").setAttribute("src", "./dice4.png" );
}
if(random1===5){
    document.querySelector(".img1").setAttribute("src", "./dice5.png" );
}
if(random1===6){
    document.querySelector(".img1").setAttribute("src", "./dice6.png" );
}



if(random2===1){
    document.querySelector(".img2").setAttribute("src", "./dice1.png" );
}
if(random2===2){
    document.querySelector(".img2").setAttribute("src", "./dice2.png" );
}
if(random2===3){
    document.querySelector(".img2").setAttribute("src", "./dice3.png" );
}
if(random2===4){
    document.querySelector(".img2").setAttribute("src", "./dice4.png" );
}
if(random2===5){
    document.querySelector(".img2").setAttribute("src", "./dice5.png" );
}
if(random2===6){
    document.querySelector(".img2").setAttribute("src", "./dice6.png" );
}
