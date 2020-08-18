class King extends Piece {
    constructor(x, y, team, myGame) {
        super(x, y, team, myGame);
        this.name = "king";
    }
    spacesCovered() {
        //returns array of spaces covered
        function findKingMoves(x, y) { //fills allKingMoves array
            if(x > -1 && x < 8 && y > -1 && y < 8) { //if piece is on board
                allKingMoves.push(Array(x, y)); //add to array
            }
        }
        let availableSpaces = []; //array that will be returned
        let allKingMoves = []; //holds all 8 possible King moves
        let x = this.x; //current king position
        let y = this.y; //current king position
        findKingMoves(x, y+1);
        findKingMoves(x+1, y+1);
        findKingMoves(x+1, y);
        findKingMoves(x+1, y-1);
        findKingMoves(x, y-1);
        findKingMoves(x-1, y-1);
        findKingMoves(x-1, y);
        findKingMoves(x-1, y+1);
        //move legal spaces into availableSpaces array
        allKingMoves.forEach(
            currentValue => { if(this.isOccupied(currentValue, this) == 0 || this.isOccupied(currentValue, this) == -1) {
                availableSpaces.push(currentValue);
                }
            }
        )
        return availableSpaces;
    }
}