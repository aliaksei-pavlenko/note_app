import React from 'react';
import ShowNoteComponent from './inner Components/ShowNoteComponent/ShowNoteComponent';
import EditNoteComponent from './inner Components/EditNoteComponent/EditNoteComponent';


let SingleNoteComponent = (props) => {
    if(props.editNoteId !== props.note.id){
        return (
            <div className={'SingleNoteComponent'}>
                <ShowNoteComponent 
                    note={props.note}
                    whichNoteWillEdit={props.whichNoteWillEdit}
                />
            </div>
        )
    } else {
        return (
            <div className={'SingleNoteComponent'}>
                <EditNoteComponent 
                    note={props.note}
                    whichNoteWillEdit={props.whichNoteWillEdit}
                    deleteNote = {props.deleteNote}
                    updateNote = {props.updateNote}
                />
            </div>
        )
    }
}

export default SingleNoteComponent;