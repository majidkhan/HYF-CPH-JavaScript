
/*
    Task 1  -   function adding 3 values
*/

function addThreeValues(a, b, c) {
    return a+b+c;
}
console.log( addThreeValues(4,2,4) ); // The function only adds integers but not float values.
/*
    Task 2  -   create a ColorCar function
*/

function colorCar (color) {
    return "A " + color + "car";
}

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

console.log(showPerson(person, "person"));

/*
    Task 4 - create a function that accepts a color and a value 1: for car, 2: for motorcycle.
*/


function vehicleType(color, type) {
    var color = color;
    var auto = "";
    switch(type) {
        case 1:
            auto = "car";
            console.log("a " + color + " " + auto);
            break;

        case 2:
            auto = "motorcycle";
            console.log("a " + color + " " + auto);
            break;
        
        default:
            console.log("Please ente a valid value i.e. 1 or 2 for vehicle type");
            break; 
    }
}

vehicleType("Green", 2);


/*
    Task 5 - Conditional (ternary) Operator : Shortcut for If statement 
*/


console.log( 3 == 3 ? true : false ); // Conditional (ternary) Operator


/*
    Task 6 - Create vehicle function that takes 3 argumensts and prints e.g. "a blue used car" 
*/

function vehicle (color, type, age) {
    var color = color;
    var auto = "";
    var carAge = "";
    carAge = ( age == 0 ? "new" : "used");
    switch(type) {
        case 1:
            auto = "car";
            console.log("a " + color + " " + carAge + " " + auto);
            break;

        case 2:
            auto = "motorcycle";
            console.log("a " + color + " " + carAge + " " + auto);
            break;
        
        default:
            console.log("Please ente a valid value i.e. 1 or 2 for vehicle type and 0 or >0 for car age");
            break; 
    }    
}

vehicle("Red", 1, 0);

/*  
    Task 7 - list of vehicle
*/

let vehicleList = {};
vehicleList.push("motorbike", "caravan", "bike", "car", "truck", "bus", "train", "boat", "aircraft");
console.log(vehicleList);

/*
    JQUERY
*/


mkdir fruits
cd fruits
mkdir apple 
mkdir banana
cd apple
touch apple.txt
echo "This is apple file" > apple.txt
