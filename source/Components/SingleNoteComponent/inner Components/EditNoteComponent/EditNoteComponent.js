import React, { useEffect } from 'react';
import './style.css';
import onInputCallback from './onInputCallback';
import initInnerHTMLCallback from './initInnerHTMLCallback';
import addHashTagToWords from './addHashTagToWords';



let EditNoteComponent = (props) => {
    useEffect(()=>{
        initInnerHTMLCallback(document.getElementsByClassName('editDiv-S')[0],addHashTagToWords(props.note),'class')
    },[])
    return (
        <div className={'EditNoteComponent'}>
            <div contentEditable className={'editDiv-S'} onInput={(e)=>{onInputCallback(e,'class')}}></div>
            <div className={'editTags-S'}></div>
            <div className={'btn-container'}>
                <div className={'accept-btn'} onClick={()=>{
                    if(document.getElementsByClassName('editDiv-S')[0].innerText === addHashTagToWords(props.note)){props.whichNoteWillEdit('a')}
                    else {props.updateNote(props.note.id,document.getElementsByClassName('editDiv-S')[0].innerText)}
                }}></div>
                <div className={'cancel-btn'} onClick={()=>{props.whichNoteWillEdit('a')}}></div>
                <div className={'delete-btn'} onClick={()=>{props.deleteNote(props.note.id)}}></div>
                <div className={'shadow_'}></div>
            </div>
        </div>
    )
}

export default EditNoteComponent;