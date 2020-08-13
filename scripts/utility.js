//Starts onload
window.onload = function(){
    createBoard();
    runTest();
    addEventListeners();
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
            elem("row" + x).innerHTML += "<td onmousemove='ui.mouse.boardX = " + y + "; ui.mouse.boardY = " + (7-x) + "' onmousedown='ui.handleMouseDown(" + y + "," + (7-x) + ")' id='" + id + "'></td>"
            if (x == 7) {
                elem(id).innerHTML += "<div class='marker file_marker no_select' id='f" + y + "'>" + alphabet[y] + "</div>";
            }
            if (y == 7) {
                elem(id).innerHTML += "<div class='marker rank_marker no_select' id='r" + (7-x) + "'>" + (8-x) + "</div>";
            }
        }
    }
}

//rotate the board function
function rotateBoard(){
    ui.rotateBoard();
}

//Add event listeners
function addEventListeners(){
    document.addEventListener("mousemove", function(e){ui.handleMouseMove(e)}, false);
    document.addEventListener("mouseup", function(e){ui.handleMouseUp(e)}, false);
    elem("board").addEventListener("mouseout", function(){ui.mouse.boardX=-1;ui.mouse.boardY=-1}, false);
}

//Useful element functions
function elem(e){
    return document.getElementById(e);
}

function removeElement(e) {
    let element = elem(e);
    element.parentNode.removeChild(element);
}

//TEST FUNCTION
let game;
let ui;
function runTest(){
    game = new Game();
    ui = new UIHandler(game);
    ui.drawBoard();
}