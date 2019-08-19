import React from 'react';
import './style.css';

let InputComponent = () => {
    return (
        <div>
            <div contentEditable className={'editDiv'}></div>
            <div className={'editTags'}></div>
        </div>
    )
}

export default InputComponent;