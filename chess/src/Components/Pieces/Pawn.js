import React, { Component } from 'react';

class Pawn extends Component {
    constructor(props) {
        super(props);
        this.color = this.props.color;
        this.image = this.color === 'black'? 
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/45px-Chess_pdt45.svg.png':
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_plt45.svg/45px-Chess_plt45.svg.png';
        this.state = {
            cellNumber:     this.props.number,
            row:            this.props.row,
            column:         this.props.column
        }
    }
    
    render() {
        return (
            <div>
                <img src={this.image} />
            </div>
        );
    }
}

export default Pawn;