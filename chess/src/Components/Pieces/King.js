import React, { Component } from 'react';

class King extends Component {
    constructor(props) {
        super(props);
        this.color = this.props.color;
        this.image = this.color === 'black'? 
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/45px-Chess_kdt45.svg.png':
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_klt45.svg/45px-Chess_klt45.svg.png';
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

export default King;