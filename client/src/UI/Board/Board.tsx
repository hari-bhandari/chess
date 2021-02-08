import React, {useEffect} from 'react';
import styled from "styled-components";
import BoardSquare from "./BoardSquare";
import {getPossibleMovesForASquare} from "../../game";
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
    const getPossibleMoves=(getPosition:string)=>{
        const possibleMoves=getPossibleMovesForASquare(getPosition)
        if(possibleMoves.length>0){
            ChangeStyles(getPossibleMovesForASquare(getPosition))

        }

    }
    //loop over and change colour of the squares
    const ChangeStyles=(list:[]|undefined)=>{
        console.log(list)
        if(list!==null||list!==undefined){
            //change the bg of the squares
            list?.forEach(value => {
                // @ts-ignore
                console.log(value)
                // @ts-ignore
                document.getElementById(value).style.backgroundColor="red"
            })
        }
    }
    function getXYPosition(i:number) {
        const x = i% 8
        const y = Math.abs(Math.floor(i / 8) - 7)
        return { x, y }
    }

    function isBlack(i:number) {
        const { x, y } = getXYPosition(i)
        return (x + y) % 2 === 1
    }
    function getPosition(i:number) {
        const { x, y } = getXYPosition(i)
        const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][
            x
            ]
        return `${letter}${y + 1}`
    }

    return (
        <BoardContainer>
            {board?.flat().map((piece,i:number)=><Square key={i}>
                <BoardSquare
                piece={piece}
                black={isBlack(i)}
                getPosition={getPosition(i)}
                getPossibleMoves={getPossibleMoves}
            /></Square>)}
        </BoardContainer>
    );
};

export default Board;