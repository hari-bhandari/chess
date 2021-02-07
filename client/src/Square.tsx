import React from 'react';
import styled from "styled-components";
interface props{
    children:any,
    black:boolean,
    position?:string
}

const SquareContainer=styled.div<{isBlack:boolean}>`
  width: 100%;
  height: 100%;
  background-color: ${p => p.isBlack?p.theme.black:p.theme.white};
`
const Square:React.FC<props> = ({children,black,position}) => {
    return (
        <SquareContainer isBlack={black} id={position}>
            {children}
        </SquareContainer>
    );
};

export default Square;