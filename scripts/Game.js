class Game {
    constructor() {
        //gamestate stuff
        this.pieces = [];
        
        //Test code
        let rook1 = new Rook(7, 0, 1, this);
        let rook2 = new Rook(0, 0, 1, this);
        let knight1 = new Knight(1, 0, 1, this);
        let knight2 = new Knight(6, 0, 1, this);
        let bishop1 = new Bishop(5, 0, 1, this);
        let bishop2 = new Bishop(2, 0, 1, this);
        let queen = new Queen(3, 0, 1, this);
        let king = new King(4, 0, 1, this);
        this.pieces.push(rook1);
        this.pieces.push(rook2);
        this.pieces.push(knight1);
        this.pieces.push(knight2);
        this.pieces.push(bishop1);
        this.pieces.push(bishop2);
        this.pieces.push(queen);
        this.pieces.push(king);
    }
    getMap() {
        let pieceMap = [];
        for(let x=0; x<8; x++) {
            for(let y=0; y<8; y++) {
                //for each board square
                for(let i=0; i<this.pieces.length; i++) {
                    //for each piece check if loc matches board square
                    if(this.pieces[i].x == x && this.pieces[i].y == y) {
                        pieceMap.push(this.pieces[i].team);
                    } //HOW TO ADD ZEROS????
                }
            }
        }
        return pieceMap;
    }
}

