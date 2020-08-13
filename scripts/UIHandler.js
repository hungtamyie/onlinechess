class UIHandler {
    constructor(game){
        this.game = game;
        this.rotated = false;
        this.selectedPiece = false;
        this.mouse = {
            down: false,
            x: 0,
            y: 0,
            boardX: 0,
            boardY: 0,
            piece: false,
        };
    }
    
    drawBoard(){
        //Delete all pieces
        for (let r = 0; r < 8; r++){
            for (let f = 0; f < 8; f++){
                if (elem("p" + r + "-" + f)) {
                    removeElement("p" + r + "-" + f);
                }
            }
        }
        //Place new pieces on board where they belong
        for (let i = 0; i < this.game.pieces.length; i++){
            let piece = this.game.pieces[i];
            let position = "";
            if (!this.rotated) {
                position =  piece.x + "-" + piece.y;
            }
            else {
                position = (7-piece.x) + "-" + (7-piece.y);
            }
            let color = ([" ", "w", "b"])[piece.team];
            elem("b" + position).innerHTML += "<img class='piece no_select' draggable='false' id='p" + position + "' src = './images/pieces/" + piece.name + "_" + color + ".png'></img>";
        }
    }
    
    rotateBoard(){
        if (this.rotated) {
            this.rotated = false;
        }
        else {
            this.rotated = true;
        }
        this.updateGrid();
        this.drawBoard();
    }
    
    updateGrid() {
        let that = this;
        for (var i = 0; i < 8; i++) {
            elem("f" + i).innerHTML = alphabet[this.modifier(i)];
        }
        for (var i = 0; i < 8; i++) {
            elem("r" + i).innerHTML = this.modifier(i)+1;
        }
    }
    
    handleMouseMove(e){
        e.preventDefault();
        let x = e.clientX;
        let y = e.clientY;
        if ( typeof x !== 'undefined' ){
            if (this.mouse.down == true) {
                elem("draggable").style.visibility = "visible";
                elem("draggable").style.left = (x-47) + "px";
                elem("draggable").style.top = (y-47) + "px";
            }
        }
    }
    
    modifier(num){
        if (!this.rotated) {
            return num;
        }
        else {
            return 7-num;
        }
    }
    
    handleMouseDown(x,y){
        var pieceClicked = this.game.pieceAt(this.modifier(x),this.modifier(y));
        if (pieceClicked) {
            this.mouse.down = true;
            let color = ([" ", "w", "b"])[pieceClicked.team];
            this.mouse.piece = pieceClicked.name + "_" + color;
            elem("draggable").src = "./images/pieces/" + this.mouse.piece + ".png";
            
            this.selectedPiece = pieceClicked;
        }
    }
    
    handleMouseUp(e){
        this.mouse.down = false;
        if (this.mouse.piece) {
            elem("draggable").style.visibility = "hidden";
            console.log(this.selectedPiece.name + " at (" + this.selectedPiece.x + ", " + this.selectedPiece.y + ") to (" + this.modifier(ui.mouse.boardX) + ", " +this.modifier(ui.mouse.boardY) + ")");
        }
    }
}