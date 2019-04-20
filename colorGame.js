var numSquare = 6;
var colors = generateRandomColor(numSquare);
var squares= document.querySelectorAll(".square"); //select all the square instead of only one square div
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn")


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquare=3;
    colors= generateRandomColor(numSquare);
    pickedColor= pickColor();
    colorDisplay.textContent= pickedColor;
    
    for(var i=0;i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquare=6;
    colors= generateRandomColor(numSquare);
    pickedColor= pickColor();
    colorDisplay.textContent= pickedColor;
    
    for(var i=0;i<squares.length; i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
        }
});

resetButton.addEventListener("click",function(){
    //generate all new color
    colors = generateRandomColor(numSquare);
    //pick a new random color
    pickedColor=pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent=pickedColor;
    //change colors of squares
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor= "steelblue";
    resetButton.textContent="New Colors";
    messageDisplay.textContent="";
});

colorDisplay.textContent= pickedColor;

for (var i= 0;i<squares.length; i++){
    // add intial color to squares
    squares[i].style.backgroundColor= colors[i];

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
};

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