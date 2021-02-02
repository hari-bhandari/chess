import React from 'react';
import Square from "./Square";
import Piece from "./Piece";
import styled from "styled-components";
interface props{
    piece:any;
    black:boolean
}
const SquareContainer=styled.div`
  width: 100%;
  height: 100%;
`
const BoardSquare:React.FC<props> = ({piece,black}) => {
    return (
        <SquareContainer>
            <Square black={black}>
                {piece&&<Piece piece={piece}/>}
            </Square>
            
        </SquareContainer>
    );
};

export default BoardSquare;