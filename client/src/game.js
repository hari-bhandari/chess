import * as Chess from 'chess.js'
import {BehaviorSubject} from "rxjs";
import {useState} from "react";

const chess=new Chess();
export const  gameSubject=new BehaviorSubject();

export const initGame=()=>{
    const savedGame=localStorage.getItem('savedGame')
    if(savedGame){
        chess.load(savedGame)
    }
    updateGame()
}
export function handleMove(from, to) {
    const promotions = chess.moves({ verbose: true }).filter(m => m.promotion)
    console.table(promotions)
    if (promotions.some(p => `${p.from}:${p.to}` === `${from}:${to}`)) {
        const pendingPromotion = { from, to, color: promotions[0].color }
        updateGame(pendingPromotion)
    }
    const { pendingPromotion } = gameSubject.getValue()
    if (!pendingPromotion) {
        move(from, to)
    }
}
export const getPossibleMovesForASquare=(square)=>{
    const moves=chess.moves({square})
    console.log(moves)
    return moves
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
const getGameResult=()=>{
    if(chess.in_checkmate()){
        const winner=chess.turn()==="w"?"BLACK":"WHITE"
        return `CHECKMATE- ${winner} won`
    }else if(chess.in_draw()){
        let reason='50 - MOVES -RULE'
        if(chess.in_stalemate()){
            reason="Stalemate"
        }
        else if (chess.in_threefold_repetition()){
            reason="REPETITION"
        }else if(chess.insufficient_material()){
            reason="Insufficient Material"
        }
        return `${reason} --DRAW`
    }
    else {
        return `You're Something special`
    }
}
export const resetGame=()=>{
    chess.reset()
    updateGame()
}