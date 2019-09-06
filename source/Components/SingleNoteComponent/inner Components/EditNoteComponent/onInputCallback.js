import convTextToSpans from '../../../InputComponent/gears/convTextToSpans';
import colorizeSpans from '../../../InputComponent/gears/colorizeSpans';


 
let onInputCallback = (e,selector) => {
    let offsetOnTextNode = window.getSelection().baseOffset;
    let baseLength = window.getSelection().baseNode.length;
    let parentClass = window.getSelection().focusNode.parentNode.className;
    let parentNode = window.getSelection().focusNode.parentNode;


    e.target.innerHTML = convTextToSpans(e.target.innerText,selector).spanArray.join('');
    if(convTextToSpans(e.target.innerText,selector).shadowSpansArray.length!==0){
        document.getElementsByClassName('editTags-S')[0].innerHTML = convTextToSpans(e.target.innerText,selector).shadowSpansArray.join('');
    } else {
        document.getElementsByClassName('editTags-S')[0].innerHTML = '<span>no tags</span>'
    }
    colorizeSpans(convTextToSpans(e.target.innerText,selector).tagsId);

    if (e.nativeEvent.data === ' ') {
        let newParentClass = `span${parseInt(parentClass.slice(4)) + 1}`;
        if (parseInt(parentClass.slice(4)) === 0) {
            if (offsetOnTextNode === 2) {
                window.getSelection().collapse(document.getElementsByClassName(newParentClass)[0].firstChild, 1);
            } else {
                window.getSelection().collapse(document.getElementsByClassName(newParentClass)[0], 1);
            }
        } else {
            window.getSelection().collapse(document.getElementsByClassName(newParentClass)[0].firstChild, 1);
        }
    } else {
        if (baseLength === offsetOnTextNode && parentNode.innerText[0].charCodeAt() === 160) {
            let newParentClass = `span${parseInt(parentClass.slice(4)) + 1}`;
            let newoffsetOnTextNode = offsetOnTextNode - 1;
            if(e.nativeEvent.inputType === 'deleteContentBackward'){
                window.getSelection().collapse(document.getElementsByClassName(parentClass)[0].firstChild, 1);
            } else {
                window.getSelection().collapse(document.getElementsByClassName(newParentClass)[0].firstChild, newoffsetOnTextNode);
            }
        } else {
            if(e.nativeEvent.inputType === 'insertParagraph'){
                window.getSelection().collapse(document.getElementsByClassName(parentClass)[0].firstChild, 1);
            } else {
                if(parentClass === ''){
                    window.getSelection().collapse(document.getElementsByClassName('span0')[0].firstChild, offsetOnTextNode);
                } else {
                    window.getSelection().collapse(document.getElementsByClassName(parentClass)[0].firstChild, offsetOnTextNode);
                }
            }
            
        }
    }

}

export default onInputCallback;