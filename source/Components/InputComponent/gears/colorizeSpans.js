let colorizeSpans = (tagsId,selector) => {
    let idArray = [];
    for(let key in tagsId){
        idArray.push(key);
    }
    let colorsArray = ['#F64A46','orange','yellow','#8CCB5E','#30D5C8','#B565A7','pink'];
    if(selector === 'id'){
        for(let i = 0;i<idArray.length;i++){
            let currentId = idArray[i];
            let mainTag = document.getElementById(`span${currentId}`);
            let secondTag = document.getElementById(`shadow${currentId}`);
            if(mainTag!==null){mainTag.style.backgroundColor = colorsArray[i];}
            if(secondTag!==null){secondTag.style.backgroundColor = colorsArray[i];}
        }
    } else {
        for(let i = 0;i<idArray.length;i++){
            let currentId = idArray[i];
            let mainTag = document.getElementsByClassName(`span${currentId}`)[0];
            let secondTag = document.getElementsByClassName(`shadow${currentId}`)[0];
            if(mainTag!==null){mainTag.style.backgroundColor = colorsArray[i];}
            if(secondTag!==null){secondTag.style.backgroundColor = colorsArray[i];}
        }
    }
}

// how to use
// colorizeSpans(convTextToSpans('some text...').tagsId)

export default colorizeSpans;