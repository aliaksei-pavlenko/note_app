import React from 'react';
import './style.css';
import onInputCallback from './onInputCallback';

let InputComponent = () => {
    let onTagsClick = () => {
        console.log(document.getElementsByClassName('editTags'))
    }
    return (
        <div>
            <div contentEditable className={'editDiv'} onInput={onInputCallback}></div>
            <div className={'editTags'} onClick={onTagsClick}></div>
        </div>
    )
}

export default InputComponent;