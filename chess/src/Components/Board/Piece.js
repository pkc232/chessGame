import React, { Component } from 'react';
import King from '../Pieces/King';
import Queen from '../Pieces/Queen';
import Bishop from '../Pieces/Bishop';
import Rook from '../Pieces/Rook';
import Pawn from '../Pieces/Pawn';
import Knight from '../Pieces/Knight';


const componentMapping = {
    black_king: <King color={'black'} />,
    white_king: <King color={'white'} />,
    black_queen: <Queen color={'black'} />,
    white_queen: <Queen color={'white'}/>,
    black_bishop: <Bishop color={'black'} />,
    white_bishop:<Bishop color={'white'} />,
    black_knight:<Knight color={'black'} />,
    white_knight:<Knight color={'white'} />,
    black_rook:<Rook color={'black'} />,
    white_rook:<Rook color={'white'} />,
    black_pawn:<Pawn color={'black'} />,
    white_pawn:<Pawn color={'white'} />
}


class Piece extends Component {
    render() {
        console.log('Printing piece');
        const key = `${this.props.piece.color}_${this.props.piece.type}`;
        return (
            <span style={{fontSize:'13px'}}>
                {componentMapping[key]}
            </span>
        );
    }
}

export default Piece;