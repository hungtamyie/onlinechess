class Game {
    constructor() {
        //gamestate stuff
        this.pieces = [];
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
        let pieceMap = Array(8).fill().map(() => Array(8).fill(0)); //8x8 array of zeros
            this.pieces.forEach(function(currentValue) {
                pieceMap[currentValue.y][currentValue.x] = currentValue.team;
            })
        return pieceMap;
    }
    pieceAt(x,y){
        for(let i=0; i<this.pieces.length; i++) {
            if(this.pieces[i].x == x && this.pieces[i].y == y) {
                return this.pieces[i];
            }
        }
        return false;
    }
}
let test = new Game();
let pieceMap = test.getMap();
console.log(pieceMap);

