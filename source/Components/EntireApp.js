import React from 'react';
import './style.css';
//Components
import InputComponent from './InputComponent/InputComponent';
import SingleNoteComponent from './SingleNoteComponent/SingleNoteComponent';
import FilterNotesComponent from './FilterNotesComponent/FilterNotesComponent';
// Functions
import getFilteredNotes from './FilterNotesComponent/getFilteredNotes';

const serverURL = 'https://server-for-noteapp.herokuapp.com/';

class EntireApp extends React.Component {
    constructor() {
        super();
        this.state = {
            notes: [],
            isLoading: true
        }
    }

    // Create
    addNote = async (string) => {

        let responseBody = await fetch(serverURL).then(body=>body.json());

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
            fetch(serverURL, fetchOptions)
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
        fetch(serverURL, fetchOptions)
            .then(res => res.json())
            .then(obj => {this.setState(obj,()=>{this.whichNoteWillEdit('a')})})
    }
    // Read
    getNotes = () => {
        fetch(serverURL)
            .then(res => res.json())
            .then(obj => this.setState(Object.assign(obj,{isLoading:false})))
    }
    // Delete
    deleteNote = (id) =>{
        let fetchOptions = {
            method: 'delete',
            body: id
        }
        fetch(serverURL, fetchOptions)
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
        fetch(serverURL)
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
                {this.state.isLoading 
                ? 
                <div style={{textAlign: 'center'}}>Loading ...</div>
                :
                this.state.notes.map((note)=>{
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
                    maximum number of notes (15) in demo mode has been reached !!! <br/>
                    solution: you can delete a note/s to add a new one
                </div>
            </div>
        )
    }
}

export default EntireApp;