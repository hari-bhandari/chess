import React, {useEffect, useState} from 'react';
import './App.css';
import styled, {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyle";
import {gameSubject, initGame} from "./game";
import Board from "./UI/Board";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import RestartGame from "./RestartGame";
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
    const [isGameOver,setIsGameOver]=useState<boolean>(false)
    const [result,setResult]=useState<string|null|undefined>(null)
    useEffect(() => {
        initGame()
        const subscribe = gameSubject.subscribe(game =>{
            setBoard(game.board)
            setIsGameOver(game.isGameOver)
            setResult(game.result)
        })
        return () => subscribe.unsubscribe()
    }, [])
    return (
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                {!isGameOver?
                    (        <Container>
                        <BoardContainer>
                    <Board board={board}/>
                        </BoardContainer></Container>):(
                        <Modal open={isGameOver} onClose={()=>setIsGameOver(false)}>

    <RestartGame/>
                        </Modal>)}
            </ThemeProvider>
    );
}

export default App;
