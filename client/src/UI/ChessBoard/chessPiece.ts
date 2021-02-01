
class ChessPiece {
    name:string;
    isAttacked:boolean;
    color:'black'|'white';
    id:string
    constructor(name:string, isAttacked:boolean, color:'black'|'white', id:string) {

        this.name = name
        this.isAttacked = isAttacked
        this.color = color
        this.id = id
    }
    setSquare(){
        // assign this piece to specific square
        //this.square=square
    }
    getSquare(){
        //get the current square piece is on
        //undefined if the piece is not on the squre
    }
}


export default ChessPiece