//Starts onload
window.onload = function(){
    createBoard();
    runTest();
};

//Alphabet for reference 
var alphabet = ["a","b","c","d","e","f","g","h"]

//Board creation function
function createBoard(){
    var table = elem("board");
    for (var x = 0; x < 8; x++) {
        table.innerHTML += "<tr id='row" + x + "''></tr>"
        for (var y = 0; y < 8; y++) {
            let id = "b" + (y + "-") + (7-x);
            elem("row" + x).innerHTML += "<td id='" + id + "'></td>"
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
    renderer.flip();
    renderer.updateGrid();
    renderer.drawBoard();
}

//Useful element function
function elem(e){
    return document.getElementById(e);
}


//TEST FUNCTION
let game;
let renderer;
function runTest(){
    game = new Game();
    renderer = new Renderer(game);
    renderer.drawBoard();
}