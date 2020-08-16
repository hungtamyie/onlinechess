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

        let y = this.y;
        while(y < 8) { //finding available spaces UPWARD
            currentSpace.push(this.x); //find x coord
            currentSpace.push(y); //then find y coord of space
            if(isOccupied(currentSpace, this) == 2) {
                //if space is occupied by current piece, don't include
                y++;
            }else if(isOccupied(currentSpace, this) == 1) {
                //if space is occupied by team, don't include and stop searching
                y = 8;
            }else if(isOccupied(currentSpace, this) == 0) {
                //if space is occupied by enemy, include and stop searching
                availableSpaces.push(currentSpace);
                y = 8;
            }else {
                //if space isn't occupied, include space
                availableSpaces.push(currentSpace);
                y++;
            }
            currentSpace = [];
        }

        y = this.y;
        while(y > -1) { //finding available spaces DOWNWARD
            currentSpace.push(this.x); //find x coord
            currentSpace.push(y); //then find y coord of space
            if(isOccupied(currentSpace, this) == 2) {
                //if space is occupied by current piece, don't include
                y--;
            }else if(isOccupied(currentSpace, this) == 1) {
                //if space is occupied by team, don't include and stop searching
                y = -1;
            }else if(isOccupied(currentSpace, this) == 0) {
                //if space is occupied by enemy, include and stop searching
                availableSpaces.push(currentSpace);
                y = -1;
            }else {
                //if space isn't occupied, include space
                availableSpaces.push(currentSpace);
                y--;
            }
            currentSpace = [];
        } 

       let x = this.x;
        while(x > -1) { //finding available spaces TO THE LEFT
            currentSpace.push(x); //find x coord
            currentSpace.push(this.y); //then find y coord
            if(isOccupied(currentSpace, this) == 2) {
                //if space is occupied by current piece, don't include
                x--;
            }else if(isOccupied(currentSpace, this) == 1) {
                //if space is occupied by team, don't include and stop searching
                x = -1;
            }else if(isOccupied(currentSpace, this) == 0) {
                //if space is occupied by enemy, include and stop searching
                availableSpaces.push(currentSpace);
                x = -1;
            }else {
                //if space isn't occupied, include space
                availableSpaces.push(currentSpace);
                x--;
            }
            currentSpace = [];
        }

        x = this.x;
        while(x < 8) { //finding available spaces TO THE RIGHT
            currentSpace.push(x); //find x coord
            currentSpace.push(this.y); //then find y coord
            if(isOccupied(currentSpace, this) == 2) {
                //if space is occupied by current piece, don't include
                x++;
            }else if(isOccupied(currentSpace, this) == 1) {
                //if space is occupied by team, don't include and stop searching
                x = 8;
            }else if(isOccupied(currentSpace, this) == 0) {
                //if space is occupied by enemy, include and stop searching
                availableSpaces.push(currentSpace);
                x = 8;
            }else {
                //if space isn't occupied, include space
                availableSpaces.push(currentSpace);
                x++;
            }
            currentSpace = [];
        }
        return availableSpaces;
    }
}