
/*
    Task 1  -   function adding 3 values
*/

function addThreeValues(a, b, c) {
    return a+b+c;
}
console.log( "Task 1\n", addThreeValues(4,2,4) ); // The function only adds integers but not float values.
/*
    Task 2  -   create a ColorCar function
*/

function colorCar (color) {
    return "A " + color + " car";
}

console.log("Task 2\n", colorCar("Red"));
/*
    Task 3  -   create object and a function. Display keys and values of the object using the function. 
*/

let person = {
    "firstName" : "Louis",
    "secondName" : "vuitton",
    "age" : 52,
    "country" : "France"
};

function showPerson(person,first) {
    var result = "";
    for (var i in person) {
        if (person.hasOwnProperty(i)) {
            result += first + '.' + i + ' = ' + person[i] + '\n';
        }
    }
    return result;
}

console.log("Task 3\n", showPerson(person, "person"));

/*
    Task 4 - create a function that accepts a color and a value 1: for car, 2: for motorcycle.
*/


function vehicleType(color, type) {
    let auto = "";
    switch(type) {
        case 1:
            auto = "car";
            return "a " + color + " " + auto;
            break;

        case 2:
            auto = "motorcycle";
            return "a " + color + " " + auto;
            break;
        
        default:
            console.log("Please ente a valid value i.e. 1 or 2 for vehicle type");
            break; 
    }
}

console.log("Task 4\n", vehicleType("Green", 2));


/*
    Task 5 - Conditional (ternary) Operator : Shortcut for If statement 
*/

console.log("Task 5\n", "is 3===3 ? User of Ternatary operator");
console.log( 3 == 3 ? true : false ); // Conditional (ternary) Operator


/*
    Task 6 - Create vehicle function that takes 3 argumensts and prints e.g. "a blue used car" 
*/

const carAge = function(age) {
    return age == 0 ? "new" : "used"
}


function vehicle (color, type, age) {
    let auto = "";

    switch(type) {
        case 1:
            auto = "car";
            return "a " + color + " " + carAge(age) + " " + auto;
            break;

        case 2:
            auto = "motorcycle";
            return "a " + color + " " + carAge(age) + " " + auto;
            break;
        
        default:
            return "Please ente a valid value i.e. 1 or 2 for vehicle type and 0 or >0 for car age";
            break; 
    }    
}


console.log("Task 6\n", vehicle("Red", 1, 0));
/*  
    Task 7 - list of vehicle
*/

let vehicleList = [];
vehicleList.push("motorbike", "caravan", "bike", "car", "truck", "bus", "train", "boat", "aircraft");
console.log("Task 7\n", vehicleList);


/*
    Task 8 - Get 3rd element from the list
*/

const thirdVehicle = vehicleList[2]
console.log("Task 8\n", "3rd vehicle is",thirdVehicle);

/*
    Task 9 - Change the function vehicle to use the list of question 4. So that vehicle("green", 3, 1) prints "a green new caravan".
*/

const carType = function(type) {
    if(vehicleList[type] === 'undefined') {
        return "Please enter an integer 0 to 8";
    } else {
        return vehicleList[type];
    }
}

function getVehicle(color, age, type) {
//    const color1 = color;
//    const age1 = carAge(age);
//    return "A " + color + carAge(age) + carType(type);
    return `A ${color} ${carAge(age)} ${carType(type)}`;
}

console.log("Task 9\n", getVehicle("Yellow", 0, 1));


/*
    Task 10 - Use the list of vehicles to write an advertisement. 
*/


// USE for loop to display advertisement offering all the services using 
function advertisement(x) {
    let r = "";
    for (let i = 0; i < x.length - 1; i++) { 
        r += x[i] + 's, ';
    }
    r += x[x.length-1] + 's';  
    return r;
}

// without using for loop
const addString = vehicleList.map(function(vehicle){
    return vehicle + "s";
}).join("s, ");


console.log("Task 10\n","Amazing Joe's Garage, we service", advertisement(vehicleList));

/*  
    Task 11 - Add one more vehicle to the vehicle list
*/

vehicleList.push('cycle');
console.log("Task 11\n",vehicleList);


/*
    Task 12 - Create an empty object
*/

const anEmptyObj = new Object;
console.log("Task 12\n", anEmptyObj);

/*
    Task 13 - Compare two objects
*/

var obj1 = {
    a: 1,
    b: "this is the letter b",
    c: {
      foo: "what is a foo anyway",
      bar: [1, 2, 3, 4]
    }
  };
  
  var obj2 = {
    a: "1",
    b: "this is the letter b",
    c: {
      foo: "what is a foo anyway",
      bar: [1, 2, 3, 4]
    }
  };

function compareObj(a,b) {
//    console.log(typeof(a) + " and " + typeof(b));
//    console.log(a.length + " and " + b.length);
}

compareObj(obj1,obj2);



/*
    Task 14 - Pass function as an argument to other function
*/


function calculate(func) {
}

const multiply = function() {
    console.log( `I am multiply function and I am just called`);
}


calculate(multiply);


/*  
    Task 15 - Compare two arrays
*/


var x = [1, 2, 3];
var y = [1, 2, 3];
var z = y;

console.log(x.length);


function abstractCompareArray1andArray2(a,b) {
    if(a == b) {
        return " are equal";
    }
    else {
        return " are not equal";
    }
}


function strictCompareArray1andArray2(a,b) {
    if(a === b) {
        return " are equal";
    }
    else {
        return " are not equal";
    }
}


console.log("Task 15");
console.log("X and Y",abstractCompareArray1andArray2(x,y));
console.log("X and Z",abstractCompareArray1andArray2(x,z));
console.log("Y and Z",abstractCompareArray1andArray2(z,y));

console.log("Y and Z", strictCompareArray1andArray2(y,z));

/*
    JQUERY
*/

