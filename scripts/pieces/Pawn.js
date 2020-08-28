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
            findPawnMoves(x+1, y+1); //diagonal spaces
        }else if(this.team == 2) { //if pawn is black
            findPawnMoves(x, y-1);
            if(this.moveCount == 0) { //if pawn hasn't moved, it can move forward twice
                findPawnMoves(x, y-2);
            }
            findPawnMoves(x-1, y-1);
            findPawnMoves(x+1, y-1); //diagonal spaces
        }
        

        //move legal spaces into availableSpaces array
        allPawnMoves.forEach(
            (currentValue) => { 
                if(currentValue[0] == x && ((currentValue[1] == (y+1)) || (currentValue[1] == (y-1)))) { //if currentValue is 1 space forward
                    //make sure it's unoccupied
                    if(this.isOccupied(currentValue, this) == -1) {
                        availableSpaces.push(currentValue);
                    }
                }else if((currentValue[1] == (y+2)) || (currentValue[1] == (y-2))) { //if currentValue is 2 spaces forward
                    if(this.isOccupied(currentValue, this) == -1) {
                        availableSpaces.push(currentValue);
                    }
                }else if((currentValue[0] == (x-1)) || (currentValue[0] == (x+1))) { //check diagonal spaces
                    if(this.isOccupied(currentValue, this) == 0) { //if occupied by enemy
                        availableSpaces.push(currentValue);
                    }
                }
            }
        )
        return availableSpaces;
    }
}