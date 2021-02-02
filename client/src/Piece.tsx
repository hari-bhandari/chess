import React from 'react';
import file from './assets/bB.svg'
import styled from "styled-components";
interface props{
    piece:PieceInterface
}
interface PieceInterface {
    type:string,
    color:string
}
const PieceContainer=styled.div`
  width: 100%;
  height: 100%;
  &:hover{
    cursor: move;
  }
  img{
    width: 100%;
  }
`
const Piece:React.FC<props> = ({piece:{type,color}}) => {
    const path=require(`./assets/${color.toLowerCase()}${type.toUpperCase()}.svg`).default
    return (
        <PieceContainer>
            <img src={path} alt={type}/>
        </PieceContainer>
    );
};

export default Piece;