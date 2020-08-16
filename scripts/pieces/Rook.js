class Rook extends Piece {
    constructor(x, y, team, myGame) {
        super(x, y, team, myGame);
        this.name = "rook";
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

        let i = this.y;
        while(i < 8) { //finding available spaces UPWARD
            currentSpace.push(this.x); //find x coord
            currentSpace.push(i); //then find y coord of space
            if(isOccupied(currentSpace, this) == 2) {
                //if space is occupied by current piece, don't include
                i++;
            }else if(isOccupied(currentSpace, this) == 1) {
                //if space is occupied by team, don't include and stop searching
                i = 8;
            }else if(isOccupied(currentSpace, this) == 0) {
                //if space is occupied by enemy, include and stop searching
                availableSpaces.push(currentSpace);
                i = 8;
            }else {
                //if space isn't occupied, include space
                availableSpaces.push(currentSpace);
                i++;
            }
            currentSpace = [];
        }

        i = this.y;
        while(i > -1) { //finding available spaces DOWNWARD
            currentSpace.push(this.x); //find x coord
            currentSpace.push(i); //then find y coord of space
            if(isOccupied(currentSpace, this) == 2) {
                //if space is occupied by current piece, don't include
                i--;
            }else if(isOccupied(currentSpace, this) == 1) {
                //if space is occupied by team, don't include and stop searching
                i = -1;
            }else if(isOccupied(currentSpace, this) == 0) {
                //if space is occupied by enemy, include and stop searching
                availableSpaces.push(currentSpace);
                i = -1;
            }else {
                //if space isn't occupied, include space
                availableSpaces.push(currentSpace);
                i--;
            }
            currentSpace = [];
        } 

        i = this.x;
        while(i > -1) { //finding available spaces TO THE LEFT
            currentSpace.push(i); //find x coord
            currentSpace.push(this.y); //then find y coord
            if(isOccupied(currentSpace, this) == 2) {
                //if space is occupied by current piece, don't include
                i--;
            }else if(isOccupied(currentSpace, this) == 1) {
                //if space is occupied by team, don't include and stop searching
                i = -1;
            }else if(isOccupied(currentSpace, this) == 0) {
                //if space is occupied by enemy, include and stop searching
                availableSpaces.push(currentSpace);
                i = -1;
            }else {
                //if space isn't occupied, include space
                availableSpaces.push(currentSpace);
                i--;
            }
            currentSpace = [];
        }

        i = this.x;
        while(i < 8) { //finding available spaces TO THE RIGHT
            currentSpace.push(i); //find x coord
            currentSpace.push(this.y); //then find y coord
            if(isOccupied(currentSpace, this) == 2) {
                //if space is occupied by current piece, don't include
                i++;
            }else if(isOccupied(currentSpace, this) == 1) {
                //if space is occupied by team, don't include and stop searching
                i = 8;
            }else if(isOccupied(currentSpace, this) == 0) {
                //if space is occupied by enemy, include and stop searching
                availableSpaces.push(currentSpace);
                i = 8;
            }else {
                //if space isn't occupied, include space
                availableSpaces.push(currentSpace);
                i++;
            }
            currentSpace = [];
        }
        return availableSpaces;
    }
}