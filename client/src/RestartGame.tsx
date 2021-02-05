import React from 'react';
import styled from "styled-components";
import White from './assets/wK.svg'
import Black from './assets/bK.svg'

const RestartContainer = styled.div`
  width: 100%;
  display: flex;

  justify-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    display: flex;
    justify-items: center;
    justify-content: center;
    margin: 20px 40px;

    img {
      width: 50px;
    }
  }
  

`
const Button = styled.button`
  position: relative;
  margin: 10px 50px;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: 600;
  color: #382b22;
  text-transform: uppercase;
  padding: 1.25em 2em;
  background: #fff0f0;
  border: 2px solid #b18597;
  border-radius: 0.75em;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f9c4d2;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);

    &:hover {
      background: #ffe9e9;
      transform: translate(0, 0.25em);
    }
  }

  &:hover {
    background: #ffe9e9;
    transform: translate(0, 0.25em);
  }

`
const RestartGame:React.FC<{result:string | null | undefined}> = ({result}) => {
    return (
        <RestartContainer>
            <h2>{result}</h2>
            <Button>Play Again</Button>
            <Button>Restart game</Button>
            <Button>see the end game</Button>
        </RestartContainer>
    );
};

export default RestartGame;