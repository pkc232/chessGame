import React, { Component } from 'react';
import { getKnightMoves } from './moveConstructor';

class Knight extends Component {
    constructor(props) {
        super(props);
        this.color = this.props.color;
        this.image = this.color === 'black'? 
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/45px-Chess_ndt45.svg.png':
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_nlt45.svg/45px-Chess_nlt45.svg.png';
        this.state = {
            cellNumber:     this.props.number,
            row:            this.props.row,
            column:         this.props.column
        }
    }
    
    getValidPositions(){
        const row = this.state.row, column = this.state.column;
        return getKnightMoves(row, column);
    }

    render() {
        return (
            <div>
                <img src={this.image} />
            </div>
        );
    }
}

export default Knight;