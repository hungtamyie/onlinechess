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
        findPawnMoves(x, y+1);
        findPawnMoves(x-1, y+1);
        findPawnMoves(x+1, y+1);
        //move legal spaces into availableSpaces array
        allPawnMoves.forEach(
            (currentValue, index) => { if(index == 0) { //if we're checking straight forward space
                    //make sure it's unoccupied
                    if(this.isOccupied(currentValue, this) == -1) {
                        availableSpaces.push(currentValue);
                    }
                }else {
                    if(this.isOccupied(currentValue, this) == 0 || this.isOccupied(currentValue, this) == -1) {
                        availableSpaces.push(currentValue);
                    }
                }
            }
        )
        return availableSpaces;
    }
}