import React from 'react';
import './style.css';

let FilterNotesComponent = () => {
    return (
        <div className={'FilterNotesComponent'}>
            <input className={'filterInput'} placeholder={'type tags without # here...'}></input>
            <div className={'loupe-button'}></div>
        </div>
    )
}

export default FilterNotesComponent;