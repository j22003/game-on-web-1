
let currmoletile;
let currplanttile;
let score = 0;
let gameover = false;
//var
function getrandomtile(){
    let num = Math.floor(Math.random()*9);
    return num.toString();
}
//math function

window.onload = function(){
    setgame();
}
//this function  is the main one 

function setgame(){
    // set up the grid for the board in html
    for(var i = 0;i < 9;i++){ 
        // i goes from 0-8,total = 9
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile)
    }
    setInterval(setmole, 2000);
    //call the function every one seconds
    setInterval(setplant, 3000);
    //call the function every two seconds
}

function selectTile(){

    if(gameover == true){
        return;
    }
    else if(this == currmoletile){
        score += 10;
        document.getElementById("score").innerHTML =  score.toString();
    }
    else if(this == currplanttile){
        gameover = true;
        document.getElementById("score").innerHTML = "GAME OVER" + " : " +score.toString();
    }
}

function setmole(){

    if(gameover == true){
        return;
    }

    if(currmoletile){
        currmoletile.innerHTML = " ";
    }

   
    let mole = document.createElement("img");
    mole.src = "https://www.svgrepo.com/show/475454/tree.svg";


    let  num = getrandomtile();

    if(currmoletile && currmoletile.id == num){
        return;
    }

    currmoletile = document.getElementById(num);
    currmoletile.appendChild(mole);
}
function setplant(){

    if(gameover == true){
        return;
    }

    if(currplanttile){
        currplanttile.innerHTML = " ";
    }

    let plant = document.createElement("img");
    plant.src = "https://tse4.explicit.bing.net/th?id=OIP.HzL7exEmqDAjOsRu0VLMpwHaFq&pid=Api&P=0&h=220";

    let  num = getrandomtile();
    if(currplanttile && currplanttile.id == num){
        return;
    }
    currplanttile = document.getElementById(num);
    currplanttile.appendChild(plant);
//if p1 love p2 = Gay
}

