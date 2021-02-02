import React from 'react';
import styled from "styled-components";
import BoardSquare from "../BoardSquare";
interface propsInterface {
    board:[]|null
}
const BoardContainer=styled.div`
    width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`
const Square=styled.div`
    width: 12.5%;
    height: 12.5%;
`

const Board:React.FC<propsInterface> = ({board}) => {
    return (
        <BoardContainer>
            {board?.flat().map((piece,i)=><Square key={i}>
                <BoardSquare
                piece={piece}
            /></Square>)}
        </BoardContainer>
    );
};

export default Board;