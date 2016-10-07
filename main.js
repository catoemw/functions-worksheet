// EXERCISE 1

var arr = [1, 2, 3, 4, 5, 6, 7];


function sumArr (array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

// console.log(sumArr(arr));

console.assert(typeof sumArr([1, 2, 3]) === 'number');
console.assert(sumArr([1, 2, 3]) === 6);

// EXERCISE 2

function yell(string) {
	return string.toUpperCase();
}

// console.log(yell('hello'));

console.assert(yell('string') === 'STRING');

function yell10(string) {
	var yellArray = [];
	for (var j = 0; j < 10; j++) {
		yellArray.push(yell(string));
	}
	return yellArray;
}

// console.log(yell10('yo'));

console.assert(yell10('a')[3] === 'A');

// EXERCISE 3

function max (a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		return NaN;
	}
	if (a > b) {
		return a; 
	} else {
		return b;
	}
}

// console.log(max(3, 7));

// console.assert(typeof max() === 'number' );
// console.assert(max(1, 2) === 2);
// console.assert(max(2, 1) === 2);

// EXERCISE 4

function longest(x, y) {
	if (x.length > y.length) {
		return x;
	} else {
		return y;
	}
}

// console.log(longest('Bob', [1, 2, 3, 4]));

console.assert(longest('long', 'longer') === 'longer');

function findLongestWord(string) {
	var strArray = string.split(' ');
	var longWord;
	for (var k = 0; k < strArray.length - 1; k++) {
		longWord = longest(strArray[k], strArray[k + 1]);
	}
	return longWord;
}

// console.log(findLongestWord('This is a string.'));

console.assert(findLongestWord('a ab abc abcd') === 'abcd');

// EXERCISE 5

function isVowel(string) {
	if (string.toLowerCase() === ('a' || 'e' || 'i' || 'o' || 'u')) {
		return true;
	} else {
		return false;
	}
}

// console.log(isVowel('f'));

console.assert(isVowel('a') === true);
console.assert(isVowel('z') === false);

// EXERCISE 6

function reverseString(string) {
	var newStr = '';
	for (var m = string.length - 1; m >= 0; m--) {
		newStr += string[m];
	}
	return newStr;
}

// console.log(reverseString('This is a string'));

console.assert(reverseString('Blah blah') === 'halb halB');

function reverseStrings(array) {
	var newArr = [];
	for (var n = 0; n < array.length; n++) {
		newArr.push(reverseString(array[n]));
	}
	return newArr;
}

// console.log(reverseStrings(['first', 'second', 'third']));

console.assert(reverseStrings(['Ab', 'cde', 'fgh'])[1] === 'edc');

// EXERCISE 7

function adopt(gender, neutered, color) {
	if ((gender === 'female') && (neutered === true) && (color === 'white' || 'tan')) {
		return true;
	} else if ((gender === 'male') && (neutered === true) && (color !== 'white')) {
		return true;
	} else if ((typeof color === 'string') && (typeof neutered === 'boolean') && (color === 'black')) {
		return true;
	} else {
		return false;
	}
}

// console.log(adopt('male', true, 'brown'));

console.assert(typeof adopt() === 'boolean');


