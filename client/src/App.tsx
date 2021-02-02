import React, {useEffect, useState} from 'react';
import './App.css';
import {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyle";
import {gameSubject} from "../game";

function App() {
    const[board,setBoard]=useState<any>([])
    useEffect(()=>{
        const subscribe=gameSubject.subscribe(game=>setBoard(game.board))
    },[])
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
      </ThemeProvider>
    </div>
  );
}

export default App;
