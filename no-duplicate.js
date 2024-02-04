let alpha = ["A","B","C","A","E","B","C","H","B","C","F"];

function alphaFn (alpha){
    let duplicate = [];
    for(let catcher of alpha){
        if(duplicate.includes(catcher) == false){
            duplicate.push(catcher);
        }
    }
    return duplicate
}
let alphaFnName = alphaFn(alpha);
console.log(alphaFnName)