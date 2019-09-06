// import convTextToSpans from './gears/convTextToSpans';
// import colorizeSpans from './gears/colorizeSpans';

import convTextToSpans from '../../../InputComponent/gears/convTextToSpans';
import colorizeSpans from '../../../InputComponent/gears/colorizeSpans';

 
let initInnerHTMLCallback = (htmlElenemt,text,selector) => {

    htmlElenemt.innerHTML = convTextToSpans(text,selector).spanArray.join('');
    if(convTextToSpans(htmlElenemt.innerText,selector).shadowSpansArray.length!==0){
        document.getElementsByClassName('editTags-S')[0].innerHTML = convTextToSpans(htmlElenemt.innerText,selector).shadowSpansArray.join('');
    } else {
        document.getElementsByClassName('editTags-S')[0].innerHTML = '<span>no tags</span>'
    }
    colorizeSpans(convTextToSpans(htmlElenemt.innerText,selector).tagsId);

}

export default initInnerHTMLCallback;