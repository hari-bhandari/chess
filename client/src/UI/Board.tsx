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
    function getXYPosition(i) {
        const x = turn === 'w' ? i % 8 : Math.abs((i % 8) - 7)
        const y =
            turn === 'w'
                ? Math.abs(Math.floor(i / 8) - 7)
                : Math.floor(i / 8)
        return { x, y }
    }

    function isBlack(i) {
        const { x, y } = getXYPosition(i)
        return (x + y) % 2 === 1
    }
    return (
        <BoardContainer>
            {board?.flat().map((piece,i)=><Square key={i}>
                <BoardSquare
                piece={piece}
                black={isBlack(i)}
            /></Square>)}
        </BoardContainer>
    );
};

export default Board;