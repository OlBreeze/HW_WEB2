import React, {Component} from 'react';
import {colorArr} from "../utils/constants";
import Block from "./Block";

class Solution1 extends Component {
    currColors = colorArr;
    constructor(props) {
        super(props);
        this.state = {
            isColor: false
        }
    }
    changeColor = (color) => {
        this.currColors = this.state.isColor? colorArr:new Array(4).fill(color)
        this.setState({isColor: !this.state.isColor})
    }
    render() {
        return (
            <div className="block-container">
                {this.currColors.map((color, index) =>
                    <Block color={color} changeColor={this.changeColor} key={index}/>
                )}
            </div>
        );
    }
}

export default Solution1;