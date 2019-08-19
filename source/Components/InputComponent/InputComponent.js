import React from 'react';
import './style.css';
import onInputCallback from './onInputCallback';

let InputComponent = () => {
    return (
        <div>
            <div contentEditable className={'editDiv'} onInput={onInputCallback}></div>
            <div className={'editTags'}></div>
            <button>add note</button>
        </div>
    )
}

export default InputComponent;