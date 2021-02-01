class Game {
    thisPlayersColorIsWhite:boolean;
    chessBoard:any
    constructor(thisPlayersColorIsWhite:boolean) {
        this.thisPlayersColorIsWhite = thisPlayersColorIsWhite // once initialized, this boolean should never change.
        this.chessBoard = this.initializeBoard()//function to initialize chess board
    }
    initializeBoard(){
        if(this.thisPlayersColorIsWhite){
            //make a white orientated board
        }
        else{
            //black
        }
    }
    movePiece(pieceId:string,to:[]){

    }

}
export default Game