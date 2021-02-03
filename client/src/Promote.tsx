import React from 'react';
import styled from "styled-components";
const PromoteContainer=styled.div<{bottom:boolean}>`
  position: relative;
  display: inline-block;
  cursor: pointer;
  bottom: 1px;
  width: 200%;
  height: 200%;
  background-color: aquamarine;
  transform: ${props =>props.bottom?'translateY(-50%)':'' };
  span{
    font-size: 15px;
  }
  top: 0;
`
const Promote:React.FC<{promotion:any,closeTab:()=>void}> = ({promotion,closeTab}) => {
    return (
        <PromoteContainer bottom={false}>
        <span onClick={closeTab}>X</span>
        </PromoteContainer>
    );
};

export default Promote;