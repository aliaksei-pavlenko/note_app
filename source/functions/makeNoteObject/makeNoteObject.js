import getWords from "./auxiliary functions/getWords";
import getTags from "./auxiliary functions/getTags";
import getTagsIds from "./auxiliary functions/getTagsIds";

let makeNoteObject = (div_contenteditable,div_with_tags) => {
    let string = div_contenteditable.innerText;
    div_contenteditable.innerText = '';
    div_with_tags.innerText = '';
    let noteObj = {
        id: Math.random(),
        date: new Date(),
        words: getWords(string),
        tags: getTags(string),
        tagsIds: getTagsIds(string)
    }
    return noteObj;
}

export default makeNoteObject;