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
  display: flex;
  justify-content: center;
  justify-items: center;
  img{
    max-width: 90%;
    max-height: 90%;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
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