class Bishop extends Piece {
    constructor(x, y, team, myGame) {
        super(x, y, team, myGame);
        this.name = "bishop";
    }
    spacesCovered() {
        function isOccupied(space, piece) { //gets access to piece map
            let pieceMap = piece.myGame.getMap();
            if(pieceMap[space[1]][space[0]] == piece.team) {
                //if pieceMap holds the team number at that spot, space is occupied by teammate
                if((space[1] == piece.y) && (space[0] == piece.x)) {
                    //check to see if "teammate" is really the current piece
                    return 2;
                } else {
                    //if not us, then it's a different teammate
                    return 1;
                }
            }else if((pieceMap[space[1]][space[0]] != piece.team) && (pieceMap[space[1]][space[0]] != 0)) {
                //if space is occupied by enemy
                return 0;
            }else {
                return -1;
            }
        }

        //RETURNS ARRAY OF SPACES COVERED
        let availableSpaces = []; //array that will be returned
        let currentSpace = []; //array to temporarily hold spaces
    }
}