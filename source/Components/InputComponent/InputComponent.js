import React from 'react';
import './style.css';
import onInputCallback from './onInputCallback';

let InputComponent = (props) => {
    return (
        <div className={'InputComponent'}>
            <div contentEditable className={'editDiv'} onInput={onInputCallback}></div>
            <div className={'editTags'}></div>
            <div className={'addNote-button'} onClick={()=>{props.addNote(document.getElementsByClassName('editDiv')[0].innerText);
                                document.getElementsByClassName('editDiv')[0].innerText = '';
                                document.getElementsByClassName('editTags')[0].innerText = '';
                                }}></div>
        </div>
    )
}

export default InputComponent;