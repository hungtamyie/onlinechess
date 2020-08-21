class Game {
    constructor() {
        //gamestate stuff
        this.pieces = [];
        this.halfMoveCount = 0;
        this.playerToMove = 0;
        this.check = false;
        
        //Generate standard board
        for (let i = 0; i < 8; i++) {
            this.pieces.push((new Pawn(i, 1, 1, this)));
            this.pieces.push((new Pawn(i, 6, 2, this)));
        }
        for (let i = 0; i < 2; i++) {
            for (let j=0; j<2; j++) {
                this.pieces.push((new Rook(0 + 7*j, i * 7, i+1, this)));
                this.pieces.push((new Knight(1 + 7*j - 2*j, i * 7, i+1, this)));
                this.pieces.push((new Bishop(2 + 7*j - 4*j, i * 7, i+1, this)));
            }
            this.pieces.push((new King(4, i * 7, i+1, this)));
            this.pieces.push((new Queen(3, i * 7, i+1, this)));
        }
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

