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
    addNote = (string) => {

        let fetchOptions = {
            method: 'post',
            body: string
        }
        fetch('http://localhost:9000', fetchOptions)
            .then(res => res.json())
            .then(obj => this.setState(obj))
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
            </div>
        )
    }
}

export default EntireApp;