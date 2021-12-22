// constants



const direction = {x:0, y:0}
const foodsound = new Audio('food.mp3')
const gameOverSound = new Audio('gameover.mp3')
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('music.mp3')
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x:13, y:15}
]

let food = {
    x:10, y:9


}





// functions
 function main(ctime){
     window.requestAnimationFrame(main)
     console.log(ctime)
     if(  (ctime-lastPaintTime)/1000 < 1/speed  ){
         return;
     }
     lastPaintTime= ctime;
     gameEngine();
 }


 function gameEngine(){
    //  part1 updating the snake array & food



    // part2 display the snake 
    board.innerHTML= "";
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridColumnStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0){
            snakeElement.classList.add('head')
        }else{

            snakeElement.classList.add('snake')
        }
        board.appendChild(snakeElement)

    })
    // display the food/
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement)
 }

















// game loop main logic

window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir= {x:0 ,y:1}
})
