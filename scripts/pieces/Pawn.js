class Pawn extends Piece {
    constructor(x, y, team, myGame) {
        super(x, y, team, myGame);
        this.name = "pawn";
    }
    // pawn methods
    spacesCovered() {
        //returns array of spaces covered
    }
}