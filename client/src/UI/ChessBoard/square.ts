class Square {
    x:0|1|2|3|4|5|6|7
    y:0|1|2|3|4|5|6|7
    canvasCoord:number;
    pieceOnThisSquare:any
    constructor(x:0|1|2|3|4|5|6|7, y:0|1|2|3|4|5|6|7, pieceOnThisSquare:number, canvasCoord:any) {
        this.x = x
        this.y = y
        this.canvasCoord = canvasCoord
        this.pieceOnThisSquare = pieceOnThisSquare
    }a
}
export default Square