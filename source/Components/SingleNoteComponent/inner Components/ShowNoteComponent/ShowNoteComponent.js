import React from 'react';
import './style.css';

let ShowNoteComponent = (props) => {
    return (
        <div className={'ShowNoteComponent'}>
            <div className={'note-text'}>{props.note.words.join(' ')}</div>
            <div className={'edit-btn'} onClick={()=>{props.whichNoteWillEdit(props.note.id)}}></div>
            <div className={'shadow'}></div>
        </div>
    )
}

export default ShowNoteComponent;
