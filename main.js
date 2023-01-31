let count = 0;
let color;

document.getElementById("spot1").addEventListener("click", () => {
    document.getElementById("spot1").style.backgroundColor = color;
    colorTurn(count);
})
document.getElementById("spot2").addEventListener("click", () => {
    document.getElementById("spot2").style.backgroundColor = color;
    colorTurn(count);
})
document.getElementById("spot3").addEventListener("click", () => {
    document.getElementById("spot3").style.backgroundColor = color;
    colorTurn(count);
})
document.getElementById("spot4").addEventListener("click", () => {
    document.getElementById("spot4").style.backgroundColor = color;
    colorTurn(count);
})
document.getElementById("spot5").addEventListener("click", () => {
    document.getElementById("spot5").style.backgroundColor = color;
    colorTurn(count);
})
document.getElementById("spot6").addEventListener("click", () => {
    document.getElementById("spot6").style.backgroundColor = color;
    colorTurn(count);
})
document.getElementById("spot7").addEventListener("click", () => {
    document.getElementById("spot7").style.backgroundColor = color;
    colorTurn(count);
})
document.getElementById("spot8").addEventListener("click", () => {
    document.getElementById("spot8").style.backgroundColor = color;
    colorTurn(count);
})
document.getElementById("spot9").addEventListener("click", () => {
    document.getElementById("spot9").style.backgroundColor = color;
    colorTurn(count);
})

function colorTurn(){
    count++
    victory(color);
    if(count%2 ===0){
        color = "red";
    }else{
        color = "blue";
    }
   
}

function victory(color){
    if(document.getElementById("spot1").style.backgroundColor === color && document.getElementById("spot2").style.backgroundColor === color && document.getElementById("spot3").style.backgroundColor === color){
        if(color==="blue"){
            console.log("blue wins")
        }else{
            console.log("red wins")
        }
       

    }
    if(document.getElementById("spot1").style.backgroundColor === color && document.getElementById("spot5").style.backgroundColor === color && document.getElementById("spot9").style.backgroundColor === color){
        if(color==="blue"){
            console.log("blue wins")
        }else{
            console.log("red wins")
        }
    }
    if(document.getElementById("spot1").style.backgroundColor === color && document.getElementById("spot4").style.backgroundColor === color && document.getElementById("spot7").style.backgroundColor === color){
        if(color==="blue"){
            console.log("blue wins")
        }else{
            console.log("red wins")
        }
    }
    if(document.getElementById("spot2").style.backgroundColor === color && document.getElementById("spot4").style.backgroundColor === color && document.getElementById("spot6").style.backgroundColor === color){
        if(color==="blue"){
            console.log("blue wins")
        }else{
            console.log("red wins")
        }
    }
    if(document.getElementById("spot3").style.backgroundColor === color && document.getElementById("spot6").style.backgroundColor === color && document.getElementById("spot9").style.backgroundColor === color){
        if(color==="blue"){
            console.log("blue wins")
        }else{
            console.log("red wins")
        }
    }
    if(document.getElementById("spot3").style.backgroundColor === color && document.getElementById("spot5").style.backgroundColor === color && document.getElementById("spot7").style.backgroundColor === color){
        if(color==="blue"){
            console.log("blue wins")
        }else{
            console.log("red wins")
        }
    }
}

