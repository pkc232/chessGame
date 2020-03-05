import React, { Component } from 'react';
import "./style.css"
import Piece from './Piece';
import {connect} from 'react-redux';
const _ = require('lodash');

class Square extends Component {
    constructor(props) {
        super(props);
        this.number =   this.props.number;
        this.row    =   ~~(this.number/8);
        this.column =   this.number%8;
        this.color  =   (this.row*7+this.column)%2 ? 'black': 'white';
    }
    
    initialPiecePosition = (piece) => {
        this.props.dispatch({type: 'SET_MOVING_PIECE_INITIAL', payload:{
            piece,
            position:{
                row: this.row,
                column: this.column
            }
        }});
    };

    finalPiecePosition = () => {
        const {piece, position} = this.props.movePiece;
        this.props.dispatch({
                type:'EMPTY_SQUARE', 
                payload:{
                    row: position.row, column: position.column
                }});
        this.props.dispatch({type:'EMPTY_SQUARE', payload:{
            row: this.row,
            column: this.column,
            piece
        }});
        
        this.props.dispatch({type:'FILL_SQUARE', payload:{
            row: this.row,
            column: this.column,
            piece
        }});
        this.props.dispatch({type: 'CLEAR_MOVING_PIECE'});
    };

    selectSquare = () => {
        const {type, piece} = this.props.squareValues[this.row][this.column];
        
        if(!_.isEmpty(this.props.movePiece)){
            this.finalPiecePosition();
        }
        else if(! _.isEmpty(piece)){
            this.initialPiecePosition(piece);
        }
    }

    isSelectedCell = () => {
        const position = _.get(this.props.movePiece, 'position', {});
        if(_.isEmpty(position))
            return false;
        else{
            return position.row === this.row && position.column === this.column;
        }
    }

    render() {
        const squareValue = this.props.squareValues[this.row][this.column];
        const {type, piece} = squareValue;
        const selectedCSS = this.isSelectedCell() ? 'selected-square':'';
        return (
            <div className={`square  ${this.color} ${selectedCSS} same-row`} onClick={this.selectSquare}>
                {
                    type === 'piece' &&
                    <Piece piece={piece} />
                }
            </div>
        );
        
    }
}

const mapStateToProps = (state) => {
    return {
        squareValues: state.squareValues,
        movePiece: state.movePiece
    }
}

export default connect(mapStateToProps)(Square);