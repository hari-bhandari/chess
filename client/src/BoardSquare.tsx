import React from 'react';
import Square from "./Square";
import Piece from "./Piece";
interface props{
    piece:any
}
const BoardSquare:React.FC<props> = ({piece}) => {
    return (
        <div>
            <Square>
                {piece&&<Piece piece={piece}/>}
            </Square>
            
        </div>
    );
};

export default BoardSquare;