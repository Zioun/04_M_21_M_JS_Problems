// ? Task-3:
// ? Write a function to count the number of vowels in a string.

let vowelsString = "In the English language, there are five commonly recognized vowels: A, E, I, O, and U. These vowels can be found in various combinations to form words.";

function generator(vowelsString){
    let store = "";
    for(let catcher of vowelsString){
        if(catcher == "a" || catcher == "A" || catcher == "e" || catcher == "E" || catcher == "i" || catcher == "I" || catcher == "o" || catcher == "O" || catcher == "u" || catcher == "U"){
            store += catcher;
        }
    }
    return store.length;
}

let result = generator(vowelsString);
console.log(result);