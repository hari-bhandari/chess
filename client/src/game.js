import * as Chess from 'chess.js'
import {BehaviorSubject} from "rxjs";
const promotion='rnb2bnr/pppPkppp/8/4p3/7q/8/PPPP1PPP/RNBQKBNR w KQ - 1 5'
const chess=new Chess(promotion);
export const gameSubject=new BehaviorSubject({
    board:chess.board()
});
export function move(from,to){
    const legalMove=chess.move({from,to})
    if(legalMove){
       updateGame()
    }


}
const updateGame=()=>{
    const newGame={
        board:chess.board()
    }
    gameSubject.next(newGame)

}