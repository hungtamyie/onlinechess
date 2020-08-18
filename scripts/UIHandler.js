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
            let position =  this.modifier(piece.x) + "-" + this.modifier(piece.y);
            let color = ([" ", "w", "b"])[piece.team];
            elem("b" + position).innerHTML += "<img class='piece no_select' draggable='false' id='p" + position + "' src = './images/pieces/" + piece.name + "_" + color + ".png'></img>";
        }
    }
    
    drawSelectionUI(){
        for (let i = 0; i < this.game.pieces.length; i++){
            let piece = this.game.pieces[i];
            let position =  this.modifier(piece.x) + "-" + this.modifier(piece.y);
            elem("p"+position).classList.remove("selected");
        }
        if (this.selectedPiece) {
            let position = this.modifier(this.selectedPiece.x) + "-" + this.modifier(this.selectedPiece.y);
            elem("p"+position).classList.add("selected");
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
            this.drawSelectionUI()
            elem
        }
        else if (this.selectedPiece) {
            console.log(this.selectedPiece.name + " at (" + this.selectedPiece.x + ", " + this.selectedPiece.y + ") to (" + this.modifier(ui.mouse.boardX) + ", " +this.modifier(ui.mouse.boardY) + ")");    
            this.selectedPiece = false;
            this.drawSelectionUI()
        }
    }
    
    handleMouseUp(e){
        this.mouse.down = false;
        if (this.mouse.piece && ui.mouse.boardX != -1) {
            elem("draggable").style.visibility = "hidden";
            if (this.selectedPiece.x != ui.mouse.boardX || this.selectedPiece.y != ui.mouse.boardY) {
                console.log(this.selectedPiece.name + " at (" + this.selectedPiece.x + ", " + this.selectedPiece.y + ") to (" + this.modifier(ui.mouse.boardX) + ", " +this.modifier(ui.mouse.boardY) + ")");    
                this.selectedPiece = false;
                this.drawSelectionUI()
            }
        }
        else {
            elem("draggable").style.visibility = "hidden";
        }
        this.mouse.piece = false;
    }
}