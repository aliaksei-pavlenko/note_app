import React, { useEffect } from 'react';
import './style.css';
import onInputCallback from './onInputCallback';
import initInnerHTMLCallback from './initInnerHTMLCallback';
import addHashTagToWords from './addHashTagToWords';


let EditNoteComponent = (props) => {
    useEffect(()=>{
        initInnerHTMLCallback(document.getElementsByClassName('editDiv-S')[0],addHashTagToWords(props.note))
    },[])
    return (
        <div className={'EditNoteComponent'}>
            <div contentEditable className={'editDiv-S'} onInput={onInputCallback}></div>
            <div className={'editTags-S'}></div>
            <div className={'acceptEdit-button'} onClick={()=>{
                if(document.getElementsByClassName('editDiv-S')[0].innerText === addHashTagToWords(props.note)){props.whichNoteWillEdit('a')}
                else {props.updateNote(props.note.id,document.getElementsByClassName('editDiv-S')[0].innerText)}
            }}></div>
            <div className={'canceEdit-button'} onClick={()=>{props.whichNoteWillEdit('a')}}></div>
            <div className={'deleteNote-button'} onClick={()=>{props.deleteNote(props.note.id)}}></div>
        </div>
    )
}

export default EditNoteComponent;