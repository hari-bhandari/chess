import React from 'react';
import styled from "styled-components";
import Piece from "./Piece";
import {move} from "./game";

interface Promotion {
    from: string,
    to: string,
    color: string
}

const PromoteContainer = styled.div<{ bottom: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  bottom: 1px;
  width: 100%;
  height: 430%;
  background-color: white;
  transform: ${props => props.bottom ? 'translateY(-50%)' : ''};

  span {
    font-size: 15px;
    color: #5D5E61;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    justify-items: center;
    background-color: grey;
  }

  top: 0;
`
const Promote: React.FC<{ promotion: Promotion, closeTab: () => void }> = ({promotion:{from,to,color}, closeTab}) => {
    const promotionPieces=["q","b","r","n"]
    return (
        <PromoteContainer bottom={false}>
            {promotionPieces.map((p,i)=>(
                <div onClick={()=>move(from,to,p)} key={i}><Piece piece={{color,type:p}}/></div>
            ))}
            <span onClick={closeTab}>X</span>

        </PromoteContainer>
    );
};

export default Promote;