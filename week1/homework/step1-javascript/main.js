/*  
	Task 1
	Declare a variable x and initialize it with an integer.
*/

	var x = 8;
	console.log(x);


/*  ######
	Task 2
	How do you round the number 7.25, to the nearest integer?
*/

	number  = 7.25;

	var task2 = Math.round(number);

	console.log(task2);

	/* 	
		Sources: 	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
					https://www.w3schools.com/jsref/jsref_round.asp
	*/

/*  ######
	Task 3
	Create a array called colors with the strings red, green and blue inside.
*/


	var colors = ['red', 'green', 'blue'];
	console.log(colors);

	/*
		Sorces:    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
	*/

/*  ######
	Task 4
	How can you find the length of the string you just created?
*/	

	var str = "find length of the string";

	console.log(str.length);


/*  ######
	Task 5
	Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type. 
*/	

	var a = 9;
	var b = 'Amazing';
	var c = 'world';


	if (typeof a == typeof b) {
		console.log('Same Type');
	}
	else {
		console.log('Not Same Type');
	}

	/*
		Sources:   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof 
	*/

/*  ######
	Task 6
	If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
*/	

	var x = 7;
	x = x % 3;

	console.log(x);	 // 1


/*  ######
	Task 7
	Write a program to answer the following questions:
	1: Can you store multiple types in an array? Numbers and strings?
*/	

	var arr = ['Hello', 4, true, 9.432, "yes"];

	console.log(arr);

/*	
	2: Can you compare inifities? (Not in Eyad's world) - does 6/0 == 10/0? How can you test this?
*/

	var val1 = 6/0;
	var val2 = 19/0;

	var addInfinites = val1+val2;
	var subInfinites = val1-val2;
	var divInfinites = val1/val2;
	var mulInfinites = val1*val2;

	console.log("Value 1 (6/0) = " + val1);
	console.log("Value 2 (19/0) = " + val2);

	console.log("Is value 1 equal to value 2 ");
	console.log(val1 == val2);


	console.log("Adding infinite values results: " + addInfinites);
	console.log("Subtracting infinite values results: " + subInfinites);
	console.log("Dividing infinite values results: " + divInfinites);
	console.log("Multiplying infinite values results: " + mulInfinites);