class Renderer {
    constructor(game){
        this.game = game;
        this.flipped = false;
    }
    
    drawBoard(){
        for (var r = 0; r < 8; r++) {
            for (var f = 0; f < 8; f++) {
                elem("b" + f + "-" + r).style.backgroundImage = "";
            }
        }
        for (var i = 0; i < this.game.pieces.length; i++) {
            let piece = this.game.pieces[i];
            let position = "";
            if (!this.flipped) {
                position = "b" + piece.x + "-" + piece.y;
            }
            else {
                position = "b" + (7-piece.x) + "-" + (7-piece.y);
            }
            let color = ([" ", "w", "b"])[piece.team];
            elem(position).style.backgroundImage = "url('./images/pieces/" + piece.name + "_" + color + ".png')";
        }
    }
    
    flip(){
        if (this.flipped) {
            this.flipped = false;
        }
        else {
            this.flipped = true;
        }
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

class Draggable {
    
}