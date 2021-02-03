import React from 'react';
import styled from "styled-components";
import Piece from "./Piece";

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
const Promote: React.FC<{ promotion: any, closeTab: () => void }> = ({promotion, closeTab}) => {

    return (
        <PromoteContainer bottom={false}>
            <Piece piece={{color: "w", type: "q"}}/>
            <Piece piece={{color: "w", type: "b"}}/>
            <Piece piece={{color: "w", type: "r"}}/>
            <Piece piece={{color: "w", type: "n"}}/>
            <span onClick={closeTab}>X</span>

        </PromoteContainer>
    );
};

export default Promote;