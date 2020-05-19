import React from 'react';

const WordComponent = props => {
    return(
        <div>
            {isNaN(+props.word)? <h1>The Word is {props.word}</h1>:<h1>The Number is {props.word}</h1>}
        </div>
    )
}

export default WordComponent;