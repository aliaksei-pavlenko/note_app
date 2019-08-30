import convTextToSpans from './gears/convTextToSpans';
import colorizeSpans from './gears/colorizeSpans';

 
let initInnerHTMLCallback = (htmlElenemt,text) => {

    htmlElenemt.innerHTML = convTextToSpans(text).spanArray.join('');
    if(convTextToSpans(htmlElenemt.innerText).shadowSpansArray.length!==0){
        document.getElementsByClassName('editTags-S')[0].innerHTML = convTextToSpans(htmlElenemt.innerText).shadowSpansArray.join('');
    } else {
        document.getElementsByClassName('editTags-S')[0].innerHTML = '<span>no tags</span>'
    }
    colorizeSpans(convTextToSpans(htmlElenemt.innerText).tagsId);

}

export default initInnerHTMLCallback;