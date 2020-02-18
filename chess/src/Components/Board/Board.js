import React, { Component } from 'react';
import Square from './Square';
import {connect} from 'react-redux'

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: this.initializeBoard()
        }
    }

    initializeBoard(){
        let squares = [];
        for(let i=0;i<64;i++){
            squares[i] = <Square number={i} key={i}/>
        }
        return squares;
    }

    constructBoard(){
        let board = [];
        for(let row=0;row<8;row++){
            board.push(
                <div key={row}>
                    {this.state.squares.slice(row*8, row*8+8)}
                </div>
            );
        }
        return board;
    }
    

    render() {
        const board = this.constructBoard();
        return (
            <div>
                {board}
            </div>
        );
    }
}


export default Board;