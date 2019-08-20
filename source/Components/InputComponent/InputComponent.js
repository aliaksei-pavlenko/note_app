import React from 'react';
import './style.css';
import onInputCallback from './onInputCallback';
import makeNoteObject from '../../functions/makeNoteObject/makeNoteObject';

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