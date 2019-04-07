// Array of object of the roman numerals
const RomanValidation = function() {
	let romanNumbers = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};

	return romanNumbers;
};

// Range checker -- Only support numbers between 1 and 3999
const OutOfRange = num => {
	const MIN = 1;
	const MAX = 3999;

	return num < MIN || num > MAX;
};

// Data checker -- Check if the data enter is strictly a Number format
const DataValidation = function conver(InputNumber) {
	if (typeof InputNumber === 'number') {
		return InputNumber;
	} else {
		return 'Please enter number in order to convert to Roman Numerals';
	}
};

module.exports = {
	RomanValidation,
	DataValidation,
	OutOfRange
};
