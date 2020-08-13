//Starts onload
window.onload = function(){
    createBoard();
    runTest();
};

//Alphabet for reference 
const alphabet = ["a","b","c","d","e","f","g","h"]

//Board creation function
function createBoard(){
    let table = elem("board");
    for (let x = 0; x < 8; x++) {
        table.innerHTML += "<tr id='row" + x + "''></tr>"
        for (let y = 0; y < 8; y++) {
            let id = "b" + (y + "-") + (7-x);
            elem("row" + x).innerHTML += "<td onmousedown='handleMouseDown(" + y + "," + (7-x) + ")' id='" + id + "'></td>"
            if (x == 7) {
                elem(id).innerHTML += "<div class='marker file_marker no_select' id='f" + y + "'>" + alphabet[y] + "</div>"
            }
            if (y == 7) {
                elem(id).innerHTML += "<div class='marker rank_marker no_select' id='r" + (7-x) + "'>" + (8-x) + "</div>"
            }
        }
    }
}

//rotate the board function
function rotateBoard(){
    renderer.rotateBoard();
}

//Useful element functions
function elem(e){
    return document.getElementById(e);
}

function removeElement(e) {
    let element = elem(e);
    element.parentNode.removeChild(element);
}

//mouse event handlers
function handleMouseMove(){
    console.log(" oaeifj");
}

function handleMouseDown(x, y){
    console.log("drag");
}

//TEST FUNCTION
let game;
let renderer;
function runTest(){
    game = new Game();
    renderer = new Renderer(game);
    renderer.drawBoard();
}