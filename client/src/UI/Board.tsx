import React from 'react';
import styled from "styled-components";
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
            {board?.map((piece,i)=><Square key={i}><p>{JSON.stringify(piece)}</p></Square>)}
        </BoardContainer>
    );
};

export default Board;