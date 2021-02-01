class Game {
    thisPlayersColorIsWhite:boolean;
    chessBoard:any
    constructor(thisPlayersColorIsWhite:boolean) {
        this.thisPlayersColorIsWhite = thisPlayersColorIsWhite // once initialized, this boolean should never change.
        this.chessBoard = null//function to initialize chess board
    }
}
export default Game