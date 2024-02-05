// ? Task-4:
// ? Write a function to find the longest word in a given string.
// ? sample-input: I am learning Programming to become a programmer
// ? sample-output: Programming

let textArray = "I am learning Programming to become a programmer";

function generator(textArray){
    let store = "";
    let foundWord = textArray.split(" ");
    for(let catcher of foundWord){
        if(store.length < catcher.length){
            store = catcher;
        }
    }
    return store;
}

let result = generator(textArray);
console.log(result);