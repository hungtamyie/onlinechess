class Renderer {
    constructor(game){
        this.game = game;
        this.flipped = false;
        this.selected = false;
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
            if (!this.flipped) {
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
        if (this.flipped) {
            this.flipped = false;
        }
        else {
            this.flipped = true;
        }
        this.updateGrid();
        this.drawBoard();
    }
    
    updateGrid = () => {
        let that = this;
        function modifier(num){
            if (!that.flipped) {
                return num;
            }
            else {
                return 7-num;
            }
        }
        for (var i = 0; i < 8; i++) {
            elem("f" + i).innerHTML = alphabet[modifier(i)];
        }
        for (var i = 0; i < 8; i++) {
            elem("r" + i).innerHTML = modifier(i)+1;
        }
    }
}