import React, {useEffect, useState} from 'react';
import Square from "./Square";
import Piece from "./Piece";
import styled from "styled-components";
import {useDrop} from "react-dnd";
import {handleMove} from './game'
import {gameSubject} from "./game";
import Promote from "./Promote";
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
    const [promotion,setPromotion]=useState<any>(null)
    const[,drop]=useDrop({
        accept:'piece',
        drop:(item)=>{
            // @ts-ignore
            const [FromPosition]=item.id.split('_')
            handleMove(FromPosition,getPosition)
        }
    })
    const closeTab=()=>{
        setPromotion(null)
    }
    useEffect(()=>{
       // @ts-ignore
        const subscribe=gameSubject.subscribe(({pendingPromotion})=>pendingPromotion&&pendingPromotion.to===getPosition?setPromotion(pendingPromotion):setPromotion(null))
        return ()=>subscribe.unsubscribe()
    },[])
    return (
        <SquareContainer ref={drop}>
            {promotion?<Promote promotion={promotion} closeTab={closeTab}/>:
            <Square black={black}>
                {piece&&<Piece piece={piece} position={getPosition}/>}
            </Square>}
            
        </SquareContainer>
    );
};

export default BoardSquare;