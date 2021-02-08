import * as Chess from 'chess.js'
import {BehaviorSubject} from "rxjs";
import {useState} from "react";

const chess=new Chess();
export const  gameSubject=new BehaviorSubject();

export const initGame=()=>{
    updateGame()
}

export function move(from,to,promotion){
    let tempMove = { from, to }
    if (promotion) {
        tempMove.promotion = promotion
    }
    const legalMove = chess.move(tempMove)

    if (legalMove) {
        updateGame()
    }


}
const updateGame=(pendingPromotion)=>{
    const isGameOver=chess.game_over()
    const newGame={
        board:chess.board(),
        pendingPromotion,
        isGameOver,
        result:isGameOver?getGameResult():null,
        turn:chess.turn()
    }
    localStorage.setItem('savedGame',chess.fen())
    gameSubject.next(newGame)

}
export const resetGame=()=>{
    chess.reset()
    updateGame()
}