// simple logic
// year will be leap year if the year is divisible by 4

function sleapYear (sleap){
    if(sleap % 4 === 0){
        return "Leap Year "+ true;
    }
}

let sleapYearfun = sleapYear (2020)
console.log(sleapYearfun);


// Strong logic

function leapYearGenerator(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }else if(year % 400 === 0){
        return true;
    }else{
        return false;
    }
}
let leapYearGeneratorFName = leapYearGenerator(2020);
console.log(leapYearGeneratorFName);