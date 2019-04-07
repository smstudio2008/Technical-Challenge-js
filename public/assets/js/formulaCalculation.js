// import external js file
const formula = require('../js/formulaAssets');

// this is the algorithms for converting roman numerial to number- using simple for loops and while loop
let romanNumbers = formula.RomanValidation();
const RomanFormula = function convertToRoman(InputNumber) {
	let result = '';
	let convertToInteger = Math.floor(InputNumber);

	for (let key in romanNumbers) {
		while (convertToInteger >= romanNumbers[key]) {
			result += key;
			convertToInteger -= romanNumbers[key];
		}
	}

	return result;
};

module.exports = {
	RomanFormula
};
