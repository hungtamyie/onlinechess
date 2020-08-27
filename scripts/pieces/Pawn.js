class Pawn extends Piece {
    constructor(x, y, team, myGame) {
        super(x, y, team, myGame);
        this.name = "pawn";
    }
    // pawn methods
    spacesCovered() {
        //returns array of spaces covered (diagonally forward spaces AND directly forward)
        function findPawnMoves(x, y) { //fills allPawnMoves array
            if(x > -1 && x < 8 && y > -1 && y < 8) { //if piece is on board
                allPawnMoves.push(Array(x, y)); //add to array
            }
        }
        let availableSpaces = []; //array that will be returned
        let allPawnMoves = []; //holds the 3 possible Pawn moves
        let x = this.x; //current pawn position
        let y = this.y; //current pawn position
        if(this.team == 1) { //if pawn is white
            findPawnMoves(x, y+1);
            if(this.moveCount == 0) { //if pawn hasn't moved, it can move forward twice
                findPawnMoves(x, y+2);
            }
            findPawnMoves(x-1, y+1);
            findPawnMoves(x+1, y+1);
        }else if(this.team == 2) { //if pawn is black
            findPawnMoves(x, y-1);
            if(this.moveCount == 0) { //if pawn hasn't moved, it can move forward twice
                findPawnMoves(x, y-2);
            }
            findPawnMoves(x-1, y-1);
            findPawnMoves(x+1, y-1); //diagonal spaces
            findPawnMoves(x-1, y);
            findPawnMoves(x+1, y); //en passant spaces
        }
        

        //move legal spaces into availableSpaces array
        allPawnMoves.forEach(
            (currentValue, index) => { 
                if(index == 0) { //if we're checking straight forward space
                    //make sure it's unoccupied
                    if(this.isOccupied(currentValue, this) == -1) {
                        availableSpaces.push(currentValue);
                    }
                }else if(allPawnMoves.length == 6 && index == 1) { //if currentValue is 2 spaces forward
                    if(this.isOccupied(currentValue, this) == -1) {
                        availableSpaces.push(currentValue);
                    }
                }else if(index == (allPawnMoves.length - 2)) { //left en passant
                    if(this.isOccupied(currentValue, this) == -1) {
                        if(this.myGame.pieceAt(currentValue[0], currentValue[1]).moveCount == 1) { //if we can take en passant
                            currentValue[0]--;
                            currentValue[1]++; //make sure we push the space behind enemy pawn
                            availableSpaces.push(currentValue);
                        }
                    }
                }else if(index == (allPawnMoves.length - 1)) { //rigth en passant
                    if(this.isOccupied(currentValue, this) == -1) {
                        if(this.myGame.pieceAt(currentValue[0], currentValue[1]).moveCount == 1) { //if we can take en passant
                            currentValue[0]++;
                            currentValue[1]++; //make sure we push the space behind enemy pawn
                            availableSpaces.push(currentValue);
                        }
                    }
                }else { //check diagonal spaces
                    if(this.isOccupied(currentValue, this) == 0) { //if occupied by enemy
                    availableSpaces.push(currentValue);
                    }
                }
            }
        )
        return availableSpaces;
    }
}