import React from 'react';
import './style.css';

let ShowNoteComponent = (props) => {
    return (
        <div className={'ShowNoteComponent'}>
            {props.note.words.join(' ')}
            <div className={'edit-button'} onClick={()=>{props.whichNoteWillEdit(props.note.id)}}></div>
        </div>
    )
}

export default ShowNoteComponent;
