import React, { Component } from 'react';

class Rook extends Component {
    constructor(props) {
        super(props);
        this.color = this.props.color;
        this.image = this.color === 'black'? 
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/45px-Chess_rdt45.svg.png':
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rlt45.svg/45px-Chess_rdt45.svg.png';
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

export default Rook;