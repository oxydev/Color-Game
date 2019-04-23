var numSquare = 6;
var colors = [];
var pickedColor = pickColor();
var squares= document.querySelectorAll(".square"); //select all the square instead of only one square div
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquare();
    reset();
}

function setUpModeButtons(){
    for(var i=0; i< modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            this.classList.add("selected");
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent=== "Easy" ? numSquare =3: numSquare=6; //ternary if Easy 3 else 6
            reset();
        });
    }
}

function setUpSquare(){
    for (var i= 0;i<squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            // add color of clicked square
            var clickedColor=this.style.backgroundColor;
            //compare color to picked Color
            if(clickedColor===pickedColor){
                messageDisplay.textContent="Correct!!!";
                h1.style.backgroundColor=clickedColor;
                resetButton.textContent="Play Again?";
                changeColor(clickedColor);
            }else{
                this.style.backgroundColor="#232323";
                messageDisplay.textContent="Try Again!!!";
            }
        });
    }
}

function reset(){
    colors = generateRandomColor(numSquare);
    //pick a new random color
    pickedColor=pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent=pickedColor;
    resetButton.textContent="New Colors";
    //change colors of squares
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor= "steelblue";
    messageDisplay.textContent="";
}

resetButton.addEventListener("click",function(){
   reset();
});

function changeColor(color){
    //loop through all squares
    for(var i=0; i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
    //change each color to match given color
}

function pickColor(){
    var random=Math.floor(Math.random()* colors.length);
    return colors[random];
}

function generateRandomColor(num){
    //make a array
    var arr=[];
    //repeat num times
    for(var i=0;i<num;i++){
        //add num random color and push into array     
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a 'red' from 0-255
    var r=Math.floor(Math.random()*256);
    //pick a 'green' from 0-255
    var g=Math.floor(Math.random()*256);
    //pick a 'blue'from 0-255
    var b=Math.floor(Math.random()*256);
    
    return "rgb(" + r +", "+g+", "+b+")"; 
}