//---5

var testOne = "What kind of variable am I?";
	//A string.

var testTwo = 256;
	//A number.

var testThree = false;
	//A boolean.

var testFour = 'true';
	//A string.

var testFive = '128';
	//A string.

var testSix = "";
	//A string.

//---6

var testOne = "hello" + "there";
	//A string. "hellothere"

var testTwo = '100' + 28;
	//A string. "10028"

var testThree = true + 3;
	//A number. 4

var testFour = 'false' + 5;
	//A string. "false5"

var testFive = '128' - 3;
	//A number. 125

var testSix = "" * 9;
	//A number. 0

var testSeven = 'zero' - 1;
	//Undefined. NaN

var testEight = 'five'.length;
	//A number. 4

var testNine = 'five'[0] + 'ever';
	//A string. "fever"

var testTen = 'a' > 'b';
	//A boolean. false

var testEleven = 'number'.length < 7;
	//A boolean. true

var testTwelve = '12' == 12;
	//A boolean. true

var testThirteen = 'twelve' == 12;
	//A boolean. false

var testFourteen = '14' === 14;
	//A boolean. false

var testFifteen = 'Hi there'[0] + 'open sesame'[2] + 'alohamora'[1] + 'eulalia'[4] + 'harkonnen'[4] + 'BATMAN!'[6];
	//A string. "Hello!"

//---7

var string1 = "Hello, ";
var string2 = "my name is ";
var string3 = "Kingsley Pappagiorgio.";

var combinedStrings = string1 + string2 + string3;

console.log(combinedStrings);
	//"Hello, my name is Kingsley Pappagiorgio."

//---8

var num1 = 8;
var num2 = 52;
var num3 = 60;

var combinedNumbers = num1 + num2 + num3;

console.log(combinedNumbers);
	//120

//---9

var mixedNum1 = 10;
var mixedString1 = "ten";
var mixedNum2 = "10";

var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;

console.log(mixedConcatenation);
	//1010ten

//---10

var num4 = 5;
var num5 = 0;

if(num4 > 1) {
	console.log("Num4 is greater than 1.")
} else {
	console.log("Num4 is NOT greater than 1.")
};
	//"Num4 is greater than 1."

//---11

var num4 = 5;
var num5 = 0;

if(num4 < num5 || num4 === num5) {
	console.log("If statement ran!");
} else if(num5 === "0" || true) {
	console.log("Else if statement ran!");
} else {
	console.log("Else statement ran!");
}
	//"Else if statement ran!"

//---12
var num4 = 5;
var num5 = 0;

if(num4 > num5 && num4 === num5) {
	console.log("If statement ran!");
} else if(num5 === "0" || true) {
	console.log("Else if statement ran!");
} else {
	console.log("Else statement ran!");
}
	//"Else if statement ran!"

//---13
var string1 = "this is a string";

for(var i = 0; i < string1.length; i = i + 1) {
	console.log(i, string1[i]);
};
	//0 "t"
	//1 "h"
	//2 "i"
	//3 "s"
	//(etc.)

//---14
var string2 = "coding";
var total = 0;

for(var i = 0; i < string2.length; i++) {
	total = total + i;
};

console.log(total);
	//15 (The for loop runs to completion before logging happens.)

//---15
var string3 = "onomatopoeia";

for(var i = 0; i < string3.length; i++) {
	if(string3[i] == "o") {
		console.log(i, string3[i]);
	};
};
	//0 "o"
	//2 "o"
	//6 "o"
	//8 "o"

//---16
var string4 = "You're gonna need a bigger boat.";

for(var i = 0; i < string4.length; i++) {
	if(string4[i] == "a" || string4[i] == "e" || string4[i] == "i" || string4[i] == "o" || string4[i] == "u") {
		console.log(string4[i]);
	};
};
	//(This will log all of the vowels in the sentence "You're gonna need a bigger boat" in order of appearance.)

//---17
function testStuff(a, b) {
	if(a > 25 && b < 100) {
		console.log(a + " is greater than 25 and " + b + " is less than 100");
	} else {
		console.log(a + " is NOT greater than 25 or " + b + " is NOT less than 100");
	};
};
testStuff(10, 101);
	//logs to console "10 is NOT greater than 25 or 101 is NOT less than 100"
testStuff(26, 99);
	//logs to console "26 is greater than 25 and 99 is less than 100"
testStuff(100, 25);
	//logs to console "100 is greater than 25 and 25 is less than 100"
//---18
function testStuff2(c, d) {
	if(c == 25) {
		return c + " is equal to 25";
	} else if(d <= 100) {
		return d + " is less than or equal to 100";
	} else {
		return "Neither if nor else if statement ran";
	};
};
testStuff2(26, 101);
	//returns "Neither if nor else if statement ran"
testStuff2(25, 99);
	//returns "25 is equal to 25"
testStuff2(102, 24);
	//returns "24 is less than or equal to 100"

//---19
function countVowels(someString) {
	var vowels = 0;

	for(var i = 0; i < someString.length; i++) {
		if(someString[i] == "a" || someString[i] == "e" || someString[i] == "i" || someString[i] == "o" || someString[i] == "u") {
			vowels++;
		};
	};
	return vowels;
};

countVowels("I am the very model of a modern major general");
	//returns 14
countVowels("Exeunt pursued by a bear");
	//returns 8
countVowels("o1234567891o");
	//returns 2