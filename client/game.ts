import * as ChessBoard from 'chess.js'
import {BehaviorSubject} from "rxjs";

const chess=new ChessBoard();
export const gameSubject=new BehaviorSubject({
    board:chess.board()
});

