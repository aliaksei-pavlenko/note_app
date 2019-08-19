let convTextToSpans = (text) => {
    let allCharsArray = text.split('');
    let newAllCharsArray = [];
    allCharsArray.forEach(char=>{
        if(char.charCodeAt()===32){
            newAllCharsArray.push(` `);
        } else {
            newAllCharsArray.push(char);
        }
    })

    let arrayWithSpans = [];
    let wordArray = [];
    let newWordArray = [];
    let fullWord = [];

    newAllCharsArray.forEach(char=>{
        if(char.charCodeAt()!==32){
            fullWord.push(char);
        } else {
            if(fullWord.length === 0){
                wordArray.push(` `)
            } else {
                wordArray.push(`${fullWord.join('')}`)
                fullWord = [];
                wordArray.push(` `)
            }
            
        }
    })
    newAllCharsArray.forEach(char=>{
        if(newWordArray[(newWordArray.length - 1)]===undefined){ // добавить первый пустой []
            newWordArray.push([]);
            newWordArray[(newWordArray.length - 1)].push(char);
        } else {
            if(newWordArray[(newWordArray.length - 1)][0].charCodeAt()!==160){ 
                if(char.charCodeAt() === 160){
                    newWordArray.push([]);
                    newWordArray[(newWordArray.length - 1)].push(char);
                } else {
                    newWordArray[(newWordArray.length - 1)].push(char);
                }
            } else {
                newWordArray.push([]);
                newWordArray[(newWordArray.length - 1)].push(char);
            }
        }
    })
        
    let finalWordArray = [];

    newWordArray.forEach(charArray=>{
        finalWordArray.push(charArray.join(''))
    })

    let spanArray = [];
    let tagsId = {};

    for(let i=0;i<finalWordArray.length;i++){
        if(finalWordArray[i][0]==='#'){
            tagsId[i] = '';
            for(let a = 0;a<finalWordArray[i].length;a++){
                if(a!==0){
                    tagsId[i] += finalWordArray[i][a]; // fill tagsId object new properties
                }
            }
        };
        let currentSpan = `<span id='span${i}'>${finalWordArray[i]}</span>`;
        spanArray[i] = currentSpan;
    }

    let shadowSpansArray = [];

    for(let key in tagsId){
        let currentSpan = `<span id='shadow${key}'>${tagsId[key]}</span><span>  </span>`;
        shadowSpansArray.push(currentSpan);
    }
    return {spanArray:spanArray,shadowSpansArray:shadowSpansArray,tagsId:tagsId} //
}


let text = 'hello #guys from test #text';

console.log(convTextToSpans(text));



