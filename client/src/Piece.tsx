import React from 'react';
import {useDrag, DragPreviewImage} from 'react-dnd'
import styled from "styled-components";

interface props {
    piece: PieceInterface,
    position?:string,
    promote?:boolean
}

interface PieceInterface {
    type: string,
    color: string
}

const PieceContainer = styled.div<{isDragging?:boolean}>`
  width: 100%;
  height: 100%;
  opacity: ${props => props.isDragging?0:1};
  &:hover {
    cursor: move;
  }

  display: flex;
  justify-content: center;
  justify-items: center;

  img {
    max-width: 90%;
    max-height: 90%;
   
  }
`
const Piece: React.FC<props> = ({piece: {type, color},position,promote}) => {

    const [{isDragging}, drag, preview] = useDrag({
        item: {type: 'piece', id: `${position}_${type}_${color}`},
        collect:(monitor => {
            return{isDragging:!!monitor.isDragging()}
        })
    })
    const path = require(`./assets/${color.toLowerCase()}${type.toUpperCase()}.svg`).default

    if(promote){
        return (
            <>
                <PieceContainer >
                    <img src={path} alt={type}/>
                </PieceContainer>
            </>
        )
    }

    return (
        <>
            <DragPreviewImage connect={preview} src={path}/>
            <PieceContainer ref={drag} isDragging={isDragging}>
                <img src={path} alt={type}/>
            </PieceContainer>
        </>
    );
};

export default Piece;