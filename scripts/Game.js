class Game {
    constructor() {
        //gamestate stuff
        this.pieces = [];
        this.halfMoveCount = 0;
        this.playerToMove = 1; //1=white's turn, 2=black's turn
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
    move(oldX, oldY, newX, newY) {
        let piece = this.pieceAt(oldX, oldY);
        if(piece.team == this.playerToMove) { //make sure the right team is being moved
            if(piece.validMove(newX, newY)) { //if this move is valid
                piece.x = newX;
                piece.y = newY; //move piece location
                if(this.playerToMove == 1) {
                    this.playerToMove = 2; //next turn will be black
                }else if(this.playerToMove == 2) {
                    this.playerToMove = 1; //next turn will be white
                }
            }
        }else {
            console.log("You're attempting to move the wrong team");
        }
    }
    getMap() {
        let pieceMap = Array(8).fill().map(() => Array(8).fill(0)); //8x8 array of zeros
            this.pieces.forEach(function(currentValue) {
                pieceMap[currentValue.y][currentValue.x] = currentValue.team;
            })
        return pieceMap;
    }
    pieceAt(x,y) {
        for(let i=0; i<this.pieces.length; i++) {
            if(this.pieces[i].x == x && this.pieces[i].y == y) {
                return this.pieces[i];
            }
        }
        return false;
    }
    findCheck(king) { //returns true if certain team's king is in check
        let isCheck = false; //will return true or false
        let x = king.x;
        let y = king.y;
        let kingLocation = Array(x, y); //king's location
        for(let i=0; i<this.pieces.length; i++) {
            if(this.pieces[i].team != king.team) { //we need to find enemy pieces
                //holds spacesCovered array of current piece in loop
                let currentSpace = this.pieces[i].spacesCovered();
                currentSpace.forEach(
                    currentValue => { 
                        if(currentValue[0] == kingLocation[0]) {
                            if(currentValue[1] == kingLocation[1]) {
                                console.log(this.pieces[i].name + " " + this.pieces[i].x + "," + this.pieces[i].y + " " + "check");
                                isCheck = true;
                            }
                        }
                    }
                )
            }  
        }return isCheck;
    }
}
let test = new Game();
let pieceMap = test.getMap();
console.log(pieceMap);