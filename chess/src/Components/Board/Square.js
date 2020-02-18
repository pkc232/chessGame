import React, { Component } from 'react';
import "./style.css"
import Piece from './Piece';
import {connect} from 'react-redux';


class Square extends Component {
    constructor(props) {
        super(props);
        this.number =   this.props.number;
        this.row    =   ~~(this.number/8);
        this.column =   this.number%8;
        this.color  =   (this.row*7+this.column)%2 ? 'black': 'white';
    }
    
    render() {
        const squareValue = this.props.squareValues[this.row][this.column];
        const {type, piece} = squareValue;
        return (
            <div className={`square  ${this.color} same-row`}>
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
        squareValues: state.squareValues
    }
}

export default connect(mapStateToProps)(Square);