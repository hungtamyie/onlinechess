class Game {
    constructor() {
        //gamestate stuff
        this.pieces = [];
        let rook1 = new Rook(0, 0, 1, this);
        let rook2 = new Rook(0, 7, 1, this);
        let knight1 = new Knight(0, 1, 1, this);
        let knight2 = new Knight(0, 6, 1, this);
        let bishop1 = new Bishop(0, 2, 1, this);
        let bishop2 = new Bishop(0, 5, 1, this);
        let queen = new Queen(0, 3, 1, this);
        let king = new King(0, 4, 1, this);
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


class Piece {
    constructor(x, y, team, myGame){
        this.x = x;
        this.y = y;
        this.team = team;
        this.myGame = myGame;
    }
}

class Pawn extends Piece {
    constructor(x, y, team, myGame) {
        super(x, y, team, myGame);
        this.name = "pawn";
    }
    // pawn methods
    validMove(x,y) {
        //check to see if move is legal
    }
    spacesCovered() {
        //returns array of spaces covered
    }
}
let pawn1 = new Pawn(0, 1, 1, this);


class Rook extends Piece {
    constructor(x, y, team, myGame) {
        super(x, y, team, myGame);
        this.name = "rook";
    }
    validMove(x,y) {
        //check to see if move is legal
    }
    spacesCovered() {
        //returns array of spaces covered
    }
}

class Knight extends Piece {
    constructor(x, y, team, myGame) {
        super(x, y, team, myGame);
        this.name = "knight";
    }
    validMove(x,y) {
        //check to see if move is legal
    }
    spacesCovered() {
        //returns array of spaces covered
    }
}

class Bishop extends Piece {
    constructor(x, y, team, myGame) {
        super(x, y, team, myGame);
        this.name = "bishop";
    }
    validMove(x,y) {
        //check to see if move is legal
    }
    spacesCovered() {
        //returns array of spaces covered
    }
}

class Queen extends Piece {
    constructor(x, y, team, myGame) {
        super(x, y, team, myGame);
        this.name = "queen";
    }
    validMove(x,y) {
        //check to see if move is legal
    }
    spacesCovered() {
        //returns array of spaces covered
    }
}

class King extends Piece {
    constructor(x, y, team, myGame) {
        super(x, y, team, myGame);
        this.name = "king";
    }
    validMove(x,y) {
        //check to see if move is legal
    }
    spacesCovered() {
        //returns array of spaces covered
    }
}
let test = new Game();
console.log(test);
console.log(test.getMap());
