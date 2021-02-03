import React from 'react';
import styled from "styled-components";
import Piece from "./Piece";
const PromoteContainer=styled.div<{bottom:boolean}>`
  position: relative;
  display: inline-block;
  cursor: pointer;
  bottom: 1px;
  width: 100%;
  height: 430%;
  background-color: aquamarine;
  transform: ${props => props.bottom ? 'translateY(-50%)' : ''};

  span {
    font-size: 15px;
    color: #5D5E61;
    font-weight: bolder;
  }

  top: 0;
`
const PieceContainer = styled.div`
  width: 100%;
  height: 100%;
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
const Promote:React.FC<{promotion:any,closeTab:()=>void}> = ({promotion,closeTab}) => {

    return (
        <PromoteContainer bottom={false}>
        <span onClick={closeTab}>X</span>
        {/*<Piece piece={piece} position={getPosition}/>*/}
        </PromoteContainer>
    );
};

export default Promote;