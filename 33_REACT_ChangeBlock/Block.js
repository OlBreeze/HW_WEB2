import React from 'react';

const Block = (props) => {
    return <div className={`block ${props.color} ${props.size}`} onClick={() =>
    props.changeColor(props.color)}></div>
};

export default Block;