class GameHandler {
    constructor(game){
        this.game = game;
    }
    
    move(x1, y1, x2, y2) {
        this.game.move(x1, y1, x2, y2);
    }
}