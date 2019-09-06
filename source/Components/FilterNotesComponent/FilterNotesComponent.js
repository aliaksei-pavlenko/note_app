import React from 'react';
import './style.css';


let FilterNotesComponent = (props) => {
    let opened = false;
    return (
        <div className={'FilterNotesComponent'}>
            <input className={'filterInput'}
                onInput={(e)=>{
                    if(e.target.value === ''){
                        props.getNotes();
                    } else {
                        props.useFilter(e.target.value.split(','))
                    }
                }}
            ></input>
            <div className={'info-message'} onClick={()=>{

                    let textMessage = document.getElementsByClassName('text-message')[0];
                    let infoBtn = document.getElementsByClassName('info-btn')[0];
                    
                    if (opened) {
                        opened = false;
                        infoBtn.innerText = '?';
                        textMessage.style.opacity = '0';
                        infoBtn.style.backgroundColor = 'royalblue';
                        setTimeout(()=>{
                            textMessage.innerText = '';
                            infoBtn.style.right = '-225px';
                        },500)
                    } else {
                        opened = true;
                        textMessage.style.color = 'white';
                        textMessage.style.background = 'linear-gradient(135deg,green,royalblue)';
                        textMessage.style.boxShadow = '0px 5px 4px -5px rgba(0,0,0,.5)';
                        textMessage.style.opacity = '1';
                        textMessage.innerHTML = '<div class="blank-space"></div>Type tags without #. You can type many tags, just separate it by comma "," ';
                        infoBtn.innerText = '✖';
                        infoBtn.style.right = '0px';
                        infoBtn.style.backgroundColor = 'transparent';
                    }

            }}>
                <div className={'text-message'}></div>
                <div className={'info-btn'}>?</div>
            </div>
        </div>
    )
}

export default FilterNotesComponent;