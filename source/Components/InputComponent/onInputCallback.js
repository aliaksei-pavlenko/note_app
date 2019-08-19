import convTextToSpans from './gears/convTextToSpans';
import colorizeSpans from './gears/colorizeSpans';


let onInputCallback = (e) => {
    let offsetOnTextNode = window.getSelection().baseOffset;
    let baseLength = window.getSelection().baseNode.length;
    let parentId = window.getSelection().focusNode.parentNode.id;
    let parentNode = window.getSelection().focusNode.parentNode;


    e.target.innerHTML = convTextToSpans(e.target.innerText).spanArray.join('');
    if(convTextToSpans(e.target.innerText).shadowSpansArray.length!==0){
        document.getElementsByClassName('editTags')[0].innerHTML = convTextToSpans(e.target.innerText).shadowSpansArray.join('');
    } else {
        document.getElementsByClassName('editTags')[0].innerHTML = '<span>no tags</span>'
    }
    colorizeSpans(convTextToSpans(e.target.innerText).tagsId);

    if (e.nativeEvent.data === ' ') {
        let newParentId = `span${parseInt(parentId.slice(4)) + 1}`;
        if (parseInt(parentId.slice(4)) === 0) {
            if (offsetOnTextNode === 2) {
                window.getSelection().collapse(document.getElementById(newParentId).firstChild, 1);
            } else {
                window.getSelection().collapse(document.getElementById(newParentId), 1);
            }
        } else {
            window.getSelection().collapse(document.getElementById(newParentId).firstChild, 1);
        }
    } else {
        if (baseLength === offsetOnTextNode && parentNode.innerText[0].charCodeAt() === 160) {
            let newParentId = `span${parseInt(parentId.slice(4)) + 1}`;
            let newoffsetOnTextNode = offsetOnTextNode - 1;
            if(e.nativeEvent.inputType === 'deleteContentBackward'){
                window.getSelection().collapse(document.getElementById(parentId).firstChild, 1);
            } else {
                window.getSelection().collapse(document.getElementById(newParentId).firstChild, newoffsetOnTextNode);
            }
        } else {
            if(e.nativeEvent.inputType === 'insertParagraph'){
                window.getSelection().collapse(document.getElementById(parentId).firstChild, 1);
            } else {
                if(parentId === ''){
                    window.getSelection().collapse(document.getElementById('span0').firstChild, offsetOnTextNode);
                } else {
                    window.getSelection().collapse(document.getElementById(parentId).firstChild, offsetOnTextNode);
                }
            }
            
        }
    }

}

export default onInputCallback;