import React, {useEffect, useState} from 'react';
import './App.css';
import styled, {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyle";
import {gameSubject} from "./game";
import Board from "./UI/Board";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(34,34,34);

`
const BoardContainer = styled.div`
  width: 600px;
  height: 600px;
  
`

function App() {
    const [board, setBoard] = useState<any>([])
    useEffect(() => {
        const subscribe = gameSubject.subscribe(game => setBoard(game.board))
        return () => subscribe.unsubscribe()
    }, [])
    return (
        <Container>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <BoardContainer>
                    <Board board={board}/>
                </BoardContainer>
            </ThemeProvider>
        </Container>
    );
}

export default App;
