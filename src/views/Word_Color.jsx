import React from 'react';

const WordColorComponent = props => {
    return(
        <div>
            <h1 style = {{color:props.color, backgroundColor:props.bg_color}}>The Word is {props.word}</h1>
        </div>
    )
}

export default WordColorComponent;