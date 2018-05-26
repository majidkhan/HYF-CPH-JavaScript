
// Step 1

function generateNumbersArray(n) {
    const numbers = [];
    for (i=1; i<=n; i++) {
        numbers.push(i);
    }
    return numbers;
} 

// return number if divisible
function isDivider(number, divider) {
    return number % divider === 0;
}

function divisibilityCheckerFactory(x) {

    // using for loop
    /*
    function checkerFn(n) {
        let divisibles = [];
        for(i = 1; i <= n.length; i++) {
            if(i % x === 0) {
                divisibles.push(i);
            }
        }
        return divisibles;
    }

    return checkerFn;
    */

    // Same thing can be written using Arrow functions as well
    // Try to do it at your own
    function lookerFn(n) {
        if(Array.isArray(n)) {
            return n.filter(i => isDivider(i,x));
        } else {
            divisibles = [];
            for(i = 1; i <= n; i++) {
                if(isDivider(i,x)) {
                    divisibles.push(i);
                }
            }
            return divisibles;
        }
    }
    return lookerFn;
}

/*
    Following functions returns total numbers divided by each number out of divider
*/

function checkDivisibilityFor1to30() {
    let divisibles = [];
    dividers.map(divider => {
        let checkDivisibility = divisibilityCheckerFactory(divider);
        divisibles.push(checkDivisibility(numbers).length);
    });
    return divisibles;
}


const numbers = generateNumbersArray(1000);
const dividers = generateNumbersArray(30);

const checkDivisibilityBy3 = divisibilityCheckerFactory(3);
const checkDivisibilityBy10 = divisibilityCheckerFactory(10);
const checkDivisibilityBy21 = divisibilityCheckerFactory(21);

console.log("Numbers divisible by 3: ",checkDivisibilityBy3(numbers));
console.log("Amount of numbers divisible by 3: ",checkDivisibilityBy3(numbers).length);

console.log("Numbers divisible by 10: ",checkDivisibilityBy10(numbers));
console.log("Amount of numbers divisible by 10: ",checkDivisibilityBy10(numbers).length);

console.log("Numbers divisible by 21: ",checkDivisibilityBy21(numbers));
console.log("Amount of numbers divisible by 21: ",checkDivisibilityBy21(numbers).length);

console.log("Amount of numbers divisible by 1 to 30: ",checkDivisibilityFor1to30());