
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
}


export default ChessPiece