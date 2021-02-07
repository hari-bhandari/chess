import React, {useEffect, useState} from 'react';
import Square from "./Square";
import Piece from "./Piece";
import styled from "styled-components";
import {useDrop} from "react-dnd";
import {handleMove} from './game'
import {gameSubject,getPossibleMovesForASquare} from "./game";
import Promote from "./Promote";
interface props{
    piece:any;
    black:boolean,
    getPosition:string,
    getPossibleMoves:(getPosition:string)=>void
}
const SquareContainer=styled.div`
  width: 100%;
  height: 100%;
`
const BoardSquare:React.FC<props> = ({piece,black,getPosition,getPossibleMoves}) => {
    const [promotion,setPromotion]=useState<any>(null)
    useEffect(()=>{
    },[promotion])
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
    //function to declare weather the square is a potential move or not
    const isSquareAPotentialMove=()=>{

    }
    useEffect(()=>{
       // @ts-ignore
        const subscribe=gameSubject.subscribe((value)=>value?.pendingPromotion&&pendingPromotion?.to===getPosition?setPromotion(pendingPromotion):setPromotion(null))
        return ()=>subscribe.unsubscribe()
    },[])
    return (
        <SquareContainer ref={drop} onClick={()=>getPossibleMoves(getPosition)} >
            {promotion?<Promote promotion={promotion} closeTab={closeTab}/>:
            <Square black={black}  position={getPosition} >
                {piece&&<Piece piece={piece} position={getPosition}/>}
            </Square>}
            
        </SquareContainer>
    );
};

export default BoardSquare;