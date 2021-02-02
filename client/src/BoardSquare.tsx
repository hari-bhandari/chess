import React from 'react';
import Square from "./Square";
import Piece from "./Piece";
interface props{
    piece:any;
    black:boolean
}
const BoardSquare:React.FC<props> = ({piece,black}) => {
    return (
        <div>
            <Square black={black}>
                {piece&&<Piece piece={piece}/>}
            </Square>
            
        </div>
    );
};

export default BoardSquare;