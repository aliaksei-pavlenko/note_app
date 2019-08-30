import React from 'react';
import './style.css';


let FilterNotesComponent = (props) => {
    return (
        <div className={'FilterNotesComponent'}>
            <input className={'filterInput'} placeholder={'type tags (without #) here...'}
                onInput={(e)=>{props.useFilter(e.target.value.split(','))}}
            ></input>
            <div className={'loupe-button'}></div>
        </div>
    )
}

export default FilterNotesComponent;