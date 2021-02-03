import * as Chess from 'chess.js'
import {BehaviorSubject} from "rxjs";
const promotion='rnb2bnr/pppPkppp/8/4p3/7q/8/PPPP1PPP/RNBQKBNR w KQ - 1 5'
const chess=new Chess(promotion);
export const gameSubject=new BehaviorSubject({
    board:chess.board()
});

export const initGame=()=>{
    updateGame()
}
export function handleMove(from,to){
    const promotion=chess.moves({verbose:true}).filter(m=>m.promotion)
    if(promotion.some(p=>`${p.from}:${p.to}`===`${from}:${to}`)){
        const pendingPromotion={from,to,colon:promotion[0].color}
        updateGame(pendingPromotion)
    }
    const {pendingPromotion}=gameSubject.getValue()
    if(!pendingPromotion){
        move(from,to)

    }

}
export function move(from,to){
    const legalMove=chess.move({from,to})
    if(legalMove){
       updateGame()
    }


}
const updateGame=(pendingPromotion)=>{
    const newGame={
        board:chess.board(),
        pendingPromotion
    }
    gameSubject.next(newGame)

}