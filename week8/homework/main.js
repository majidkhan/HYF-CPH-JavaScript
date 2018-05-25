
// Step 1

let arr = [];
for( let i=1; i<=1000;i++){
    arr.push(i);
}
console.log(arr);

/*
// here the solution using loops starts
const x = 3;
let divisbleBy3 = [];
for(let i=0;i<arr.length;i++){
    if(arr[i]%x===0){
        divisbleBy3.push(arr[i]);
    }
}
console.log("Numbers divisible by 3: ",divisbleBy3);
console.log("Amount of numbers divisible by 3: ",divisbleBy3.length);

const y = 10;
let divisbleBy10 = [];
for(let i=0;i<arr.length;i++){
    if(arr[i]%y===0){
        divisbleBy10.push(arr[i]);
    }
}
console.log("Numbers divisible by 10: ",divisbleBy10);
console.log("Amount of numbers divisible by 10: ",divisbleBy10.length);

const z = 21;
let divisbleBy21 = [];
for(let i=0;i<arr.length;i++){
    if(arr[i]%z===0){
        divisbleBy21.push(arr[i]);
    }
}
console.log("Numbers divisible by 21: ",divisbleBy21);
console.log("Amount of numbers divisible by 21: ",divisbleBy21.length);
<<<<<<< HEAD

function generateNumbersArray(n) {
    const numbers = [];
    for (i=1; i<=n; i++) {
        numbers.push(i);
    }
    return numbers;
} 

const numbers = generateNumbersArray(1000);
const dividers = generateNumbersArray(30);

console.log("Numbers",numbers);
=======
*/

// Solution to step 1

let otherArr = [];

for(let o = 1; o <= 30; o++) {
    otherArr.push(o);
}


const divisibleFactory = n => {
    let res = arr.filter(x => x%n === 0);
    console.log(`Total numbers divisible by ${n}: ${res.length}`);
}
const numberDivBy21 = divisibleFactory(21);
console.dir(numberDivBy21); 

otherArr.map(x=> divisibleFactory(x));
>>>>>>> fe212416c3bf4d72856fec1ede9a7c73e065adfd
