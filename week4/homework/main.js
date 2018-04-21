/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with car objects with random color and speed
 * @param {integer} numberOfCars - The number of cars 
 * @returns {array} Array containing the car objects
 */
function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
    
    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
    }

    return cars;
}

function isBMWCar(car) {
	return car.make === 'BMW';
}

function getSpeedOfCar(car) {
	return car.speed;
}

function getMakeOfCar(car) {
	return car.make;
}

function calculateSum(acc, current) {
	return acc + current;
}

//  Generate a list of Cars array
let allCars = generateCars(20);
console.log("Array of all cars");
console.log(allCars);  // print cars to console

    // print cars to dom element # allCars
    function printAllCars(allCars) {
        let output = "";
        output += "<div class='wrap-table'><table class='table table-sm'>";    
        output += "<tr><th>"+ "#" +"</th><th>" + "Make" +"</th><th>"+ "Color" +"</th><th>"+ "Speed" +"</th></tr>";        

        allCars.forEach( function(item, i) {
            let indexOfitem = i+1;

            output += "<tr><td>"+ indexOfitem +"</td><td>" + item.make +"</td><td>"+ item.color +"</td><td>"+ item.speed +"</td></tr>";        
        });

        output += "</table></div>";
        return output;
    }

    document.getElementById("allCars").innerHTML = printAllCars(allCars);


/********************************************
    Task 1.1    List cars between 30 and 50
*********************************************/

function getCarsOfSpeedBetween30And60(car) {
    return (car.speed >= 30) && (car.speed < 60);
}

const carsSpeedRange30to60 = allCars.filter(getCarsOfSpeedBetween30And60);
console.log("Cars with speed between 30 and 60");
console.log(carsSpeedRange30to60);

    // Print out to DOM element # citySpeedLimit
    function printCarsSpeedRange30to60(carsSpeedRange30to60) {
        let output = "";
        output += "<div class='wrap-table'><table class='table table-sm'>";    
        output += "<tr><th>"+ "#" +"</th><th>" + "Maerke" +"</th><th>"+ "Farve" +"</th><th>"+ "Fart" +"</th></tr>";        

        carsSpeedRange30to60.forEach( function(item, i) {
            let indexOfitem = i+1;

            output += "<tr><td>"+ indexOfitem +"</td><td>" + item.make +"</td><td>"+ item.color +"</td><td>"+ item.speed +"</td></tr>";        
        });

        output += "</table></div>";
        return output;    
    }

    document.getElementById("citySpeedLimit").innerHTML = printCarsSpeedRange30to60(carsSpeedRange30to60);


/*******************************************************
    Task 1.2    List car makes that are not light yellow
********************************************************/

function getCarsNotLightYellow(car) {
    return car.color !== "lightyellow";
}

let carsNotLightYellow = allCars.filter(getCarsNotLightYellow); // array of cars that ate not light yellow
console.log("Cars other than light yellow");
console.log(carsNotLightYellow);

let makesOfNotLightYellow = carsNotLightYellow.map(getMakeOfCar); // makes of all cars that are not light yellow
console.log("Makes of car other than light yellow");
console.log(makesOfNotLightYellow);

    // Function to display cars in DOM element # carsNotYellow
    function printCarsnotLightYellow(carsNotLightYellow) {
        let output = "";
        output += "<div class='wrap-table'><table class='table table-sm'>";    
        output += "<tr><th>"+ "#" +"</th><th>" + "Make" +"</th><th>"+ "Color" +"</th><th>"+ "Speed" +"</th></tr>";        

        carsNotLightYellow.forEach( function(item, i) {
            let indexOfitem = i+1;

            output += "<tr><td>"+ indexOfitem +"</td><td>" + item.make +"</td><td>"+ item.color +"</td><td>"+ item.speed +"</td></tr>";        
        });

        output += "</table></div>";
        return output;    
    }

    document.getElementById("carsNotYellow").innerHTML = printCarsnotLightYellow(carsNotLightYellow);

    // Function to display cars in DOM element # makesWithNoYellowCars
    function printMakesOfCars(makesOfNotLightYellow) {
        let output = "";
        output += '<div class="wrap-list"><ul class="list-group">';    

        makesOfNotLightYellow.forEach( function(item) {
            output += "<li  class='list-group-item'>" + item +"</li>";        
        });

        output += "</ul></div>";
        return output;    
    }

    document.getElementById("makesWithNoYellowCars").innerHTML = printMakesOfCars(makesOfNotLightYellow);


/************************************************************************************
    Task 1.3    Change car array to be read by Danish. Change Keys to Danish language
*************************************************************************************/

function getCarsInDanish(car) {
    return { maerke : car.make, farve : car.color, fart : car.speed }
}

let allDanishCars = allCars.map(getCarsInDanish);
console.log("Dansk biler Array");
console.log(allDanishCars);

    // Function to display cars in dome element # danishCars
    function printDanishCars(allDanishCars) {
        let output = "";
        output += "<div class='wrap-table'><table class='table table-sm'>";    
        output += "<tr><th>"+ "#" +"</th><th>" + "Maerke" +"</th><th>"+ "Farve" +"</th><th>"+ "Fart" +"</th></tr>";        

        allDanishCars.forEach( function(item, i) {
            let indexOfitem = i+1;

            output += "<tr><td>"+ indexOfitem +"</td><td>" + item.maerke +"</td><td>"+ item.farve +"</td><td>"+ item.fart +"</td></tr>";        
        });

        output += "</table></div>";
        return output;         
        console.log(keys);
    }

    document.getElementById("danishCars").innerHTML = printDanishCars(allDanishCars);


/************************************************************************************
    Task 4.1    Custom Challenge
*************************************************************************************/

