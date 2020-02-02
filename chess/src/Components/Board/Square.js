import React, { Component } from 'react';
import "./style.css"
import Knight from '../Pieces/Knight';


class Square extends Component {
    constructor(props) {
        super(props);
        this.number =   this.props.number;
        this.row    =   ~~(this.number/8);
        this.column =   this.number%8;
        this.color  =   (this.row*7+this.column)%2 ? 'black': 'white';
    }
    
    render() {
        return (
            <div className={`square  ${this.color} same-row`}>
                {this.props.children}
                <Knight color={this.color}/>
            </div>
        );
    }
}

export default Square;