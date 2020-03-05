import React, { Component } from 'react';
import {getDiagonalMoves, getHorizontalMoves, getVerticalMoves} from "./moveConstructor"

class Queen extends Component {
    constructor(props) {
        super(props);
        this.color = this.props.color;
        this.image = this.color === 'black'? 
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/45px-Chess_qdt45.svg.png':
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qlt45.svg/45px-Chess_qlt45.svg.png';
        this.state = {
            cellNumber:     this.props.number,
            row:            this.props.row,
            column:         this.props.column
        }
    }

    getValidPositions = () => {
        const row = this.state.row, column = this.state.column;
        let possiblePos = [];
        possiblePos = [...possiblePos, ...getDiagonalMoves(row,column)];
        possiblePos = [...possiblePos, ...getHorizontalMoves(row, column)];
        possiblePos = [...possiblePos, ...getVerticalMoves(row, column)];
        return possiblePos;
    }
    
    render() {
        return (
            <div>
                <img src={this.image} />
            </div>
        );
    }
}

export default Queen;