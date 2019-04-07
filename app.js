const calculation = require('../Javascript/public/assets/js/formulaCalculation');
const helper = require('../Javascript/public/assets/js/formulaAssets');

numberRange = helper.OutOfRange;
dataValidation = helper.DataValidation;
converterAlgorithm = calculation.RomanFormula;

// Usage
// To convert a roman numeral through this function, run the NODE APP and pass it a number as an argument:

const generateNumber = function(InputNumber) {
	if (numberRange(InputNumber) && dataValidation(InputNumber)) {
		return 'Please provide a number between 1 and 3999';
	} else {
		return converterAlgorithm(InputNumber);
	}
};

// Usage
// To convert a roman numeral through this function, run the NODE APP and pass it a number as an argument:

console.log(generateNumber(14));
