// ? Task-1:
// ? Write a function to convert temperature from Celsius to Fahrenheit.

function generator (celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit; 
}

let result = generator(2);
console.log(result);
