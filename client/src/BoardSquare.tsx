import React from 'react';
import Square from "./Square";
import Piece from "./Piece";
import styled from "styled-components";
import {useDrop} from "react-dnd";
import {handleMove} from './game'
interface props{
    piece:any;
    black:boolean,
    getPosition:string
}
const SquareContainer=styled.div`
  width: 100%;
  height: 100%;
`
const BoardSquare:React.FC<props> = ({piece,black,getPosition}) => {
    const[,drop]=useDrop({
        accept:'piece',
        drop:(item)=>{
            // @ts-ignore
            const [FromPosition]=item.id.split('_')
            handleMove(FromPosition,getPosition)
        }
    })
    return (
        <SquareContainer ref={drop}>
            <Square black={black}>
                {piece&&<Piece piece={piece} position={getPosition}/>}
            </Square>
            
        </SquareContainer>
    );
};

export default BoardSquare;