// ? Task-2:
// ? You are given an array of numbers. Count how many times the a number is repeated in the array.

let numbers = [5,6,11,12,98, 5];
function counter (numbers){
    let store = [];
    for(let catcher of numbers){
        if(catcher == 5){
            store += catcher;
        }
    }
    let storeLength = store.length;
    return storeLength;
}
let result = counter(numbers);
console.log(result);