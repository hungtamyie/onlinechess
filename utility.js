window.onload = function(){
    createBoard();    
};

function createBoard(){
    var table = document.getElementById("board");
    for (var x = 0; x < 8; x++) {
        table.innerHTML += "<tr id='row" + x + "' ondrop='drop(event)' ondragover='allowDrop(event)'></tr>"
        for (var y = 0; y < 8; y++) {
            document.getElementById("row" + x).innerHTML += "<td id='b" + (y + "-") + x + "'></td>"
        }
    }
}
