import * as Chess from '../node_modules/chess.js/chess'
import {BehaviorSubject} from "rxjs";

const chess=new Chess();
export const gameSubject=new BehaviorSubject({
    board:chess.board()
});

