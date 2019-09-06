import React from 'react';
import './style.css';
import onInputCallback from './onInputCallback';

let InputComponent = (props) => {
    return (
        <div className={'InputComponent'}>
            <div className={'inputContainer'}>
                <div contentEditable className={'editDiv'} onInput={(e)=>{onInputCallback(e,'id')}}></div>
                <div className={'editTags'}></div>
            </div>
            <div className={'addNote-button'} onClick={()=>{
                if(document.getElementsByClassName('editDiv')[0].innerText === ''){}
                else {
                    props.addNote(document.getElementsByClassName('editDiv')[0].innerText);
                    document.getElementsByClassName('editDiv')[0].innerText = '';
                    document.getElementsByClassName('editTags')[0].innerText = '';
                }
            }}></div>
        </div>
    )
}

export default InputComponent;