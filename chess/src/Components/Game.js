import React, { Component } from 'react';
import Board from './Board/Board';
import {connect} from 'react-redux'
import piecePositions from '../Redux/reducers/piecePositions';

class Game extends Component {

    constructPayload(piece){
        const {row, column, color, type} = piece;
        const pieceVal = {color,type};
        return {row, column, pieceVal};
    }

    setPieces = () =>{
        for(let i=0;i<8;i++){
            for(let j=0;j<8;j++){
                this.props.dispatch({type:'EMPTY_SQUARE', payload:{
                    row: i,
                    column: j
                }})
            }
        }

        const piecePositions = this.props.piecePositions;
        const keys = Object.keys(piecePositions);
        keys.forEach(key => {
            const pieceValues = Object.keys(piecePositions[key]);
            pieceValues.forEach(pVal => {
                const pieceNumbers = Object.keys(piecePositions[key][pVal]);
                pieceNumbers.forEach(pNum => {
                    if(pNum !== 'remaining'){
                        const piece = piecePositions[key][pVal][pNum];
                        const {row, column, pieceVal} = this.constructPayload(piece);
                        this.props.dispatch({type:'FILL_SQUARE', payload: {row, column, piece: pieceVal}});
                    }
                });
                
            });
        });
    }
    render() {
        return (
            <div>
                <div>THis is the best isnt it</div>
                <Board />
                <button onClick={this.setPieces}>Initialize Board. Cmon babe. Let us do it</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        piecePositions: state.piecePositions,
        squareValues: state.squareValues
    }
}

export default connect(mapStateToProps)(Game);