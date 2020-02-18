import React, { Component } from 'react';


const componentMapping = {

}


class Piece extends Component {
    render() {
        console.log('Printing piece');
        return (
            <span style={{fontSize:'13px'}}>
                {`${this.props.piece.type}\n`}
                {this.props.piece.color}
            </span>
        );
    }
}

export default Piece;