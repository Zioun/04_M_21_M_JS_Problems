// 12 inch 1 feet 

function inchToFeet(inch){
    let convertToFeet = inch / 12 ;
    return convertToFeet;
}
let inchToFeetFun = inchToFeet(75);
console.log(inchToFeetFun);


// 12 inch 1 feet

function inchToFeet2 (inch2){
    let convertToFeet2 = inch2 / 12 ;
    let convertToFeetInt = parseInt(convertToFeet2)
    let foundInch = inch2 % 12;
    let result = convertToFeetInt + "feet " + foundInch + "inch";
    return result;
}

let inchToFeetFun2 = inchToFeet2(75);
console.log(inchToFeetFun2);


// mile to kilometre

function kilometreConverter(mile){
    let kiloMileCon = mile * 1.60934;
    let confloatkilo = kiloMileCon.toFixed(2);
    return confloatkilo;
}
let kilometreConverterFun = kilometreConverter(4);
console.log(kilometreConverterFun);


// kilmetre to mile 

function mileConverter(kilometre){
    let kilometreCon = kilometre * 0.621371;
    let confloatmile = kilometreCon.toFixed(2);
    return confloatmile;
}
let mileConverterFun = mileConverter(4);
console.log(mileConverterFun);