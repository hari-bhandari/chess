import React from 'react';
interface props{
    piece:any
}
const Piece:React.FC<props> = ({piece}) => {
    return (
        <div>
            {piece.type}
        </div>
    );
};

export default Piece;