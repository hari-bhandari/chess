import React from 'react';
interface props{
    piece:PieceInterface
}
interface PieceInterface {
    type:string,
    color:string
}
const Piece:React.FC<props> = ({piece:{type,color}}) => {
    return (
        <div>
            {type}
        </div>
    );
};

export default Piece;