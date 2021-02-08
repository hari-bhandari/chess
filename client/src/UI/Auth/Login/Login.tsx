import React, {useState} from 'react';
import Input from "../Input";
import Flex from "../../../Components/Styles/Flex";
import Button, {HomeWrapper} from "./Login.styles";
import LoginWrapper from "./LoginWrapper";
import Queen from '../../../assets/wQ.svg'
import Board from "../../Board/Board";
import { ChessInstance, ShortMove } from "chess.js";
import * as Chess from 'chess.js'


const Login:React.FC= () => {
    // @ts-ignore
    const chess=new Chess('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');


    const [fen, setFen] = useState(chess.fen());
    const board=chess.board()
    const handleMove = (move: ShortMove) => {
        if (chess.move(move)) {
            setTimeout(() => {
                const moves = chess.moves();

                if (moves.length > 0) {
                    const computerMove = moves[Math.floor(Math.random() * moves.length)];
                    chess.move(computerMove);
                    setFen(chess.fen());
                }
            }, 300);

            setFen(chess.fen());
        }
    };
    return (
        <HomeWrapper>
            <Flex className={"flex-container"}>
                <div className="home__left">
                    <div className="home__text">
                        <Board board={chess}/>
                    </div>
                </div>
                <div className="home__right">
        <LoginWrapper>
            <Flex align="center" justify="center" direction="column">
                <h2 className="text--bold">Welcome back!</h2>

                <form >
                    <Input
                        name="email"
                        type="email"
                        icon="envelope"
                        placeholder="example@gmail.com"
                    />

                    <Input
                        type="password"
                        name="password"
                        icon="lock"
                        placeholder="password"
                    />

                    <Button
                        type="submit"
                        width="50%"
                        icon="arrow-right"
                    >
                        Login
                    </Button>
                </form>



            </Flex>
        </LoginWrapper>
                </div>
            </Flex>
        </HomeWrapper>
    );
};

export default Login;