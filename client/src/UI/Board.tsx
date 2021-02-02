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
    function getXYPosition(i:number) {
        const x = i% 8
        const y = Math.abs(Math.floor(i / 8) - 7)
        return { x, y }
    }

    function isBlack(i:number) {
        const { x, y } = getXYPosition(i)
        return (x + y) % 2 === 1
    }
    return (
        <BoardContainer>
            {board?.flat().map((piece,i:number)=><Square key={i}>
                <BoardSquare
                piece={piece}
                black={isBlack(i)}
            /></Square>)}
        </BoardContainer>
    );
};

export default Board;