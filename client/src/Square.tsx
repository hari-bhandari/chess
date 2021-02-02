import React from 'react';
import styled from "styled-components";
interface props{
    children:any,
    black:boolean
}

const SquareContainer=styled.div<{isBlack:boolean}>`
  background-color: ${p => p.isBlack?p.theme.black:p.theme.white};
`
const Square:React.FC<props> = ({children,black}) => {
    return (
        <SquareContainer isBlack={black}>
            {children}
        </SquareContainer>
    );
};

export default Square;