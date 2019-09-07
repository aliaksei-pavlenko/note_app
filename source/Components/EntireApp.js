import React from 'react';
import './style.css';
//Components
import InputComponent from './InputComponent/InputComponent';
import SingleNoteComponent from './SingleNoteComponent/SingleNoteComponent';
import FilterNotesComponent from './FilterNotesComponent/FilterNotesComponent';
// Functions
import getFilteredNotes from './FilterNotesComponent/getFilteredNotes';



class EntireApp extends React.Component {
    constructor() {
        super();
        this.state = {
            notes: []
        }
    }

    // Create
    addNote = async (string) => {

        let responseBody = await fetch('http://localhost:9000').then(body=>body.json());

        if(responseBody.notes.length >= 15){
            await new Promise((res,rej)=>{document.getElementsByClassName('limitWarning')[0].style.display = 'flex';res()});
            await new Promise((res,rej)=>{
                setTimeout(()=>{
                    document.getElementsByClassName('limitWarning')[0].style.opacity = '1';
                    res()
                },100);  
            });
        } else {
            let fetchOptions = {
                method: 'post',
                body: string
            }
            fetch('http://localhost:9000', fetchOptions)
                .then(res => res.json())
                .then(obj => this.setState(obj))
        }
    }

    // Update
    updateNote = (id,newtext) => {
        let fetchOptions = {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id,newtext})
        }
        fetch('http://localhost:9000', fetchOptions)
            .then(res => res.json())
            .then(obj => {this.setState(obj,()=>{this.whichNoteWillEdit('a')})})
    }
    // Read
    getNotes = () => {
        fetch('http://localhost:9000')
            .then(res => res.json())
            .then(obj => this.setState(obj))
    }
    // Delete
    deleteNote = (id) =>{
        let fetchOptions = {
            method: 'delete',
            body: id
        }
        fetch('http://localhost:9000', fetchOptions)
            .then(res => res.json())
            .then(obj => this.setState(obj))
    }

    componentDidMount(){
       this.getNotes();
    }

    whichNoteWillEdit = (id) => {
        this.setState({editNoteId:id})
    }

    // Note Filter
    useFilter=(filterArray)=>{
        fetch('http://localhost:9000')
        .then(res => res.json())
        .then(obj => {
            this.setState({notes:getFilteredNotes(filterArray,obj.notes,obj.tagsMask)})
        })
    }

 
    render () {
        return (
            <div className={'EntireApp'}>
                <InputComponent addNote={this.addNote}/>
                <FilterNotesComponent useFilter={this.useFilter} getNotes={this.getNotes}/>
                {this.state.notes.map((note)=>{
                    return(
                        <SingleNoteComponent
                            key = {note.id}
                            note = {note}
                            whichNoteWillEdit = {this.whichNoteWillEdit}
                            editNoteId = {this.state.editNoteId}
                            deleteNote = {this.deleteNote}
                            updateNote = {this.updateNote}
                        />
                    )
                })}
                <div className={'limitWarning'} onClick={(e)=>{
                    // console.log(e);
                    e.target.style.opacity = '.5';
                    e.persist();
                    setTimeout(()=>{
                        e.target.style.display = 'none';
                    },400)
                }}>
                    maximum number of notes (15) in demo mode has been reached !!!
                </div>
            </div>
        )
    }
}

export default EntireApp;