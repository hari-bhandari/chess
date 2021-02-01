import ChessPiece from "./chessPiece";
class Square {
    x:0|1|2|3|4|5|6|7
    y:0|1|2|3|4|5|6|7
    canvasCoord:number;
    pieceOnThisSquare:ChessPiece|null
    constructor(x:0|1|2|3|4|5|6|7, y:0|1|2|3|4|5|6|7, pieceOnThisSquare:ChessPiece|null, canvasCoord:number) {
        this.x = x
        this.y = y
        this.canvasCoord = canvasCoord
        this.pieceOnThisSquare = pieceOnThisSquare
    }
}
export default Square