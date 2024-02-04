let nums = [10, 21, 30, 41, 50, 61, 70, 81, 90];
function oddSumGen(nums){
    let store = [];
    for(let catcher of nums){
        if(catcher % 2 === 1){
            store.push(catcher);
        }
    }
    let sum = 0;
    for(let sCatcher of store){
        sum += sCatcher;
    }
    return sum;
    
}
let oddSumGenName = oddSumGen(nums);
console.log(oddSumGenName);



// even number
let nums2 = [10, 21, 30, 41, 50, 61, 70, 81, 90];
function oddSumGen2(nums2){
    let store2 = [];
    for(let catcher2 of nums2){
        if(catcher2 % 2 === 0){
            store2.push(catcher2);
        }
    }
    let sum = 0;
    for(let sCatcher2 of store2){
        sum += sCatcher2;
    }
    return sum;
}
let oddSumGenName2 = oddSumGen2(nums2);
console.log(oddSumGenName2);

